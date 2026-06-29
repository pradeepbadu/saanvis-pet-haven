const faqs = [
  {
    question: "What should I pack for boarding?",
    answer: "Bring your dog’s regular food, a favorite toy, and any medications. We provide cozy bedding and all the care they need.",
  },
  {
    question: "How do you handle special dietary needs?",
    answer: "We customize meals based on your dog’s dietary requirements, allergies, and preferences to keep them healthy and happy.",
  },
  {
    question: "Is grooming safe for nervous pups?",
    answer: "Absolutely. Our groomers use gentle, patient techniques and treat each dog with calm attention throughout the session.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="px-6 pb-24 lg:px-10 lg:pb-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-700">
            FAQ
          </p>
          <h2 className="text-4xl font-semibold text-slate-950 sm:text-5xl">
            Got questions? We’ve got answers.
          </h2>
          <p className="max-w-xl text-base leading-8 text-slate-700 sm:text-lg">
            Common questions about our daycare, boarding, grooming, and training services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:border-amber-200">
              <summary className="cursor-pointer text-lg font-semibold text-slate-950">
                {faq.question}
              </summary>
              <p className="mt-4 text-sm leading-7 text-slate-700">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
