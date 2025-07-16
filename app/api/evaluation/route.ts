import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);
const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: NextRequest) {
  // On attend un FormData (multipart)
  const formData = await req.formData();
  const data: any = {};
  for (const [key, value] of formData.entries()) {
    if (key === 'photos') continue; // On gère les photos à part
    data[key] = value;
  }
  // Upload des photos
  const files = formData.getAll('photos') as File[];
  const photoUrls: string[] = [];
  for (const file of files) {
    const ext = file.name.split('.').pop();
    const filePath = `candidatures/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
    const { data: uploadData, error: uploadError } = await supabase.storage.from('candidatures').upload(filePath, file, { upsert: true });
    if (uploadError) {
      return NextResponse.json({ error: "Erreur lors de l'upload des photos." }, { status: 500 });
    }
    const { data: publicUrl } = supabase.storage.from('candidatures').getPublicUrl(filePath);
    photoUrls.push(publicUrl.publicUrl);
  }
  data.photos = photoUrls;

  // Stockage dans Supabase
  const { error } = await supabase.from('evaluations').insert([data]);
  if (error) {
    return NextResponse.json({ error: 'Erreur lors de l’enregistrement.' }, { status: 500 });
  }

  // Envoi d'email avec Resend
  try {
    await resend.emails.send({
      from: 'Perfect Models <noreply@perfectmodels.ga>',
      to: process.env.EMAIL_TO!,
      subject: 'Nouvelle évaluation mannequin',
      text: `Nouvelle candidature :\n\nPrénom : ${data.prenom}\nNom : ${data.nom}\nEmail : ${data.email}\nTéléphone : ${data.telephone}\nÂge : ${data.age}\nTaille : ${data.taille}\nGenre : ${data.genre}\nMotivation : ${data.motivation || ''}\n\nPhotos :\n${photoUrls.join('\n')}`,
    });
  } catch (e) {
    return NextResponse.json({ error: 'Erreur lors de l’envoi de l’email.' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
} 