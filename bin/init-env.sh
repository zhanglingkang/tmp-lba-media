#!/bin/bash
if hash tnpm 2>/dev/null; then
   echo "tnpm installed"
else
   sudo npm i -g tnpm --registry=http://registry.npm.alibaba-inc.com
fi
if hash gulp 2>/dev/null; then
   echo "gulp installed"
else
   sudo tnpm i gulp -g
fi


