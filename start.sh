#!/bin/bash
source ~/.bashrc
cd server
pm2 start dist/index.js
cd ../client/nginx
cp build /var/www
cp -rf nginx.conf /etc/nginx
systemctl restart nginx
