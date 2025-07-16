# Schéma Supabase – Perfect Models Management

## Importer le schéma

1. Ouvre Supabase Studio > SQL Editor
2. Copie le contenu du fichier `supabase_schema.sql`
3. Colle-le dans l’éditeur SQL et exécute-le
4. Les tables, policies et index seront créés automatiquement

## Utilisation
- Utilise Supabase Storage pour stocker les fichiers (photos, vidéos) et référence leurs URLs dans les champs prévus (`photos`, `url`, etc.)
- Les policies permettent la lecture publique des contenus, mais restreignent l’écriture selon les besoins (voir le script SQL)
- Tu peux adapter les policies selon tes besoins de sécurité

## Personnalisation
- Ajoute/modifie des colonnes selon l’évolution de ton site
- Pour des triggers, fonctions ou policies avancées, demande-moi ou consulte la doc Supabase

---

**Besoin d’aide pour automatiser l’import, ajouter des triggers ou personnaliser la sécurité ? Demande-moi !** 