#!/bin/bash

DOCKER_ROOT_TAG=freddielindsey/ethereumjs-testrpc
DOCKER_TAG=$DOCKER_ROOT_TAG:$(date +%Y-%m-%d)
SCRIPT_DIR="$(pwd -P)/$(dirname $0)"

docker build -t $DOCKER_TAG "$SCRIPT_DIR/../submodules/testrpc"
docker tag $DOCKER_TAG $DOCKER_ROOT_TAG:latest
docker push $DOCKER_TAG
docker push $DOCKER_ROOT_TAG:latest
