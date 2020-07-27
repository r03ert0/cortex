/* globals THREE */

var camera, renderer, scene;
var container = document.querySelector( '#container' );
var dracoLoader = new THREE.DRACOLoader();
let mesh3d;
let meshFlat;
let sulcalDepth;
let color;

function screenshot() {
  var imgData;

  try {
    imgData = renderer.domElement.toDataURL();
  } catch(e) {
    console.log("Browser does not support taking screenshot of 3d context");

    return;
  }

  document.querySelector("#save").innerHTML = "<a href='"+imgData+"' download>Download image</a>";
}
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
}
function parseCurv(arrbuff) {
  var dv=new DataView(arrbuff);
  var i;
  var a, b, c, id;

  // read identifier: 3 bytes
  a=dv.getUint8(0)<<16;
  b=dv.getUint8(1)<<8;
  c=dv.getUint8(2);
  id=a+b+c;
  if(id !== 16777215) {
    // triangle mesh
    return;
  }

  var np=dv.getUint32(3);
  console.log("np", np);

  var data=new Float32Array(np);
  // to read the data, skip the previous 7 bytes, plus FaceCount and ValsPerVertex (2*Uint32=8 bytes)
  for(i=0; i<np; i++) { data[i]=dv.getFloat32(15+i*4); }

  return data;
}
function loadCortexMesh(path) {
  const pr = new Promise((resolve, reject) => {
    dracoLoader.load(path, function ( geometry ) {
      geometry.computeVertexNormals();
      const material = new THREE.MeshBasicMaterial({ vertexColors: THREE.VertexColors });
      var mesh = new THREE.Mesh( geometry, material );
      console.log("nverts", geometry.attributes.position.count);
      resolve(mesh);
      dracoLoader.dispose();
    }, null, function (err) {
      reject(err);
    });
  });

  return pr;
}
function loadCortexSulcalDepth() {
  const pr = new Promise((resolve, reject) => {
    var oReq = new XMLHttpRequest();
    oReq.open("GET", "lrh.curv", true);
    oReq.responseType = "arraybuffer";
    oReq.onload = function() {
      sulcalDepth = parseCurv(this.response);
      console.log("sulcalDepth length:", sulcalDepth.length);
      const rgb = new Float32Array( sulcalDepth.length * 3 );
      for(let i=0; i<sulcalDepth.length; i++) {
        const val=(sulcalDepth[i]+1)/2;
        rgb[3*i+0] = val;
        rgb[3*i+1] = val;
        rgb[3*i+2] = val;
      }
      resolve(rgb);
    };
    oReq.onerror = function (err) {
      reject(err);
    };
    oReq.send();
  });

  return pr;
}
async function init() {
  camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 2000 );

  // sup
  camera.position.set( 0, 0, 7 );
  camera.lookAt( 0, 0, -0.1 );

  // inf
  // camera.position.set( 0, 0, -250 );
  // camera.lookAt( 0, 0, 0.1 );

  // lat right
  // camera.position.set( 250, 0, 0 );
  // camera.lookAt( -0.1, 0, 0 );
  // camera.rotateZ(Math.PI/2);

  // lat left
  // camera.position.set( -250, 0, 0 );
  // camera.lookAt( 0.1, 0, 0 );
  // camera.rotateZ(-Math.PI/2);

  scene = new THREE.Scene();
  scene.background = new THREE.Color( 0xffffff );
  mesh3d = await loadCortexMesh("lrh.flat.drc");
  meshFlat = await loadCortexMesh("lrh.flat.drc");
  color = await loadCortexSulcalDepth();

  mesh3d.geometry.setAttribute( 'color', new THREE.BufferAttribute( color, 3 ) );

  // Apply colours to mesh
  // for(let i=0; i<mesh3d.geometry.faces.length; i++) {
  //   const {a, b, c} = mesh3d.geometry.faces[i];
  //   mesh3d.geometry.faces[i].vertexColors=[color[a], color[b], color[c]];
  // }
  scene.add( mesh3d );

  // renderer
  renderer = new THREE.WebGLRenderer( { antialias: true, preserveDrawingBuffer: true});
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.shadowMap.enabled = true;
  container.appendChild( renderer.domElement );
  window.addEventListener( 'resize', onWindowResize, false );

  animate();
}
function render() {
  var timer = Date.now() * 0.0003;
  renderer.render( scene, camera );
}
function animate() {
  render();
  requestAnimationFrame( animate );
}

// Configure and create Draco decoder.
dracoLoader.setDecoderPath( './' );
// dracoLoader.setDecoderConfig( { type: 'js' } );

init();
