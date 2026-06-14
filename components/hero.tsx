import Image from "next/image"
import { ArrowRight, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/hero-fleet.png"
          alt="A premium fleet of K-Drive managed vehicles on an Abuja city road at dusk"
          fill
          priority
          className="object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/70" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col px-6 pb-20 pt-36 md:pb-28 md:pt-44">
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          <ShieldCheck className="size-3.5 text-primary" aria-hidden="true" />
          Nigeria&apos;s trusted fleet partner
        </span>

        <h1 className="mt-6 max-w-3xl text-balance text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Complete car management, <span className="text-primary">driven by precision</span>
        </h1>

        <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          From Abuja to Lagos and beyond, K-Drive Car Management Limited keeps
          your vehicles moving. From fleet operations and leasing to chauffeur
          services and maintenance, we handle every mile so you can focus on the
          road ahead.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <a href="#contact">
              Request a quote
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="#services">Explore services</a>
          </Button>
        </div>

        <dl className="mt-14 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-4">
          {[
            { value: "2,400+", label: "Vehicles managed" },
            { value: "98%", label: "Uptime rate" },
            { value: "24/7", label: "Support" },
            { value: "15 yrs", label: "Experience" },
          ].map((stat) => (
            <div key={stat.label}>
              <dt className="text-2xl font-bold text-foreground md:text-3xl">{stat.value}</dt>
              <dd className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
