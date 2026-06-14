import Image from "next/image"

const columns = [
  {
    title: "Services",
    links: ["Fleet Management", "Vehicle Leasing", "Chauffeur Services", "Maintenance"],
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "News", "Contact"],
  },
  {
    title: "Resources",
    links: ["Help Centre", "Privacy Policy", "Terms of Service", "Compliance"],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-sidebar">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <Image
                src="/kdrive-logo.jpeg"
                alt="K-Drive Car Management Limited logo"
                width={48}
                height={48}
                className="size-12 rounded-lg object-cover"
              />
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Complete car and fleet management solutions for businesses and
              individuals across Nigeria.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-foreground">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} K-Drive Car Management Limited. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">Proudly based in Abuja, Nigeria</p>
        </div>
      </div>
    </footer>
  )
}
