#!/bin/bash

if ! command -v md5sum &> /dev/null
then
    echo "md5sum could not be found, install it using 'brew install md5sha1sum'"
    exit 1
fi

md1=($(md5sum index.js))
md2=($(md5sum index.normal.js))

if [ "$md1" != "$md2" ]; then
    echo "#####################################"
    echo "## Disable storybook before commit ##"
    echo "#####################################"
    exit 1
fi
