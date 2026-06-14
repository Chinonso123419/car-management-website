import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { WhyChoose } from "@/components/why-choose"
import { Process } from "@/components/process"
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <WhyChoose />
        <Process />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}
