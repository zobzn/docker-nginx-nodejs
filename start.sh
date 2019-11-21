#!/bin/sh

docker-compose down --remove-orphans
docker-compose up --build --scale app=4
