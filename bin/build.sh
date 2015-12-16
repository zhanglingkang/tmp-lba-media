#!/bin/bash
__DIRNAME__=$(cd "$(dirname "$0")"; pwd)

cd "$__DIRNAME__"

./init-env.sh

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

cd ../;tnpm i tnpm

node_modules/.bin/tnpm  i

# default node
NODE_BIN_DIR=/opt/taobao/install/node.js/bin

# support http://gitlab.alibaba-inc.com/node/tnpm/merge_requests/23

NODE_BIN_FROM_MODULE=${BUILD_WORK_PATH}/node_modules/node/bin
if [ -d ${NODE_BIN_FROM_MODULE} ]; then
  NODE_BIN_DIR=${NODE_BIN_FROM_MODULE}
  echo "NODE目录-${NODE_BIN_DIR}"
fi

export PATH=${NODE_BIN_DIR}:/bin:/usr/bin:$PATH

#由于aone上下载依赖包太慢，暂时使用在发布前在本地构建的方式
cd statics;../node_modules/.bin/tnpm i;gulp -p;



cd "$__DIRNAME__";cd ../app/config
cp config_${__ENV__}.js config.js

