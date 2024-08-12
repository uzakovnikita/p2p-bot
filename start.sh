#!/bin/bash
cd server
npm i -g pm2
pm2 start dist/index.js
cd ../client/nginx
cp build /var/www
cp -rf nginx.conf /etc/nginx
apt-get install nginx
nginx

