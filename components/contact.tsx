"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="contact" className="border-t border-border bg-card/40">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:py-28 lg:grid-cols-2">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Get in touch
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Let&apos;s manage your fleet together
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Tell us about your vehicles and goals. Our team will get back to you
            with a tailored proposal.
          </p>

          <ul className="mt-8 space-y-5">
            <li className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
                <Phone className="size-5" aria-hidden="true" />
              </span>
              <a
                href="tel:+2349036823316"
                className="text-sm text-foreground transition-colors hover:text-primary"
              >
                +234 903 682 3316
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
                <Mail className="size-5" aria-hidden="true" />
              </span>
              <a
                href="mailto:customercare@kdrivecarmanagementlimited.com"
                className="text-sm text-foreground transition-colors hover:text-primary"
              >
                customercare@kdrivecarmanagementlimited.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
                <MapPin className="size-5" aria-hidden="true" />
              </span>
              <span className="text-sm text-foreground">Suite B11 GPP Plaza, Plot 690, Aco Phase 2, Amac Estate, Lugbe, Abuja</span>
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
          {submitted ? (
            <div className="flex h-full flex-col items-center justify-center py-12 text-center">
              <h3 className="text-xl font-semibold text-card-foreground">Thank you</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We&apos;ve received your enquiry and will be in touch shortly.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setSubmitted(true)
              }}
              className="flex flex-col gap-4"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full name" id="name" type="text" placeholder="Jane Doe" required />
                <Field label="Company" id="company" type="text" placeholder="Acme Ltd" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Email" id="email" type="email" placeholder="jane@acme.com" required />
                <Field label="Phone" id="phone" type="tel" placeholder="+234 ..." />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  How can we help?
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your fleet or requirements..."
                  className="rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/40"
                />
              </div>
              <Button type="submit" size="lg" className="mt-2">
                Send enquiry
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  id,
  type,
  placeholder,
  required,
}: {
  label: string
  id: string
  type: string
  placeholder: string
  required?: boolean
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        placeholder={placeholder}
        className="rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/40"
      />
    </div>
  )
}
