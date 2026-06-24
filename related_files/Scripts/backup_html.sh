#!/bin/bash

function apply_pause() {
  read -p "$*"
}

echo "Copie de sécurité des fichiers HTML, JavaScript et CSS"
apply_pause "Appuyer sur la touche [Retour] pour continuer..."

# Source (so)
so=/var/www/html/d003/aspnet-e07/

# Destination (de)
de=/home/dev2607/Documents/XD01/aspnet-e07/html07/

rsync -av $so $de
