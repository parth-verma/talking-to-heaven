#!/usr/bin/env bash

set -e
cd /home/parth/sonal_maam
npm i
git remote add origin https://github.com/party98/talking-to-heaven.git || \
git remote set-url origin https://github.com/party98/talking-to-heaven.git
git pull origin master
exit