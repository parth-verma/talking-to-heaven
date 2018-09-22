#!/usr/bin/env bash

su - parth
cd /home/parth/sonal_maam
source ./env/bin/activate
pip install -r requirements.txt
python manage.py migrate
bash static_handler.sh
sudo systemctl rc-local restart
sudo service nginx restart
exit