import React from "react";

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
    <div className="max-w-3xl mx-auto py-24 px-4">
      <h1 className="text-4xl font-bold mb-6 text-amber-700">FAQ – Foire Aux Questions</h1>
      <div className="space-y-8">
        {faqs.map((faq, idx) => (
          <div key={idx}>
            <h2 className="text-xl font-semibold mb-2 text-black">{faq.question}</h2>
            <p className="text-neutral-700 text-lg">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
} 