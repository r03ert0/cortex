/* globals THREE */

const jet = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.0208, 0.0417, 0.0625, 0.0833, 0.1042, 0.1250, 0.1458, 0.1667, 0.1875, 0.2083, 0.2292, 0.2500, 0.2708, 0.2917, 0.3125, 0.3333, 0.3542, 0.3750, 0.3958, 0.4167, 0.4375, 0.4583, 0.4792, 0.5000, 0.5208, 0.5417, 0.5625, 0.5833, 0.6042, 0.6250, 0.6458, 0.6667, 0.6875, 0.7083, 0.7292, 0.7500, 0.7708, 0.7917, 0.8125, 0.8333, 0.8542, 0.8750, 0.8958, 0.9167, 0.9375, 0.9583, 0.9792, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 0.9792, 0.9583, 0.9375, 0.9167, 0.8958, 0.8750, 0.8542, 0.8333, 0.8125, 0.7917, 0.7708, 0.7500, 0.7292, 0.7083, 0.6875, 0.6667, 0.6458, 0.6250, 0.6042, 0.5833, 0.5625, 0.5417, 0.5208, 0.5000,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.0208, 0.0417, 0.0625, 0.0833, 0.1042, 0.1250, 0.1458, 0.1667, 0.1875, 0.2083, 0.2292, 0.2500, 0.2708, 0.2917, 0.3125, 0.3333, 0.3542, 0.3750, 0.3958, 0.4167, 0.4375, 0.4583, 0.4792, 0.5000, 0.5208, 0.5417, 0.5625, 0.5833, 0.6042, 0.6250, 0.6458, 0.6667, 0.6875, 0.7083, 0.7292, 0.7500, 0.7708, 0.7917, 0.8125, 0.8333, 0.8542, 0.8750, 0.8958, 0.9167, 0.9375, 0.9583, 0.9792, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 0.9792, 0.9583, 0.9375, 0.9167, 0.8958, 0.8750, 0.8542, 0.8333, 0.8125, 0.7917, 0.7708, 0.7500, 0.7292, 0.7083, 0.6875, 0.6667, 0.6458, 0.6250, 0.6042, 0.5833, 0.5625, 0.5417, 0.5208, 0.5000, 0.4792, 0.4583, 0.4375, 0.4167, 0.3958, 0.3750, 0.3542, 0.3333, 0.3125, 0.2917, 0.2708, 0.2500, 0.2292, 0.2083, 0.1875, 0.1667, 0.1458, 0.1250, 0.1042, 0.0833, 0.0625, 0.0417, 0.0208, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0.5208, 0.5417, 0.5625, 0.5833, 0.6042, 0.6250, 0.6458, 0.6667, 0.6875, 0.7083, 0.7292, 0.7500, 0.7708, 0.7917, 0.8125, 0.8333, 0.8542, 0.8750, 0.8958, 0.9167, 0.9375, 0.9583, 0.9792, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 1.0000, 0.9792, 0.9583, 0.9375, 0.9167, 0.8958, 0.8750, 0.8542, 0.8333, 0.8125, 0.7917, 0.7708, 0.7500, 0.7292, 0.7083, 0.6875, 0.6667, 0.6458, 0.6250, 0.6042, 0.5833, 0.5625, 0.5417, 0.5208, 0.5000, 0.4792, 0.4583, 0.4375, 0.4167, 0.3958, 0.3750, 0.3542, 0.3333, 0.3125, 0.2917, 0.2708, 0.2500, 0.2292, 0.2083, 0.1875, 0.1667, 0.1458, 0.1250, 0.1042, 0.0833, 0.0625, 0.0417, 0.0208, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
];
const a2009s = [
  {index:0, name: "Unknown", shortname: "unknown", color: [0, 0, 0], value: 0 + 0<<8 + 0<<16},
  {index:1, name: "G&S_frontomargin", shortname: "gsfrontomargin", color: [23, 220, 60], value: 23 + 220<<8 + 60<<16},
  {index:2, name: "G&S_occipital_inf", shortname: "gsoccipitalinf", color: [23, 60, 180], value: 23 + 60<<8 + 180<<16},
  {index:3, name: "G&S_paracentral", shortname: "gsparacentral", color: [63, 100, 60], value: 63 + 100<<8 + 60<<16},
  {index:4, name: "G&S_subcentral", shortname: "gssubcentral", color: [63, 20, 220], value: 63 + 20<<8 + 220<<16},
  {index:5, name: "G&S_transv_frontopol", shortname: "gstransvfrontopol", color: [13, 0, 250], value: 13 + 0<<8 + 250<<16},
  {index:6, name: "G&S_cingul-Ant", shortname: "gscingulant", color: [26, 60, 0], value: 26 + 60<<8 + 0<<16},
  {index:7, name: "G&S_cingul-Mid-Ant", shortname: "gscingulmidant", color: [26, 60, 75], value: 26 + 60<<8 + 75<<16},
  {index:8, name: "G&S_cingul-Mid-Post", shortname: "gscingulmidpost", color: [26, 60, 150], value: 26 + 60<<8 + 150<<16},
  {index:9, name: "G_cingul-Post-dorsal", shortname: "gcingulpostdorsal", color: [25, 60, 250], value: 25 + 60<<8 + 250<<16},
  {index:10, name: "G_cingul-Post-ventral", shortname: "gcingulpostventral", color: [60, 25, 25], value: 60 + 25<<8 + 25<<16},
  {index:11, name: "G_cuneus", shortname: "gcuneus", color: [180, 20, 20], value: 180 + 20<<8 + 20<<16},
  {index:12, name: "G_front_inf-Opercular", shortname: "gfrontinfopercular", color: [220, 20, 100], value: 220 + 20<<8 + 100<<16},
  {index:13, name: "G_front_inf-Orbital", shortname: "gfrontinforbital", color: [140, 60, 60], value: 140 + 60<<8 + 60<<16},
  {index:14, name: "G_front_inf-Triangul", shortname: "gfrontinftriangul", color: [180, 220, 140], value: 180 + 220<<8 + 140<<16},
  {index:15, name: "G_front_middle", shortname: "gfrontmiddle", color: [140, 100, 180], value: 140 + 100<<8 + 180<<16},
  {index:16, name: "G_front_sup", shortname: "gfrontsup", color: [180, 20, 140], value: 180 + 20<<8 + 140<<16},
  {index:17, name: "G_Ins_lg&S_cent_ins", shortname: "ginslgscentins", color: [23, 10, 10], value: 23 + 10<<8 + 10<<16},
  {index:18, name: "G_insular_short", shortname: "ginsularshort", color: [225, 140, 140], value: 225 + 140<<8 + 140<<16},
  {index:19, name: "G_occipital_middle", shortname: "goccipitalmiddle", color: [180, 60, 180], value: 180 + 60<<8 + 180<<16},
  {index:20, name: "G_occipital_sup", shortname: "goccipitalsup", color: [20, 220, 60], value: 20 + 220<<8 + 60<<16},
  {index:21, name: "G_oc-temp_lat-fusifor", shortname: "goctemplatfusifor", color: [60, 20, 140], value: 60 + 20<<8 + 140<<16},
  {index:22, name: "G_oc-temp_med-Lingual", shortname: "goctempmedlingual", color: [220, 180, 140], value: 220 + 180<<8 + 140<<16},
  {index:23, name: "G_oc-temp_med-Parahip", shortname: "goctempmedparahip", color: [65, 100, 20], value: 65 + 100<<8 + 20<<16},
  {index:24, name: "G_orbital", shortname: "gorbital", color: [220, 60, 20], value: 220 + 60<<8 + 20<<16},
  {index:25, name: "G_pariet_inf-Angular", shortname: "gparietinfangular", color: [20, 60, 220], value: 20 + 60<<8 + 220<<16},
  {index:26, name: "G_pariet_inf-Supramar", shortname: "gparietinfsupramar", color: [100, 100, 60], value: 100 + 100<<8 + 60<<16},
  {index:27, name: "G_parietal_sup", shortname: "gparietalsup", color: [220, 180, 220], value: 220 + 180<<8 + 220<<16},
  {index:28, name: "G_postcentral", shortname: "gpostcentral", color: [20, 180, 140], value: 20 + 180<<8 + 140<<16},
  {index:29, name: "G_precentral", shortname: "gprecentral", color: [60, 140, 180], value: 60 + 140<<8 + 180<<16},
  {index:30, name: "G_precuneus", shortname: "gprecuneus", color: [25, 20, 140], value: 25 + 20<<8 + 140<<16},
  {index:31, name: "G_rectus", shortname: "grectus", color: [20, 60, 100], value: 20 + 60<<8 + 100<<16},
  {index:32, name: "G_subcallosal", shortname: "gsubcallosal", color: [60, 220, 20], value: 60 + 220<<8 + 20<<16},
  {index:33, name: "G_temp_sup-G_T_transv", shortname: "gtempsupgttransv", color: [60, 60, 220], value: 60 + 60<<8 + 220<<16},
  {index:34, name: "G_temp_sup-Lateral", shortname: "gtempsuplateral", color: [220, 60, 220], value: 220 + 60<<8 + 220<<16},
  {index:35, name: "G_temp_sup-Plan_polar", shortname: "gtempsupplanpolar", color: [65, 220, 60], value: 65 + 220<<8 + 60<<16},
  {index:36, name: "G_temp_sup-Plan_tempo", shortname: "gtempsupplantempo", color: [25, 140, 20], value: 25 + 140<<8 + 20<<16},
  {index:37, name: "G_temporal_inf", shortname: "gtemporalinf", color: [220, 220, 100], value: 220 + 220<<8 + 100<<16},
  {index:38, name: "G_temporal_middle", shortname: "gtemporalmiddle", color: [180, 60, 60], value: 180 + 60<<8 + 60<<16},
  {index:39, name: "Lat_Fis-ant-Horizont", shortname: "latfisanthorizont", color: [61, 20, 220], value: 61 + 20<<8 + 220<<16},
  {index:40, name: "Lat_Fis-ant-Vertical", shortname: "latfisantvertical", color: [61, 20, 60], value: 61 + 20<<8 + 60<<16},
  {index:41, name: "Lat_Fis-post", shortname: "latfispost", color: [61, 60, 100], value: 61 + 60<<8 + 100<<16},
  {index:42, name: "Medial_wall", shortname: "medialwall", color: [25, 25, 25], value: 25 + 25<<8 + 25<<16},
  {index:43, name: "Pole_occipital", shortname: "poleoccipital", color: [140, 20, 60], value: 140 + 20<<8 + 60<<16},
  {index:44, name: "Pole_temporal", shortname: "poletemporal", color: [220, 180, 20], value: 220 + 180<<8 + 20<<16},
  {index:45, name: "S_calcarine", shortname: "scalcarine", color: [63, 180, 180], value: 63 + 180<<8 + 180<<16},
  {index:46, name: "S_central", shortname: "scentral", color: [221, 20, 10], value: 221 + 20<<8 + 10<<16},
  {index:47, name: "S_cingul-Marginalis", shortname: "scingulmarginalis", color: [221, 20, 100], value: 221 + 20<<8 + 100<<16},
  {index:48, name: "S_circular_insula_ant", shortname: "scircularinsulaant", color: [221, 60, 140], value: 221 + 60<<8 + 140<<16},
  {index:49, name: "S_circular_insula_inf", shortname: "scircularinsulainf", color: [221, 20, 220], value: 221 + 20<<8 + 220<<16},
  {index:50, name: "S_circular_insula_sup", shortname: "scircularinsulasup", color: [61, 220, 220], value: 61 + 220<<8 + 220<<16},
  {index:51, name: "S_collat_transv_ant", shortname: "scollattransvant", color: [100, 200, 200], value: 100 + 200<<8 + 200<<16},
  {index:52, name: "S_collat_transv_post", shortname: "scollattransvpost", color: [10, 200, 200], value: 10 + 200<<8 + 200<<16},
  {index:53, name: "S_front_inf", shortname: "sfrontinf", color: [221, 220, 20], value: 221 + 220<<8 + 20<<16},
  {index:54, name: "S_front_middle", shortname: "sfrontmiddle", color: [141, 20, 100], value: 141 + 20<<8 + 100<<16},
  {index:55, name: "S_front_sup", shortname: "sfrontsup", color: [61, 220, 100], value: 61 + 220<<8 + 100<<16},
  {index:56, name: "S_interm_prim-Jensen", shortname: "sintermprimjensen", color: [141, 60, 20], value: 141 + 60<<8 + 20<<16},
  {index:57, name: "S_intrapariet&P_trans", shortname: "sintraparietptrans", color: [143, 20, 220], value: 143 + 20<<8 + 220<<16},
  {index:58, name: "S_oc_middle&Lunatus", shortname: "socmiddlelunatus", color: [101, 60, 220], value: 101 + 60<<8 + 220<<16},
  {index:59, name: "S_oc_sup&transversal", shortname: "socsuptransversal", color: [21, 20, 140], value: 21 + 20<<8 + 140<<16},
  {index:60, name: "S_occipital_ant", shortname: "soccipitalant", color: [61, 20, 180], value: 61 + 20<<8 + 180<<16},
  {index:61, name: "S_oc-temp_lat", shortname: "soctemplat", color: [221, 140, 20], value: 221 + 140<<8 + 20<<16},
  {index:62, name: "S_oc-temp_med&Lingual", shortname: "soctempmedlingual", color: [141, 100, 220], value: 141 + 100<<8 + 220<<16},
  {index:63, name: "S_orbital_lateral", shortname: "sorbitallateral", color: [221, 100, 20], value: 221 + 100<<8 + 20<<16},
  {index:64, name: "S_orbital_med-olfact", shortname: "sorbitalmedolfact", color: [181, 200, 20], value: 181 + 200<<8 + 20<<16},
  {index:65, name: "S_orbital-H_Shaped", shortname: "sorbitalhshaped", color: [101, 20, 20], value: 101 + 20<<8 + 20<<16},
  {index:66, name: "S_parieto_occipital", shortname: "sparietooccipital", color: [101, 100, 180], value: 101 + 100<<8 + 180<<16},
  {index:67, name: "S_pericallosal", shortname: "spericallosal", color: [181, 220, 20], value: 181 + 220<<8 + 20<<16},
  {index:68, name: "S_postcentral", shortname: "spostcentral", color: [21, 140, 200], value: 21 + 140<<8 + 200<<16},
  {index:69, name: "S_precentral-inf-part", shortname: "sprecentralinfpart", color: [21, 20, 240], value: 21 + 20<<8 + 240<<16},
  {index:70, name: "S_precentral-sup-part", shortname: "sprecentralsuppart", color: [21, 20, 200], value: 21 + 20<<8 + 200<<16},
  {index:71, name: "S_suborbital", shortname: "ssuborbital", color: [21, 20, 60], value: 21 + 20<<8 + 60<<16},
  {index:72, name: "S_subparietal", shortname: "ssubparietal", color: [101, 60, 60], value: 101 + 60<<8 + 60<<16},
  {index:73, name: "S_temporal_inf", shortname: "stemporalinf", color: [21, 180, 180], value: 21 + 180<<8 + 180<<16},
  {index:74, name: "S_temporal_sup", shortname: "stemporalsup", color: [223, 220, 60], value: 223 + 220<<8 + 60<<16},
  {index:75, name: "S_temporal_transverse", shortname: "stemporaltransverse", color: [221, 60, 60], value: 221 + 60<<8 + 60<<16}
];

const leftData = {};
const rightData = {};
const fs4fs = {};
const fs5fs = {};
var camera, container, renderer, scene;
let colormapType = 'discrete';

let mesh;
let meshFlat;
let mesh3d;
let color;
let sulcalDepth;
let leftLUT;
let rightLUT;
let leftAnnot2009s;
let rightAnnot2009s;

let globalMin = null;
let globalMax = null;

function screenshot() {
  let imgData;
  let svgData;

  try {
    imgData = renderer.domElement.toDataURL();
    const svg = document.querySelector("#colorbar").innerHTML;
    console.log(svg);
    svgData = `data:image/svg+xml;utf8,<svg>${svg}</svg>`;
  } catch(e) {
    console.log("Browser does not support taking screenshot of 3d context");

    return;
  }
  document.querySelector("#saveImg").innerHTML = "<a href='"+imgData+"' download>Download image</a>";
  document.querySelector("#saveSvg").innerHTML = "<a href='"+svgData+"' download>Download colorbar</a>";
}
function makeColorbar({min, max, mean}) {
  const n=parseInt(jet.length/3);
  let svg = "";
  const svgHeight = 300;
  const fontHeight = 12;
  const W=20;
  const H=svgHeight/n; // because the svg height is 300px
  for(let i=0; i<n; i++) {
    const [R, G, B] = [255*jet[i+n*0], 255*jet[i+Number(n)], 255*jet[i+n*2]];
    svg += `<rect x="0" y="${H*(n-i-1)}" width="${W}" height="${H*1.1}" fill="rgb(${R}, ${G}, ${B})" />\n`;
  }
  svg+= `<text x=25 y=${fontHeight} fill="black">${max}</text>`;
  svg+= `<text x=25 y=${150+fontHeight/2} fill="black">${mean}</text>`;
  svg+= `<text x=25 y=${svgHeight} fill="black">${min}</text>`;

  document.getElementById('colorbar').innerHTML = svg;
}
function parseMyBinMesh(arrbuff) {
  const data = new DataView(arrbuff);
  let np=0;
  let nt=0;
  let a, b, c, i, x, y;
  var geometry = new THREE.Geometry();

  np=data.getInt32(0, true);
  nt=data.getInt32(4, true);
  console.log("mesh np", np);
  for(i=0; i<np; i++) {
    x=data.getFloat32((2+i*2+0)*4, true);
    y=data.getFloat32((2+i*2+1)*4, true);
    geometry.vertices.push(new THREE.Vector3(x, y, 0));
  }
  for(i=0; i<nt; i++) {
    a=data.getInt32((2+np*2+i*3)*4, true);
    b=data.getInt32((2+np*2+i*3+1)*4, true);
    c=data.getInt32((2+np*2+i*3+2)*4, true);
    geometry.faces.push(new THREE.Face3(a, b, c));
  }

  return geometry;
}
function parseMyBinMesh3(arrbuff) {
  const data=new DataView(arrbuff);
  let np=0;
  let nt=0;
  let a, b, c, i, x, y, z;
  var geometry = new THREE.Geometry();
  const scale = 1/35;
  let sumx = 0;
  let sumy = 0;
  let sumz = 0;

  np=data.getInt32(0, true);
  nt=data.getInt32(4, true);
  console.log("mesh np", np);
  for(i=0; i<np; i++) {
    x=scale * data.getFloat32((2+i*3+0)*4, true);
    y=scale * data.getFloat32((2+i*3+1)*4, true);
    z=scale * data.getFloat32((2+i*3+2)*4, true);
    sumx+=x;
    sumy+=y;
    sumz+=z;
  }
  for(i=0; i<np; i++) {
    x=scale * data.getFloat32((2+i*3+0)*4, true);
    y=scale * data.getFloat32((2+i*3+1)*4, true);
    z=scale * data.getFloat32((2+i*3+2)*4, true);
    geometry.vertices.push(new THREE.Vector3(x-sumx/np, y-sumy/np, z-sumz/np));
  }
  for(i=0; i<nt; i++) {
    a=data.getInt32((2+np*3+i*3+0)*4, true);
    b=data.getInt32((2+np*3+i*3+1)*4, true);
    c=data.getInt32((2+np*3+i*3+2)*4, true);
    geometry.faces.push(new THREE.Face3(a, b, c));
  }

  return geometry;
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
function parseAnnot(arrbuff) {
  const data = new DataView(arrbuff);
  const n = data.getInt32(0);
  const tmp = new Int32Array(n);
  for(let i=0; i<n; i++) {
    tmp[i]=data.getInt32(4*(2*i+2));
  }

  return tmp;
}
function parseMGH(arrbuff) {
  var data=new DataView(arrbuff);
  var i;
  var ndim1, ndim2, ndim3;

  // read header
  // const v=data.getInt32(0);
  ndim1=data.getInt32(4);
  ndim2=data.getInt32(8);
  ndim3=data.getInt32(12);
  // const nframes=data.getInt32(16);
  // const type=data.getInt32(20);
  // const dof=data.getInt32(24);

  // read data
  var np=ndim1*ndim2*ndim3;
  console.log("np", np);

  var tmp=new Float32Array(np);
  for(i=0; i<np; i++) { tmp[i]=data.getFloat32(24+64*4+i*4); } // skip further 64*4 bytes to get to the data

  return tmp;
}
function parseTxt(arrbuff) {
  var str=String.fromCharCode.apply(null, new Uint8Array(arrbuff));
  var arr=str.split(" ");
  var data=new Float32Array(arr.length);
  var i;
  for(i=0; i<arr.length; i++) { data[i]=parseFloat(arr[i]); }

  return data;
}
function parseFloatData(arrbuff, obj) {
  var data=new DataView(arrbuff);
  var i, j,
    str="";
  var arr, np;

  obj.min=0;
  obj.max=0;

  // read header line
  i=0;
  while(data.getUint8(i)!==10 && data.getUint8(i)!==13 && i<100) { str+=String.fromCharCode(data.getUint8(i++)); }
  arr=str.split(" ");
  np=parseInt(arr[0]);
  // const ddim=parseInt(arr[1]);
  // const ver=parseInt(arr[2]);
  i++;

  // read data
  var tmp=new Float32Array(np);
  for(j=0; j<np; j++) { tmp[j]=data.getFloat32(i+j*4, true); }

  // find max/min
  for(i=0; i<np; i++) {
    if(i===0) {
      obj.min=tmp[i];
      obj.max=tmp[i];
    }
    if(obj.min>tmp[i]) { obj.min=tmp[i]; }
    if(obj.max<tmp[i]) { obj.max=tmp[i]; }
  }

  return tmp;
}
function loadURL(path) {
  const pr = new Promise((resolve, reject) => {
    var oReq = new XMLHttpRequest();
    oReq.open("GET", path, true);
    oReq.responseType = "arraybuffer";
    oReq.onload = function() {
      resolve(this.response);
    };
    oReq.onerror = function (err) {
      reject(err);
    };
    oReq.send();
  });

  return pr;
}
function loadFile(filename) {
  const pr = new Promise((resolve, reject) => {
    var reader = new FileReader();
    reader.onload = function() {
      resolve(this.result);
    };
    reader.onerror = function (err) {
      reject(err);
    };
    reader.readAsArrayBuffer(filename);
  });

  return pr;
}
function loadCortexMesh(content) {
  const geometry=parseMyBinMesh(content);
  geometry.sourceType = "myBin";
  const newMesh=new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ vertexColors: THREE.VertexColors, side: THREE.DoubleSide }));
  newMesh.name = "flat";

  return newMesh;
}
function loadCortexMesh3(content) {
  const geometry=parseMyBinMesh3(content);
  geometry.sourceType = "myBin";
  const newMesh=new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ vertexColors: THREE.VertexColors, side: THREE.DoubleSide }));
  newMesh.name = "cortex";

  return newMesh;
}
function loadCortexSulcalDepth(content) {
  sulcalDepth=parseCurv(content);
  color=[];
  var i, val;
  for(i=0; i<sulcalDepth.length; i++) {
    val=(sulcalDepth[i]+1)/2;
    color.push(new THREE.Color().setRGB(val, val, val));
  }
}
function loadCorr(arrbuff) {
  var data=new Int32Array(arrbuff);

  return data;
}
function loadLUT(content) {
  const lut=loadCorr(content);

  return lut;
}
function onWindowResize() {
  renderer.render(scene, camera);
}
function redraw(minMax) {
  const n=parseInt(jet.length/3);
  var B, G, R, v0, v1;
  let max, min;

  if(typeof minMax !== "undefined") {
    ({min, max} = minMax);
  } else if(typeof leftData.data !== "undefined" && typeof rightData.data !== "undefined") {
    min=Math.min(leftData.min, rightData.min);
    max=Math.max(leftData.max, rightData.max);
  } else if(typeof leftData.data !== "undefined") {
    ({min, max} = leftData);
  } else if(typeof rightData.data !== "undefined") {
    ({min, max} = rightData.min);
  }

  document.getElementById("min").value = parseInt(min*1000)/1000;
  document.getElementById("max").value = parseInt(max*1000)/1000;

  makeColorbar({
    min: parseInt(min*100)/100,
    max: parseInt(max*100)/100,
    mean: parseInt(0.5*(min+max)*100)/100
  });

  scene.add(mesh);

  if(typeof leftData.data !== "undefined") {
    // Map hemisphere data to whole cortex
    for(let i=0; i<parseInt(leftLUT.length/2); i++) {
      const a=leftLUT[2*i+0]; // a: hemisphere index
      const b=leftLUT[2*i+1]; // b: whole brain index
      if(b<0) { continue; }
      v0=(sulcalDepth[b]+1)/2;

      if(colormapType==='continuous') { v1=parseInt(n*(leftData.data[a]-min)/(max-min)); }
      if(colormapType==='discrete') { v1=parseInt(((n/(max+1))*leftData.data[a])%n); }
      R=jet[v1+n*0];
      G=jet[v1+Number(n)];
      B=jet[v1+n*2];
      color[b].setRGB(v0*R, v0*G, v0*B);
    }
    mesh.geometry.colorsNeedUpdate = true;
  }

  if(typeof rightData.data !== "undefined") {
    for(let i=0; i<parseInt(rightLUT.length/2); i++) {
      const a=rightLUT[2*i+0]; // a: hemisphere index
      const b=rightLUT[2*i+1]; // b: whole brain index
      if(b<0) { continue; }
      v0=(sulcalDepth[b]+1)/2;
      if(colormapType==='continuous') { v1=parseInt(n*(rightData.data[a]-min)/(max-min)); }
      if(colormapType==='discrete') { v1=parseInt(((n/(max+1))*rightData.data[a])%n); }
      R=jet[v1+n*0];
      G=jet[v1+Number(n)];
      B=jet[v1+n*2];
      color[b].setRGB(v0*R, v0*G, v0*B);
    }
    mesh.geometry.colorsNeedUpdate = true;
  }

  // Apply colours to mesh
  for(let i=0; i<mesh.geometry.faces.length; i++) {
    const {a, b, c}=mesh.geometry.faces[i];
    mesh.geometry.faces[i].vertexColors=[color[a], color[b], color[c]];
  }

  onWindowResize();

  scene.remove(mesh);

  screenshot();
}
function findMinMax(data) {
  const obj={};
  let max, min;
  [min] = data;
  max = min;
  for(const val of data) {
    if(val<min) { min = val; }
    if(val>max) { max = val; }
  }
  obj.min=parseInt(min*1000)/1000;
  obj.max=parseInt(max*1000)/1000;

  return obj;
}
function adjustMinMax() {
  globalMin = document.getElementById("min").value;
  globalMax = document.getElementById("max").value;
  redraw({min: globalMin, max: globalMax});
}
function configureData(data, hemisphere) {
  const obj=findMinMax(data);

  switch(hemisphere) {
  case "leftFile":
    leftData.data=data;
    leftData.min=obj.min;
    leftData.max=obj.max;
    document.getElementById("minLeft").textContent = parseInt(obj.min*1000)/1000;
    document.getElementById("maxLeft").textContent = parseInt(obj.max*1000)/1000;
    break;
  case "rightFile":
    rightData.data=data;
    rightData.min=obj.min;
    rightData.max=obj.max;
    document.getElementById("minRight").textContent = parseInt(obj.min*1000)/1000;
    document.getElementById("maxRight").textContent = parseInt(obj.max*1000)/1000;
    break;
  }
}
function loadFS4() {
  const pr = new Promise((resolve, reject) => {
    var oReq = new XMLHttpRequest();
    oReq.open("GET", "data/fs4fs.bin", true);
    oReq.addEventListener("progress", function(e) {
      document.querySelector("#FS4FSProgress").innerHTML = "fsaverage4:"+parseInt(100*e.loaded/2027544)+"%";
    });
    oReq.responseType = "arraybuffer";
    oReq.onload = function() {
      console.log("fs4fs finished loading");

      var arrbuff=this.response;
      var tmp=new DataView(arrbuff);
      var i;
      var np=163842,
        np4=2562;
      var nt4=2*(np4-2); // number of triangles, because the surface is topologically spherical

      fs4fs.trian=new Int32Array(nt4*3);
      fs4fs.LUT=new Int32Array(np);
      fs4fs.coord=new Float32Array(2*np);

      // Load mesh topology
      for(i=0; i<nt4; i++) {
        fs4fs.trian[3*i+0]=tmp.getInt32((3*i+0)*4, true);
        fs4fs.trian[3*i+1]=tmp.getInt32((3*i+1)*4, true);
        fs4fs.trian[3*i+2]=tmp.getInt32((3*i+2)*4, true);
      }

      // Load barycentric coordinates
      for(i=0; i<np; i++) {
        fs4fs.LUT[i] =tmp.getInt32((3*nt4+ 3*i+0)*4, true);
        fs4fs.coord[2*i+0]=tmp.getFloat32((3*nt4+ 3*i+1)*4, true);
        fs4fs.coord[2*i+1]=tmp.getFloat32((3*nt4+ 3*i+2)*4, true);
      }

      resolve(fs4fs);
      document.querySelector("p#progress #FS4FSProgress").remove();
    };
    oReq.onerror = function (err) {
      reject(err);
    };
    document.querySelector("p#progress").innerHTML = "<div id='FS4FSProgress'></div>";
    oReq.send();
    console.log("fs4fs started loading");
  });

  return pr;
}
function loadFS5() {
  const pr = new Promise((resolve, reject) => {
    var oReq = new XMLHttpRequest();
    oReq.open("GET", "data/fs5fs.bin", true);
    oReq.addEventListener("progress", function(e) {
      document.querySelector("#FS5FSProgress").innerHTML = "fsaverage5:"+parseInt(100*e.loaded/2027544)+"%";
    });
    oReq.responseType = "arraybuffer";
    oReq.onload = function() {
      console.log("fs5fs finished loading");

      var arrbuff=this.response;
      var tmp=new DataView(arrbuff);
      var i;
      var np=163842,
        np5=10242;
      var nt5=2*(np5-2); // number of triangles, because the surface is topologically spherical

      fs5fs.trian=new Int32Array(nt5*3);
      fs5fs.LUT=new Int32Array(np);
      fs5fs.coord=new Float32Array(2*np);

      // Load mesh topology
      for(i=0; i<nt5; i++) {
        fs5fs.trian[3*i+0]=tmp.getInt32((3*i+0)*4, true);
        fs5fs.trian[3*i+1]=tmp.getInt32((3*i+1)*4, true);
        fs5fs.trian[3*i+2]=tmp.getInt32((3*i+2)*4, true);
      }

      // Load barycentric coordinates
      for(i=0; i<np; i++) {
        fs5fs.LUT[i] =tmp.getInt32((3*nt5+ 3*i+0)*4, true);
        fs5fs.coord[2*i+0]=tmp.getFloat32((3*nt5+ 3*i+1)*4, true);
        fs5fs.coord[2*i+1]=tmp.getFloat32((3*nt5+ 3*i+2)*4, true);
      }
      document.querySelector("p#progress #FS5FSProgress").remove();
      resolve();
    };
    oReq.onerror = function (err) {
      reject(err);
    };
    document.querySelector("p#progress").innerHTML = "<div id='FS5FSProgress'></div>";
    oReq.send();
    console.log("fs5fs started loading");
  });

  return pr;
}
async function transformFS4(data) {
  if(typeof fs4fs.LUT === "undefined") {
    await loadFS4();
  }

  console.log("Converting fsaverage4 into fsaverage");
  let i;
  const np=163842;
  const tmp=new Float32Array(np);
  let c0, c1, c2, t, x;

  for(i=0; i<np; i++) { tmp[i]=0; }
  for(i=0; i<np; i++) {
    t=fs4fs.LUT[i]; // t is the triangle in fs4 that contains vertex i in fsaverage
    c0=fs4fs.coord[2*i+0]; // c0 is the 1st barycentric coordinate
    c1=fs4fs.coord[2*i+1]; // c1 is the 2nd barycentric coordinate
    c2=1-c0-c1; // c2 is the 3rd barycentric coordinate

    /* trilinear */
    /*-----------*/
    x= data[fs4fs.trian[3*t+0]]*c2+
       data[fs4fs.trian[3*t+1]]*c0+
       data[fs4fs.trian[3*t+2]]*c1;

    /* nearest neighbour */
    if(c2>=c0 && c2>=c1) { x=data[fs4fs.trian[3*t+0]]; }
    if(c0>=c1 && c0>=c2) { x=data[fs4fs.trian[3*t+1]]; }
    if(c1>=c2 && c1>=c0) { x=data[fs4fs.trian[3*t+2]]; }

    /*-------------------*/

    tmp[i]=x;
  }

  return tmp;
}
async function transformFS5(data) {
  if(typeof fs5fs.LUT === "undefined") {
    await loadFS5();
  }

  console.log("Converting fsaverage4 into fsaverage");
  var i,
    np=163842;
  var tmp=new Float32Array(np);
  var c0, c1, c2, t;

  for(i=0; i<np; i++) { tmp[i]=0; }
  for(i=0; i<np; i++) {
    t=fs5fs.LUT[i]; // t is the triangle in fs5 that contains vertex i in fsaverage
    c0=fs5fs.coord[2*i+0]; // c0 is the 1st barycentric coordinate
    c1=fs5fs.coord[2*i+1]; // c1 is the 2nd barycentric coordinate
    c2=1-c0-c1; // c2 is the 3rd barycentric coordinate
    tmp[i]= data[fs5fs.trian[3*t+0]]*c2+
        data[fs5fs.trian[3*t+1]]*c0+
        data[fs5fs.trian[3*t+2]]*c1;
  }

  return tmp;
}
async function loadFreesurferCurvData(content) {
  let data=parseCurv(content);
  if(data.length===2562) {
    data = await transformFS4(data);
  } else if(data.length===10242) {
    data = await transformFS5(data);
  }

  return data;
}
async function loadFreesurferAnnotData(content) {
  let data=parseAnnot(content);
  if(data.length===2562) {
    data = await transformFS4(data);
  } else if(data.length===10242) {
    data = await transformFS5(data);
  }

  return data;
}
async function loadFreesurferMGHData(content) {
  var data=parseMGH(content);

  if(data.length===2562) {
    data = await transformFS4(data);
  } else if(data.length===10242) {
    data = await transformFS5(data);
  }

  return data;
}
async function loadTxtData(content) {
  var data=parseTxt(content);

  if(data.length===2562) {
    data = await transformFS4(data);
  } else if(data.length===10242) {
    data = await transformFS5(data);
  }

  // else if(data.length===5124) {
  //   // fsaverage4, both hemispheres
  //   const right = transformFS4(data.subarray(2562), "rightFile");
  //   data = transformFS4(data, "leftFile");
  // }

  return data;
}
function loadFloatData(content, id) {
  var obj={};
  var tmp=parseFloatData(content, obj);
  console.log("Float data loaded, min,max="+obj.min+","+obj.max);
  switch(id) {
  case "leftFile":
    leftData.data=tmp;
    leftData.min=obj.min;
    leftData.max=obj.max;
    document.getElementById("minLeft").textContent = parseInt(obj.min*1000)/1000;
    document.getElementById("maxLeft").textContent = parseInt(obj.max*1000)/1000;
    break;
  case "rightFile":
    rightData.data=tmp;
    rightData.min=obj.min;
    rightData.max=obj.max;
    document.getElementById("minRight").textContent = parseInt(obj.min*1000)/1000;
    document.getElementById("maxRight").textContent = parseInt(obj.max*1000)/1000;
    break;
  }
  redraw();
}
function loadCSVAnnotationData(content) {
  // prepare labels
  const a2k = {};
  for(const lab of a2009s) {
    const [r, g, b] = lab.color;
    const val = String(r + (g<<8) + (b<<16));
    a2k[val] = lab;
  }

  // prepare csv values
  var str = String.fromCharCode.apply(null, new Uint8Array(content));
  const arr = str.split("\n");
  const csv = {};
  for(const row of arr) {
    const [c1, c2]=row.split(",");
    if(c2) {
      const c3 = c2.split("_of_")[1];
      if(c3) {
        const a=c3.split("_");
        const b=parseFloat(c1);
        const [reg, hem] = [a[0], a[1]];
        csv[`${reg}_${hem}`] = b;
      }
    }
  }

  // data to left hemisphere
  leftData.data = new Float32Array(leftAnnot2009s.length);
  for(let i = 0; i<leftAnnot2009s.length; i++) {
    const ireg = leftAnnot2009s[i];
    const reg = `${a2k[ireg].shortname}_left`;
    if({}.hasOwnProperty.call(csv, reg)) {
      const val = csv[reg];
      leftData.data[i] = val;
    }
  }
  const leftMinMax = findMinMax(leftData.data);
  leftData.min = leftMinMax.min;
  leftData.max = leftMinMax.max;

  // data to right hemisphere
  rightData.data = new Float32Array(rightAnnot2009s.length);
  for(let i = 0; i<rightAnnot2009s.length; i++) {
    const ireg = rightAnnot2009s[i];
    const reg = `${a2k[ireg].shortname}_right`;
    if({}.hasOwnProperty.call(csv, reg)) {
      const val = csv[reg];
      rightData.data[i] = val;
    }
  }
  const rightMinMax = findMinMax(rightData.data);
  rightData.min = rightMinMax.min;
  rightData.max = rightMinMax.max;

  // display min and max
  document.getElementById("minLeft").textContent = parseInt(leftData.min*1000)/1000;
  document.getElementById("maxLeft").textContent = parseInt(leftData.max*1000)/1000;
  document.getElementById("minRight").textContent = parseInt(rightData.min*1000)/1000;
  document.getElementById("maxRight").textContent = parseInt(rightData.max*1000)/1000;

  // redraw
  colormapType = 'continuous';
  redraw();
}
async function handleFileLoad(content, filename, hemisphere) {
  var ext=filename.substr(filename.lastIndexOf('.') + 1);
  switch(ext) {
  case "area":
  case "avg_curv":
  case "avg_sulc":
  case "avg_thickness":
  case "curv":
  case "sulc":
  case "thickness":
  case "H":
  case "K":
    colormapType='continuous';
    configureData(await loadFreesurferCurvData(content), hemisphere);
    break;
  case "annot":
    colormapType='discrete';
    configureData(await loadFreesurferAnnotData(content), hemisphere);
    break;
  case "mgh":
    colormapType='continuous';
    configureData(await loadFreesurferMGHData(content), hemisphere);
    break;
  case "txt":
    colormapType='discrete';
    configureData(await loadTxtData(content), hemisphere);
    break;
  case "float":
    colormapType='continuous';
    loadFloatData(content, hemisphere); // does its own config
    break;
  case "csv":
    colormapType='continuous';
    loadCSVAnnotationData(content);// does its own config
    break;
  default:
    return new Error("Unknown file format extension \""+ext+"\"");
  }
}
async function handleFileSelect(evt) {
  var hemisphere=evt.target.id;
  var [file] = evt.target.files;
  var filename=file.name;
  const content = await loadFile(file);
  await handleFileLoad(content, filename, hemisphere);
  redraw();
}
function view(ori) {
  if(ori === "flat") {
    mesh = meshFlat;
  } else {
    mesh = mesh3d;
  }

  switch(ori) {
  case "sup":
    camera.position.set(0, 0, 11);
    camera.lookAt(new THREE.Vector3(0, 0, -1));
    break;
  case "inf":
    camera.position.set(0, 0, -11);
    camera.lookAt(new THREE.Vector3(0, 0, 1));
    break;
  case "ant":
    camera.position.set(0, 11, 0);
    camera.lookAt(new THREE.Vector3(0, -1, 0));
    camera.rotateZ(Math.PI/2);
    break;
  case "pos":
    camera.position.set(0, -11, 0);
    camera.lookAt(new THREE.Vector3(0, 1, 0));
    camera.rotateZ(Math.PI/2);
    break;
  case "left":
    camera.position.set(-11, 0, 0);
    camera.lookAt(new THREE.Vector3(-1, 0, 0));
    camera.rotateZ(-Math.PI/2);
    break;
  case "right":
    camera.position.set(11, 0, 0);
    camera.lookAt(new THREE.Vector3(1, 0, 0));
    camera.rotateZ(Math.PI/2);
    break;
  case "flat":
    camera.position.set(0, 0, 11);
    camera.lookAt(new THREE.Vector3(0, 0, -1));
    break;
  }
  redraw();
}
function initRender() {
  container = document.getElementById('cortex');
  var width = container.clientWidth;
  var height = container.clientWidth;

  camera = new THREE.PerspectiveCamera(30, width/height, 0.1, 3000 );
  camera.position.set(0, 0, 11);

  renderer = new THREE.WebGLRenderer({preserveDrawingBuffer:true});
  renderer.setSize(width, height);
  container.appendChild(renderer.domElement);

  scene = new THREE.Scene();

  var ambientLight=new THREE.AmbientLight(0x505050);
  scene.add(ambientLight);
  var light=new THREE.SpotLight( 0xffffff, 1.5 );
  light.position.set( 0, 500, 2000 );
  scene.add( light );

  window.addEventListener('resize', onWindowResize, false);

  console.log("renderer initialised");
}
async function init() {
  meshFlat = await loadCortexMesh(await loadURL("data/flat4.bin"));
  mesh3d = await loadCortexMesh3(await loadURL("data/lrh.bin"));
  await loadCortexSulcalDepth(await loadURL("data/lrh.curv"));
  leftLUT = await loadLUT(await loadURL("data/lh.corr"));
  rightLUT = await loadLUT(await loadURL("data/rh.corr"));
  mesh = mesh3d;
  leftAnnot2009s = await loadFreesurferAnnotData(await loadURL("data/lh.aparc.a2009s.annot"), "leftFile");
  rightAnnot2009s = await loadFreesurferAnnotData(await loadURL("data/rh.aparc.a2009s.annot"), "rightFile");

  document.getElementById('leftFile').addEventListener('change', handleFileSelect, false);
  document.getElementById('rightFile').addEventListener('change', handleFileSelect, false);

  initRender();
  redraw();
}
init();
