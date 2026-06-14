import Image from "next/image"
import { Check } from "lucide-react"

const points = [
  "Dedicated account manager for every client",
  "Transparent, all-inclusive pricing with no hidden fees",
  "Nationwide service and roadside support network",
  "Fully licensed, insured, and compliance-ready",
]

export function WhyChoose() {
  return (
    <section id="why" className="border-y border-border bg-card/40">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:py-28 lg:grid-cols-2">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border">
          <Image
            src="/fleet-detail.png"
            alt="A row of well-maintained K-Drive managed company vehicles in Abuja"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Why K-Drive
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Reliability you can measure, service you can trust
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            We combine experienced people, smart technology, and a genuine care
            for our clients' vehicles. The result is a fleet that runs smoothly,
            predictably, and cost-effectively.
          </p>

          <ul className="mt-8 space-y-4">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="size-3.5" aria-hidden="true" />
                </span>
                <span className="text-sm leading-relaxed text-foreground">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
