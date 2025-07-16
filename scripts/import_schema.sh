#!/bin/bash
# Script d'import automatique du schéma dans Supabase
# Usage : ./import_schema.sh

# Variables à adapter
SUPABASE_DB_URL="<URL_DE_TA_BASE_SUPABASE>"
SCHEMA_FILE="../supabase_full_setup.sql"

if [ ! -f "$SCHEMA_FILE" ]; then
  echo "Fichier $SCHEMA_FILE introuvable !"
  exit 1
fi

# Import du schéma
PGPASSWORD=$(echo $SUPABASE_DB_URL | sed -E 's/.*:([^@]*)@.*/\1/') psql "$SUPABASE_DB_URL" -f "$SCHEMA_FILE"

echo "Import terminé !" 