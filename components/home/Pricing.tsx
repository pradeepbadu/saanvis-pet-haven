const pricingPlans = [
  {
    name: "Daycare",
    price: "₹1,499",
    description: "A day of play, meals, and supervised care.",
    benefits: ["Indoor + outdoor play", "Healthy meals", "Rest time"],
  },
  {
    name: "Boarding",
    price: "₹2,499",
    description: "Comfortable overnight stays in our luxury suites.",
    benefits: ["Private bedding", "Daily cuddle time", "Frequent updates"],
    featured: true,
  },
  {
    name: "Grooming",
    price: "₹999",
    description: "Gentle spa grooming for clean, happy pups.",
    benefits: ["Bath & brush", "Nail trim", "Skin-friendly care"],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="px-6 pb-24 lg:px-10 lg:pb-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-700">
            Pricing
          </p>
          <h2 className="text-4xl font-semibold text-slate-950 sm:text-5xl">
            Simple pricing for every pup
          </h2>
          <p className="max-w-xl text-base leading-8 text-slate-700 sm:text-lg">
            Choose the plan that fits your dog’s routine and enjoy premium care with transparency.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div key={plan.name} className={`rounded-[2rem] border p-8 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.18)] ${plan.featured ? 'border-amber-200 bg-amber-50' : 'border-slate-200 bg-white'}`}>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-700">
                {plan.name}
              </p>
              <h3 className="mt-4 text-4xl font-semibold text-slate-950">{plan.price}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-700">{plan.description}</p>
              <ul className="mt-8 space-y-4 text-sm text-slate-700">
                {plan.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-amber-100 text-amber-700 text-xs font-semibold">
                      ✓
                    </span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-10 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${plan.featured ? 'bg-amber-700 text-white hover:bg-amber-800' : 'border border-slate-200 bg-white text-slate-900 hover:bg-slate-50'}`}
              >
                Book Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
