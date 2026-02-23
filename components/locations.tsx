import { MapPin, Phone, Clock, Mail } from "lucide-react"

const locations = [
  {
    name: "Restaurant Suliko",
    subtitle: "Dine-In Experience",
    address: "1311 Alness St Unit 8, Concord, Ontario L4K 1E8",
    phone: "+1 905-760-1989",
    phoneDisplay: "(905) 760-1989",
    hours: [
      { days: "Monday - Sunday", time: "12:00 PM - 11:00 PM" },
    ],
    mapUrl: "https://maps.google.com/?q=1311+Alness+St+Unit+8+Concord+Ontario+L4K+1E8",
  },
  {
    name: "Little Suliko",
    subtitle: "Takeout & Street Format",
    address: "1102 Centre St #2, Vaughan, Ontario L4J 3M8",
    phone: "+19055971440",
    phoneDisplay: "(905) 597-1440",
    email: "suliko.catering@gmail.com",
    hours: [
      { days: "Tuesday - Sunday", time: "11:00 AM - 9:00 PM" },
      { days: "Monday", time: "Closed" },
    ],
    mapUrl: "https://maps.google.com/?q=1102+Centre+St+%232+Vaughan+Ontario+L4J+3M8",
  },
]

export function Locations() {
  return (
    <section id="locations" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-primary font-semibold mb-4">
            Visit Us
          </p>
          <h2 className="font-serif text-4xl font-bold text-foreground lg:text-5xl text-balance">
            Our Locations
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-muted-foreground leading-relaxed">
            Whether you prefer a sit-down dinner or a quick Georgian bite on the
            go, we have you covered.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {locations.map((loc) => (
            <div
              key={loc.name}
              className="rounded-xl border border-border bg-card p-8 lg:p-10"
            >
              <h3 className="font-serif text-2xl font-bold text-foreground">
                {loc.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-primary">
                {loc.subtitle}
              </p>

              <div className="mt-8 space-y-5">
                {/* Address */}
                <a
                  href={loc.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm leading-relaxed">{loc.address}</span>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${loc.phone}`}
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Phone className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-sm">{loc.phoneDisplay}</span>
                </a>

                {/* Email */}
                {loc.email && (
                  <a
                    href={`mailto:${loc.email}`}
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Mail className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm">{loc.email}</span>
                  </a>
                )}

                {/* Hours */}
                <div className="flex items-start gap-3 text-muted-foreground">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div className="space-y-1">
                    {loc.hours.map((h) => (
                      <p key={h.days} className="text-sm">
                        <span className="font-medium text-foreground">
                          {h.days}:
                        </span>{" "}
                        {h.time}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <a
                href={loc.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center rounded-md border border-border bg-secondary px-5 py-2.5 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/80"
              >
                Get Directions
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
