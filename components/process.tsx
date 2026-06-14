const steps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We assess your requirements, vehicle needs, and budget to design a management plan that fits.",
  },
  {
    number: "02",
    title: "Onboarding",
    description:
      "Vehicles are sourced, registered, and added to our system with full documentation handled for you.",
  },
  {
    number: "03",
    title: "Management",
    description:
      "We run day-to-day operations — maintenance, compliance, drivers, and support — keeping you informed.",
  },
  {
    number: "04",
    title: "Optimisation",
    description:
      "Ongoing reporting and reviews help reduce costs and improve performance across your fleet.",
  },
]

export function Process() {
  return (
    <section id="process" className="mx-auto max-w-7xl px-6 py-20 md:py-28">
      <div className="max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          How it works
        </span>
        <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Getting started is simple
        </h2>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => (
          <div key={step.number} className="relative rounded-xl border border-border bg-card p-6">
            <span className="text-3xl font-bold text-primary">{step.number}</span>
            <h3 className="mt-4 text-lg font-semibold text-card-foreground">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
