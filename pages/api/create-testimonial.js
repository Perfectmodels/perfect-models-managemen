// API Next.js pour créer un témoignage dans Supabase
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' });
  }
  const { nom, photo, message } = req.body;
  const { data, error } = await supabase.from('testimonials').insert({
    nom, photo, message
  });
  if (error) {
    return res.status(400).json({ error: error.message });
  }
  res.status(201).json({ message: 'Témoignage créé', data });
} 