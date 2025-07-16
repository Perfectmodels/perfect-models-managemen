import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: NextRequest) {
  const data = await req.json();
  // 1. Stockage dans Supabase
  const { error } = await supabase.from('evaluations').insert([data]);
  if (error) {
    return NextResponse.json({ error: 'Erreur lors de l’enregistrement.' }, { status: 500 });
  }

  // 2. Envoi d'email avec Resend
  try {
    await resend.emails.send({
      from: 'Perfect Models <noreply@perfectmodels.ga>',
      to: process.env.EMAIL_TO!,
      subject: 'Nouvelle évaluation mannequin',
      text: `Nouvelle candidature :\n\nPrénom : ${data.prenom}\nNom : ${data.nom}\nEmail : ${data.email}\nTéléphone : ${data.telephone}\nÂge : ${data.age}\nTaille : ${data.taille}\nGenre : ${data.genre}\nMotivation : ${data.motivation || ''}`,
    });
  } catch (e) {
    return NextResponse.json({ error: 'Erreur lors de l’envoi de l’email.' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
} 