#!/bin/bash
argv_input=$#
if [ $argv_input -eq 0 ];
then
echo "No arguments supplied"
else
echo $1$'\n'$2$'\n'$3
fi
