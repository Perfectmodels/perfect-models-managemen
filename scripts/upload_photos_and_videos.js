// Script Node.js pour uploader plusieurs photos/vidéos dans Supabase Storage et insérer dans la table gallery
const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const BUCKET = 'photos';
const FOLDER = './media'; // Dossier contenant les fichiers à uploader

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function uploadAll() {
  const files = fs.readdirSync(FOLDER);
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    const type = ext === '.mp4' || ext === '.mov' ? 'video' : 'photo';
    const filePath = path.join(FOLDER, file);
    const fileBuffer = fs.readFileSync(filePath);
    const { error } = await supabase.storage.from(BUCKET).upload(file, fileBuffer, { upsert: true });
    if (error) {
      console.error(`Erreur upload ${file} :`, error);
      continue;
    }
    const publicUrl = supabase.storage.from(BUCKET).getPublicUrl(file).data.publicUrl;
    const { error: dbError } = await supabase.from('gallery').insert({
      type,
      url: publicUrl,
      titre: file,
      description: 'Ajouté via batch',
    });
    if (dbError) {
      console.error(`Erreur insertion DB pour ${file} :`, dbError);
    } else {
      console.log(`${file} uploadé et inséré dans la galerie !`);
    }
  }
}

uploadAll(); 