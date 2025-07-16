// Script Node.js pour uploader un fichier dans Supabase Storage et insérer l'URL dans la table gallery
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

// À personnaliser
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const BUCKET = 'photos';
const FILE_PATH = './chemin/vers/ton_fichier.jpg';
const FILE_NAME = 'mon_fichier.jpg';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function uploadAndInsert() {
  const fileBuffer = fs.readFileSync(FILE_PATH);
  const { data, error } = await supabase.storage.from(BUCKET).upload(FILE_NAME, fileBuffer, { upsert: true });
  if (error) {
    console.error('Erreur upload :', error);
    return;
  }
  const publicUrl = supabase.storage.from(BUCKET).getPublicUrl(FILE_NAME).data.publicUrl;
  // Insertion dans la table gallery
  const { error: dbError } = await supabase.from('gallery').insert({
    type: 'photo',
    url: publicUrl,
    titre: 'Titre automatique',
    description: 'Ajouté via script',
  });
  if (dbError) {
    console.error('Erreur insertion DB :', dbError);
  } else {
    console.log('Fichier uploadé et inséré dans la galerie !');
  }
}

uploadAndInsert(); 