import React from "react";

const goldMat = "#C9B037";

const faqs = [
  {
    question: "Comment postuler pour devenir mannequin ?",
    answer: "Remplissez le formulaire de candidature sur la page 'Devenir Mannequin'. Si votre profil correspond, nous vous contacterons pour la suite du processus."
  },
  {
    question: "Quels sont les critères pour être sélectionné(e) ?",
    answer: "Nous recherchons des candidats motivés, avec une bonne présentation, une taille minimum (1m65 pour les femmes, 1m80 pour les hommes) et une passion pour la mode."
  },
  {
    question: "Dois-je avoir de l'expérience pour postuler ?",
    answer: "Non, les débutants sont acceptés. La motivation et la volonté d'apprendre sont essentielles."
  },
  {
    question: "Dois-je payer pour postuler ou pour être recruté(e) ?",
    answer: "Non, la candidature et le processus de sélection sont entièrement gratuits."
  },
  {
    question: "Comment se déroule la sélection ?",
    answer: "Après étude de votre dossier, vous pouvez être convoqué(e) à un entretien ou un casting. Si vous êtes retenu(e), vous serez accompagné(e) dans votre parcours."
  },
  {
    question: "Comment contacter l'agence ?",
    answer: "Utilisez la page Contact du site ou écrivez-nous sur Instagram ou Facebook."
  }
];

export default function FAQPage() {
  return (
    <section className="relative min-h-screen py-24 bg-black text-white overflow-hidden">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-10 text-center uppercase tracking-wide" style={{ color: goldMat }}>FAQ – Foire Aux Questions</h1>
        <div className="space-y-10">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white/5 rounded-3xl shadow-2xl p-8 backdrop-blur-md border border-amber-200">
              <h2 className="text-2xl font-bold mb-2 uppercase tracking-wide" style={{ color: goldMat }}>{faq.question}</h2>
              <p className="text-white/80 text-lg font-serif italic">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 