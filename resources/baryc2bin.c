#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <math.h>

#define EPSILON  0.000001 // small enough to avoid division overflow

typedef struct
{
    float   x,y,z;
}float3D;
typedef struct
{
    int    a,b,c;
}int3D;
typedef struct
{
    int     np;     // number of vertices
    int     nt;     // number of triangles
    float3D *p;     // vertices
    int3D   *t;     // triangles
}Mesh;

int     endianness;
#define kMOTOROLA   1
#define kINTEL      2
void checkEndianness(void)
{
    char    b[]={1,0,0,0};
    int     num=*(int*)b;
    
    if(num==16777216)
        endianness=kMOTOROLA;
    else
        endianness=kINTEL;
}
void swapint(int *n)
{
    char    *by=(char*)n;
    char    sw[4]={by[3],by[2],by[1],by[0]};
    
    *n=*(int*)sw;
}
void swapfloat(float *n)
{
    char    *by=(char*)n;
    char    sw[4]={by[3],by[2],by[1],by[0]};
    
    *n=*(float*)sw;
}
void swaptriangles(Mesh *m)
{
    int     nt=m->nt;
    int3D   *t=m->t;
    int     i;
    
    for(i=0;i<nt;i++)
    {
        swapint(&t[i].a);
        swapint(&t[i].b);
        swapint(&t[i].c);
    }
}
void swapvertices(Mesh *m)
{
    int     np=m->np;
    float3D *p=m->p;
    int     i;
    
    for(i=0;i<np;i++)
    {
        swapfloat(&p[i].x);
        swapfloat(&p[i].y);
        swapfloat(&p[i].z);
    }
}
float3D sub3D(float3D a, float3D b)
{
    return (float3D){a.x-b.x,a.y-b.y,a.z-b.z};
}
float3D sca3D(float3D a, float t)
{
    return (float3D){a.x*t,a.y*t,a.z*t};
}
float dot3D(float3D a, float3D b)
{
    return (float){a.x*b.x+a.y*b.y+a.z*b.z};
}
float3D cross3D(float3D a, float3D b)
{
    return (float3D){a.y*b.z-a.z*b.y,a.z*b.x-a.x*b.z,a.x*b.y-a.y*b.x};
}
float norm3D(float3D a)
{
    return sqrt(a.x*a.x+a.y*a.y+a.z*a.z);
}
float3D normal3D(int i, Mesh *m)
{
    float3D *p=m->p;
    int3D   *t=m->t;
    float3D N;
    
    N=cross3D(sub3D(p[t[i].b],p[t[i].a]),sub3D(p[t[i].c],p[t[i].a]));
    return sca3D(N,1/norm3D(N));
}
// Adapted from intersect_RayTriangle()
// Copyright 2001, softSurfer (www.softsurfer.com)
// This code may be freely used and modified for any purpose
// providing that this copyright notice is included with it.
// SoftSurfer makes no warranty for this code, and cannot be held
// liable for any real or imagined damage resulting from its use.
// Users of this code must verify correctness for their application.
//    Input:  vector "x", triangle index "it"
//    Output: *c0, *c1 = the triangle-based coordinates of the intersection (when it exists)
//    Return: -1 = triangle is degenerate (a segment or point)
//             0 = disjoint (no intersect)
//             1 = intersect in unique point I1
//             2 = are in the same plane
int intersect_VectorTriangle(float3D x, int i, float *c0, float *c1, Mesh *m)
{
    float3D *p=m->p;
    int3D   *t=m->t;
    int3D   T=t[i];
    float3D xx;
    float3D u, v, n;             // triangle vectors
    float3D dir,w0, w;               // ray vectors
    float   r, a, b;             // params to calc ray-plane intersect

    u=sub3D(p[T.b],p[T.a]);
    v=sub3D(p[T.c],p[T.a]);
    n=cross3D(u,v);
    if(norm3D(n)<=EPSILON)         // triangle is degenerate, do not deal with this case
        return -1;

    dir=x;
    w0 = sca3D(p[T.a],-1);
    a = dot3D(n,w0);
    b = dot3D(n,dir);
    if (fabs(b) < EPSILON) {        // ray is parallel to triangle plane
        if (a == 0)                 // ray lies in triangle plane
            return 2;
        else
            return 0;              // ray disjoint from plane
    }

    // get intersect point of ray with triangle plane
    r = -a/b;
    if (r < 0.0)                    // ray goes away from triangle
        return 0;                   // => no intersect
    // for a segment, also test if (r > 1.0) => no intersect

    xx = sca3D(dir,r);    // intersect point of ray and plane

    // is I inside T?
    float    uu, uv, vv, wu, wv, D;
    uu = dot3D(u,u);
    uv = dot3D(u,v);
    vv = dot3D(v,v);
    w = sub3D(xx,p[T.a]);
    wu = dot3D(w,u);
    wv = dot3D(w,v);
    D = uv * uv - uu * vv;

    // get and test parametric coords
    *c0 = (uv * wv - vv * wu) / D;
    if(fabs(*c0)<EPSILON)
        *c0=0;
    if(fabs(1-*c0)<EPSILON)
        *c0=1;
    if (*c0 < 0.0 || *c0 > 1.0)        // I is outside T
        return 0;

    *c1 = (uv * wu - uu * wv) / D;
    if(fabs(*c1)<EPSILON)
        *c1=0;
    if(fabs(1-*c1)<EPSILON)
        *c1=1;
    if (*c1 < 0.0 || (*c0 + *c1) > 1.0)  // I is outside T
        return 0;

    return 1;                      // I is in T
}
int FreeSurfer_load_mesh(char *path, Mesh *m)
{
    int     *np=&(m->np);
    int     *nt=&(m->nt);
    float3D **p=&(m->p);
    int3D   **t=&(m->t);
    FILE    *f;
    int     id,a,b,c;
    char    date[256],info[256];


    f=fopen(path,"r");
    
    if(f==NULL)
        return 1;

    // read triangle/quad identifier: 3 bytes
    a=((int)(u_int8_t)fgetc(f))<<16;
    b=((int)(u_int8_t)fgetc(f))<<8;
    c=(u_int8_t)fgetc(f);
    id=a+b+c;
    if(id==16777214)    // triangle mesh
    {
        fgets(date,256,f);
        fgets(info,256,f);
        fread(np,1,sizeof(int),f);    if(endianness==kINTEL) swapint(np);
        fread(nt,1,sizeof(int),f);    if(endianness==kINTEL) swapint(nt);
        // read vertices
        *p=(float3D*)calloc(*np,sizeof(float3D));
            if((*p)==NULL) printf("ERROR: Cannot allocate memory for points [FreeSurfer_load_mesh]\n");
            else
            {
        fread((char*)(*p),*np,3*sizeof(float),f);      if(endianness==kINTEL) swapvertices(m);
        // read triangles
        *t=(int3D*)calloc(*nt,sizeof(int3D));
            if((*t)==NULL) printf("ERROR: Cannot allocate memory for triangles [FreeSurfer_load_mesh]\n");
            else
            {
        fread((char*)(*t),*nt,3*sizeof(int),f);        if(endianness==kINTEL) swaptriangles(m);
            }
            }
    }
    fclose(f);
    
    return 0;
}
int barycentricProjection(char *path_m,char *path_rm, char *path_bin)
{
    /*
    If the mesh is a smooth mesh (for example, spherical), and given
    a smooth reference mesh (rm) print for each vertex in rm its
    barycentric coordinates within the triangles of the mesh. This
    permits, for example, to map data defined over the vertices of
    the mesh over rm.
    */
    Mesh    m,rm;
    FILE	*fo;
    int     nt;
    int3D   *t;
    int     np_rm;
    float3D *p,*p_rm;
    float   c0,c1;
    int     i,j,result;
    float3D n;
    float   flipTest;
    
    FreeSurfer_load_mesh(path_m,&m);
    FreeSurfer_load_mesh(path_rm,&rm);
    
    // Check whether the meshes are properly oriented
    n=normal3D(0,&m);
    flipTest=dot3D(m.p[m.t[0].a],n);
    if(flipTest<0)
    {
        printf("ERROR: the mesh is mis-oriented\n");
        return 1;
    }
    n=normal3D(0,&rm);
    flipTest=dot3D(rm.p[rm.t[0].a],n);
    if(flipTest<0)
    {
        printf("ERROR: rm is mis-oriented\n");
        return 1;
    }
    
    // Mesh (smooth)
    p=m.p;
    nt=m.nt;
    t=m.t;

    // Reference mesh (smooth)
    np_rm=rm.np;
    p_rm=rm.p;
    
    // Open output file for writing
    fo=fopen(path_bin,"w");
    
    // Write mesh topology
    for(i=0;i<nt;i++)
    {
    	fwrite(&(m.t[i].a),1,sizeof(int),fo);
    	fwrite(&(m.t[i].b),1,sizeof(int),fo);
    	fwrite(&(m.t[i].c),1,sizeof(int),fo);
    }
    printf("Mesh topology written\n");

    // Write barycentric coordinates
    for(i=0;i<np_rm;i++)
    {
        if((int)(100*i/(float)np_rm)<(int)(100*(i+1)/(float)np_rm))
        	printf("%i%%\n",(int)(100*(i+1)/(float)np_rm));
        for(j=0;j<nt;j++)
        {
            result=intersect_VectorTriangle(p_rm[i],j,&c0,&c1,&m);
            if(result==1)
            {
                //printf("%i %f %f\n",j,c0,c1);
                fwrite(&j,1,sizeof(int),fo);
                fwrite(&c0,1,sizeof(float),fo);
                fwrite(&c1,1,sizeof(float),fo);
                break;
            }
        }
        if(j==nt)
        {
            int k,imin=0;
            float   d,dmin=1000;
            printf("ERROR: could not resample point %i of the reference mesh (%f %f %f)\n",i,p_rm[i].x,p_rm[i].y,p_rm[i].z);
            for(k=0;k<m.np;k++)
            {
                d=norm3D(sub3D(m.p[k],p_rm[i]));
                if(d<dmin)
                {
                    dmin=d;
                    imin=k;
                }
            }
            printf("closest vertex %i (%f,%f,%f), dist=%f\n",imin,p[imin].x,p[imin].y,p[imin].z,dmin);

            result=intersect_VectorTriangle(p_rm[i],1984,&c0,&c1,&m);
            printf(">> t[1984] c0,c1: %f, %f\n",c0,c1);
            result=intersect_VectorTriangle(p_rm[i],1920,&c0,&c1,&m);
            printf(">> t[1920] c0,c1: %f, %f\n",c0,c1);

            printf("triangles including vertex %i\n",imin);
            for(k=0;k<nt;k++)
            {
                if(t[k].a==imin||t[k].b==imin||t[k].c==imin)
                {
                    printf("%i. %i,%i,%i\n",k,t[k].a,t[k].b,t[k].c);
                    printf("   %i: %f,%f,%f\n",t[k].a,p[t[k].a].x,p[t[k].a].y,p[t[k].a].z);
                    printf("   %i: %f,%f,%f\n",t[k].b,p[t[k].b].x,p[t[k].b].y,p[t[k].b].z);
                    printf("   %i: %f,%f,%f\n",t[k].c,p[t[k].c].x,p[t[k].c].y,p[t[k].c].z);
                }
            }
            return 1;
        }
    }
    printf("Barycentric coordinates written\n");
        
    fclose(fo);
    
    return 0;
}

int main(int argc, char *argv[])
{
	/* Computes barycentric coordinates for all
	vertices in left and right fsaverage meshes based
	on fsaverage4 meshes using meshgeometry, this
	code converts the resulting text files to
	binary */
	// argv[1]	mesh to convert, fsaverage4/surf/lh.shpere.reg for example
	// argv[2]	reference mesh, fsaverage/surf/lh.sphere.reg or rh.sphere.reg
	// argv[3]	binary version

	checkEndianness();
	barycentricProjection(argv[1],argv[2],argv[3]);
	/*
	FILE	*fo=fopen(argv[2],"w");
	char	str[512];
	int		a,n=0;
	float	c0,c1;
	
	while(!feof(fi))
	{
		fgets(str,256,fi);
		sscanf(str," %i %f %f ",&a,&c0,&c1);
		
		fwrite(&a,1,sizeof(int),fo);
		fwrite(&c0,1,sizeof(float),fo);
		fwrite(&c1,1,sizeof(float),fo);
		n++;
	}
	fclose(fi);
	fclose(fo);
	printf("%i barycentric coordinates written\n",n);
	*/
}