import igl
import numpy

llut=lh.corr.txt
rlut=rh.corr.txt
lh=lh.txt
rh=rh.txt

nlverts=$(head -n 1 $lh|awk '{print $1}')
nrverts=$(head -n 1 $lh|awk '{print $1}')

echo $nlverts left verts
echo $nrverts right verts

awk
