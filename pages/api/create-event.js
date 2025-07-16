// API Next.js pour créer un événement dans Supabase
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' });
  }
  const { titre, description, date_event, image, lien } = req.body;
  const { data, error } = await supabase.from('events').insert({
    titre, description, date_event, image, lien
  });
  if (error) {
    return res.status(400).json({ error: error.message });
  }
  res.status(201).json({ message: 'Événement créé', data });
} 