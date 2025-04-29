#!/bin/bash
folders=$@
if [ $# -eq 0 ]
then
echo "No arguments supplied"
fi
for folder in $folders
do
mkdir "ex$folder"
done

