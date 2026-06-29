#!/bin/bash

function apply_pause() {
  read -p "$*"
}

echo "Publication des fichiers ASP.NET sur le serveur Web local"
apply_pause "Appuyer sur la touche [Retour] pour continuer..."

# Source (so)
so=/home/dev2607/Documents/XD01/aspnet-e07/aspnet07/bin/Release/net8.0/linux-x64/publish
# Destination (de)
de=/var/www/aspnet07

rm $de/*
cp $so/* $de/
sudo chown -R www-data:www-data $de
