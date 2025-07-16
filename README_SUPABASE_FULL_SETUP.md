# Installation complète Supabase – Perfect Models Management

## 1. Import du schéma global
- Ouvre Supabase Studio > SQL Editor
- Copie le contenu de `supabase_full_setup.sql`
- Colle-le dans l’éditeur SQL et exécute
- Toutes les tables, index, triggers, fonctions et policies seront créés dans le bon ordre

## 2. Fonctionnalités incluses
- **Tables** : utilisateurs, mannequins, candidatures, galerie, témoignages, services, actualités, pages légales, audit
- **Triggers** :
  - Mise à jour automatique de la date de modification sur les mannequins
  - Audit automatique des candidatures (historique)
- **Policies** :
  - Lecture publique des contenus
  - Écriture restreinte (admin, utilisateur connecté, etc.)
  - Candidature publique, lecture admin

## 3. Exploitation
- Utilise Supabase Storage pour stocker les fichiers (photos, vidéos) et référence leurs URLs dans les champs prévus
- Les policies sont adaptables selon tes besoins de sécurité
- L’audit permet de tracer toutes les modifications sur les candidatures

## 4. Personnalisation
- Ajoute/modifie des colonnes ou policies selon l’évolution de ton site
- Pour des triggers, fonctions ou policies avancées, demande-moi ou consulte la doc Supabase

---

**Besoin d’aide pour automatiser l’import, ajouter des triggers, personnaliser la sécurité ou exploiter l’audit ? Demande-moi !** 