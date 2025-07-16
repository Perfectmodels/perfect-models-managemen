# Automatisation Supabase – Perfect Models Management

## 1. Import automatique du schéma
- Va dans le dossier `scripts/`
- Renseigne l’URL de ta base dans `import_schema.sh`
- Lance : `bash import_schema.sh`

## 2. Upload automatique dans Supabase Storage
- Installe les dépendances : `npm install @supabase/supabase-js`
- Renseigne les variables dans `.env.local`
- Modifie le chemin et le nom du fichier dans `upload_to_storage.js`
- Lance : `node scripts/upload_to_storage.js`

## 3. Exemple d’API Next.js
- Place `pages/api/create-application.js` dans ton projet Next.js
- Utilise la route `/api/create-application` pour créer une candidature (POST)

## 4. Configuration
- Copie `.env.local.example` en `.env.local` et complète avec tes clés Supabase

---

**Besoin d’aide pour automatiser d’autres tâches ou intégrer d’autres fonctionnalités ? Demande-moi !** 