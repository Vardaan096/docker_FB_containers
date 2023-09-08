#! /bin/bash

cd /home/antino/Desktop/project
#The --build flag tells Docker Compose to rebuild the images used by your services, even if they already exist.
sudo docker-compose up -d --build
