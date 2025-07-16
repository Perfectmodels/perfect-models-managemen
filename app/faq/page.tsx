import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export default function FAQPage() {
  return (
    <main>
      <section className="py-24 bg-gris text-noir min-h-screen">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-12 text-or drop-shadow-xl uppercase tracking-wide text-center">FAQ</h1>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="q1">
              <AccordionTrigger className="text-lg font-bold text-or">Comment devenir mannequin chez PMM ?</AccordionTrigger>
              <AccordionContent>
                Remplissez le formulaire sur la page "Devenir Mannequin" et suivez les étapes indiquées. Notre équipe vous contactera rapidement.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q2">
              <AccordionTrigger className="text-lg font-bold text-or">Quels sont les critères de sélection ?</AccordionTrigger>
              <AccordionContent>
                Motivation, professionnalisme, présentation soignée, et respect des valeurs de l’agence. L’âge minimum est de 16 ans.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q3">
              <AccordionTrigger className="text-lg font-bold text-or">Proposez-vous des formations ?</AccordionTrigger>
              <AccordionContent>
                Oui, nous proposons des formations en défilé, prise de parole, photo, et développement personnel.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="q4">
              <AccordionTrigger className="text-lg font-bold text-or">Puis-je postuler si je n’ai pas d’expérience ?</AccordionTrigger>
              <AccordionContent>
                Oui, l’agence accompagne aussi bien les débutants que les profils expérimentés.
              </AccordionContent>
            </AccordionItem>
            {/* Ajoute d'autres questions/réponses ici */}
          </Accordion>
        </div>
      </section>
    </main>
  );
} 