const faqs = [
  {
    question: "What kind of work does Shayan do?",
    answer:
      "Shayan builds fast, accessible web products across product interfaces, full-stack systems, and practical data-backed experiences.",
  },
  {
    question: "What technologies does Shayan use?",
    answer:
      "His current toolkit includes React, Next.js, TypeScript, Tailwind CSS, Node.js, PHP, SQL, MongoDB, REST APIs, GitHub, and Vercel.",
  },
  {
    question: "How does Shayan approach a new project?",
    answer:
      "He starts by clarifying the audience and definition of done, then shapes the smallest useful interface and architecture before building and polishing the important edges.",
  },
  {
    question: "Is Shayan available for new work?",
    answer:
      "Yes. Shayan is open to selected freelance projects, product collaborations, and full-stack opportunities.",
  },
];

export const faqSchema = faqs.map((faq) => ({
  "@type": "Question",
  name: faq.question,
  acceptedAnswer: { "@type": "Answer", text: faq.answer },
}));

export function FAQ() {
  return (
    <section id="faq" className="border-line bg-surface/45 border-t">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:px-8 md:py-28 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
        <div>
          <p className="text-accent text-xs font-black tracking-[0.2em] uppercase">
            05 / FAQ
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.05em] sm:text-5xl">
            The short version.
          </h2>
          <p className="text-muted mt-5 max-w-sm text-base leading-7">
            A few useful answers before we start a conversation.
          </p>
        </div>
        <div className="divide-line border-line divide-y border-y">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-8 text-lg font-black tracking-[-0.02em] [&::-webkit-details-marker]:hidden">
                {faq.question}
                <span
                  className="text-accent font-mono text-xl font-normal transition-transform group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="text-muted max-w-2xl pt-4 text-base leading-7">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
