#!/usr/bin/env bash

su - parth
cd /home/parth/sonal_maam
npm i
git remote set-url origin https://github.com/party98/talking-to-heaven.git
git pull origin master
exit