rm -rf **/*.pdf

for f in **/*.source
do
  pushd $(dirname $f)
  pandoc $(basename $f) -o ${$(basename $f)%.*}.pdf 
  popd
done



