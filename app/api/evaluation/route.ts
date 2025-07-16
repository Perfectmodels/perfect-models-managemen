import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);
const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const data: any = {};
  for (const [key, value] of formData.entries()) {
    data[key] = value;
  }
  // Stockage dans Supabase
  const { error } = await supabase.from('evaluations').insert([data]);
  if (error) {
    return NextResponse.json({ error: 'Erreur lors de l’enregistrement.' }, { status: 500 });
  }
  // Envoi d'email avec Resend
  try {
    await resend.emails.send({
      from: 'perfectmodels.ga@gmail.com>',
      to: process.env.EMAIL_TO!,
      subject: 'Nouvelle candidature mannequin',
      text: `Nouvelle candidature :\n\n${Object.entries(data).map(([k,v]) => `${k} : ${v}`).join("\n")}`,
    });
  } catch (e) {
    return NextResponse.json({ error: 'Erreur lors de l’envoi de l’email.' }, { status: 500 });
  }
  return NextResponse.json({ success: true });
} 