#!/bin/bash

ACTION="$1"

if [ "$ACTION" == "on" ]
then 
    yarn sb:getstories
    rm index.js
    cp index.storybook.js index.js
else
    rm index.js
    cp index.normal.js index.js
fi

