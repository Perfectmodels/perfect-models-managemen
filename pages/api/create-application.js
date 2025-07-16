// Exemple d'API Next.js pour créer une candidature dans Supabase
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' });
  }
  const { nom, prenom, email, telephone, age, taille, motivation } = req.body;
  const { data, error } = await supabase.from('applications').insert({
    nom, prenom, email, telephone, age, taille, motivation
  });
  if (error) {
    return res.status(400).json({ error: error.message });
  }
  res.status(201).json({ message: 'Candidature créée', data });
} 