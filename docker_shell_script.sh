#! /bin/bash

cd /var/lib/jenkins/workspace/docker
#The --build flag tells Docker Compose to rebuild the images used by your services, even if they already exist.
sudo docker compose up -d --build
