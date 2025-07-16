// Script Node.js pour insérer des données de test dans toutes les tables principales
const { createClient } = require('@supabase/supabase-js');
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

async function insertAll() {
  await supabase.from('users').insert([
    { email: 'admin@site.com', mot_de_passe: 'hash', nom: 'Admin', prenom: 'Super', role: 'admin' },
    { email: 'mannequin@site.com', mot_de_passe: 'hash', nom: 'Doe', prenom: 'Jane', role: 'mannequin' }
  ]);
  await supabase.from('models').insert([
    { nom: 'Jane', prenom: 'Doe', bio: 'Mannequin pro', photos: [] }
  ]);
  await supabase.from('applications').insert([
    { nom: 'Candidat', prenom: 'Test', email: 'test@site.com', age: 20, taille: 175, motivation: 'Passionné' }
  ]);
  await supabase.from('events').insert([
    { titre: 'Défilé été', description: 'Grand événement', date_event: '2025-08-01', image: '', lien: '' }
  ]);
  await supabase.from('gallery').insert([
    { type: 'photo', url: 'https://exemple.com/photo.jpg', titre: 'Photo test', description: 'Test' }
  ]);
  await supabase.from('testimonials').insert([
    { nom: 'Client', photo: '', message: 'Super agence !' }
  ]);
  await supabase.from('services').insert([
    { titre: 'Coaching', description: 'Coaching personnalisé', icone: '' }
  ]);
  await supabase.from('legal_pages').insert([
    { type: 'cgu', contenu: 'Conditions générales d’utilisation' }
  ]);
  console.log('Données de test insérées !');
}

insertAll(); 