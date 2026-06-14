import { Car, KeyRound, Wrench, UserCheck, Gauge, FileBarChart } from "lucide-react"

const services = [
  {
    icon: Gauge,
    title: "Fleet Management",
    description:
      "End-to-end fleet operations including tracking, scheduling, fuel management, and compliance monitoring across your entire vehicle portfolio.",
  },
  {
    icon: KeyRound,
    title: "Vehicle Leasing",
    description:
      "Flexible short and long-term leasing plans for businesses and individuals, with transparent pricing and tailored contract terms.",
  },
  {
    icon: UserCheck,
    title: "Chauffeur Services",
    description:
      "Professional, vetted drivers for corporate travel, executive transport, and special events — punctual, discreet, and reliable.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Servicing",
    description:
      "Scheduled servicing, repairs, and roadside support managed through our trusted network to minimise downtime.",
  },
  {
    icon: FileBarChart,
    title: "Reporting & Insights",
    description:
      "Real-time dashboards and detailed reporting on costs, utilisation, and performance to keep your operation efficient.",
  },
  {
    icon: Car,
    title: "Vehicle Acquisition",
    description:
      "We source, procure, and onboard the right vehicles for your needs, handling registration and documentation throughout.",
  },
]

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-20 md:py-28">
      <div className="max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          What we do
        </span>
        <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          A single partner for every vehicle need
        </h2>
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          From the first mile to the last, K-Drive provides a full suite of
          services designed to keep your vehicles efficient, compliant, and on
          the road.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/60"
          >
            <span className="flex size-12 items-center justify-center rounded-lg bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <service.icon className="size-6" aria-hidden="true" />
            </span>
            <h3 className="mt-5 text-lg font-semibold text-card-foreground">{service.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
