#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(int argc, char *argv[])
{
	// argv[1]	mesh in text ply format
	// argv[2]	binary data
	FILE	*fi=fopen(argv[1],"r");
	FILE	*fo=fopen(argv[2],"w");
	char	str[512],str1[256],str2[256],str3[256];
	int		flag=0,np=0,nt=0;
	int		i;
	int		a,b,c;
	float	x,y,z;
	int		flag3=0;

	if(strcmp(argv[3],"3")==0)
		flag3=1;
	
	while(!feof(fi) && !flag)
	{
		fgets(str,512,fi);
		sscanf(str," %s %s %s ",str1,str2,str3);
		if(strcmp(str1,"element")==0)
		{
			if(strcmp(str2,"vertex")==0)
			{
				np=atoi(str3);
				printf("np: %i\n",np);
			}
			else
			if(strcmp(str2,"face")==0)
			{
				nt=atoi(str3);
				printf("nt: %i\n",nt);
			}
		}
		else
		{
			sscanf(str," %s ",str1);
			if(strcmp(str1,"end_header")==0)
				flag=1;
		}
	}
	
	if(np*nt==0)
	{
		printf("ERROR: cannot read file\n");
		return 0;
	}
	
	fwrite(&np,1,sizeof(int),fo);
	fwrite(&nt,1,sizeof(int),fo);
	if(flag3)
	{
		for(i=0;i<np;i++)
		{
			fgets(str,512,fi);
			sscanf(str," %f %f %f ",&x,&y,&z);
			fwrite(&x,1,sizeof(float),fo);
			fwrite(&y,1,sizeof(float),fo);
			fwrite(&z,1,sizeof(float),fo);
		}
	}
	else
	{
		for(i=0;i<np;i++)
		{
			fgets(str,512,fi);
			sscanf(str," %f %f %f ",&x,&y,&z);
			fwrite(&x,1,sizeof(float),fo);
			fwrite(&y,1,sizeof(float),fo);
		}
	}
	
	for(i=0;i<nt;i++)
	{
		fgets(str,512,fi);
		sscanf(str," 3 %i %i %i ",&a,&b,&c);
		fwrite(&a,1,sizeof(int),fo);
		fwrite(&b,1,sizeof(int),fo);
		fwrite(&c,1,sizeof(int),fo);
	}
	fclose(fi);
	fclose(fo);
	
	return 0;
}
