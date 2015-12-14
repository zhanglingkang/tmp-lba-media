#!/bin/bash
__DIRNAME__=$(cd "$(dirname "$0")"; pwd)

cd "$__DIRNAME__"

./init-env.sh

cd ../;tnpm i

#由于aone上下载依赖包太慢，暂时使用在发布前在本地构建的方式
#cd statics;tnpm i;gulp -p;

envType=$1
__ENV__=daily
case $envType in
    daily )
    #日常环境
    __ENV__=daily
    ;;
    prepub )
    #预发环境pre
    __ENV__=production
    ;;
    publish )
    __ENV__=production
    ;;
    * )
    #项目环境
    ;;
esac

cd "$__DIRNAME__";cd ../app/config
cp config_${__ENV__}.js config.js

