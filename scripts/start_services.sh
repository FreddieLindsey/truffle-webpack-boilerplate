#!/bin/bash

SCRIPT_DIR="$(pwd -P)/$(dirname $0)"

echo "Starting Docker..."
docker-compose up -d
echo "Docker initialised..."
