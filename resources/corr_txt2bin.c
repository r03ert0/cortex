#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int main(int argc, char *argv[])
{
	// argv[1]	lh.corr.txt or rh.corr.txt file
	// argv[2]	binary version
	FILE	*fi=fopen(argv[1],"r");
	FILE	*fo=fopen(argv[2],"w");
	char	str[256],B[256];
	int		a,b,n=0;
	
	while(!feof(fi))
	{
		fgets(str,256,fi);
		sscanf(str,"%i %s ",&a,B);
		
		if(strcmp(B,"NA")==0)
			b=-1;
		else
			b=atoi(B);
		fwrite(&a,1,sizeof(int),fo);
		fwrite(&b,1,sizeof(int),fo);
		n++;
	}
	fclose(fi);
	fclose(fo);
	printf("%i correspondences written\n",n);
}