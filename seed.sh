#!/bin/bash
sequelize db:seed --seeders-path ./src/back/seeders --config ./src/back/config/config.json --seed ./src/back/seeders/20170630234048-users
