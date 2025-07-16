# Automatisation avancée – Perfect Models Management

## 1. Upload batch photos/vidéos
- Place tes fichiers dans le dossier `media/`
- Renseigne les variables d’environnement dans `.env.local`
- Lance : `node scripts/upload_photos_and_videos.js`

## 2. APIs Next.js (création)
- Place les fichiers dans `pages/api/`
- Utilise les routes suivantes en POST :
  - `/api/create-model` : créer un mannequin
  - `/api/create-event` : créer un événement
  - `/api/create-testimonial` : créer un témoignage
  - `/api/create-service` : créer un service
  - `/api/create-legal-page` : créer une page légale
  - `/api/create-application` : créer une candidature

## 3. Batch d’insertion de données de test
- Renseigne les variables d’environnement dans `.env.local`
- Lance : `node scripts/batch_insert_data.js`

## 4. Personnalisation
- Adapte les scripts selon tes besoins (ajout de champs, gestion des rôles, etc.)
- Pour la lecture publique, crée des routes GET similaires
- Pour l’authentification, utilise Supabase Auth (voir doc officielle)

---

**Besoin d’aide pour automatiser d’autres tâches, ajouter des routes GET, ou sécuriser davantage ? Demande-moi !** 