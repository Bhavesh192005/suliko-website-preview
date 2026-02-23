import { Phone, MapPin, Mail } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="relative bg-foreground py-24 lg:py-32 overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full border border-background" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full border border-background" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-accent font-semibold mb-4">
            Get in Touch
          </p>
          <h2 className="font-serif text-4xl font-bold text-background lg:text-5xl text-balance">
            We Would Love to
            <br />
            Hear From You
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-background/70 leading-relaxed">
            Have a question, want to book a private event, or simply want to
            say hello? Reach out to us.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {/* Phone */}
          <div className="text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-background/10">
              <Phone className="h-6 w-6 text-accent" />
            </div>
            <h3 className="mt-4 font-serif text-lg font-semibold text-background">
              Call Us
            </h3>
            <a
              href="tel:+19057601989"
              className="mt-2 block text-sm text-background/70 hover:text-background transition-colors"
            >
              (905) 760-1989
            </a>
            <a
              href="tel:+19055971440"
              className="mt-1 block text-sm text-background/70 hover:text-background transition-colors"
            >
              (905) 597-1440
            </a>
          </div>

          {/* Locations */}
          <div className="text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-background/10">
              <MapPin className="h-6 w-6 text-accent" />
            </div>
            <h3 className="mt-4 font-serif text-lg font-semibold text-background">
              Visit Us
            </h3>
            <p className="mt-2 text-sm text-background/70">
              1311 Alness St Unit 8, Concord
            </p>
            <p className="mt-1 text-sm text-background/70">
              1102 Centre St #2, Vaughan
            </p>
          </div>

          {/* Email */}
          <div className="text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-background/10">
              <Mail className="h-6 w-6 text-accent" />
            </div>
            <h3 className="mt-4 font-serif text-lg font-semibold text-background">
              Email Us
            </h3>
            <a
              href="mailto:suliko.catering@gmail.com"
              className="mt-2 block text-sm text-background/70 hover:text-background transition-colors"
            >
              suliko.catering@gmail.com
            </a>
            <p className="mt-1 text-sm text-background/70">
              Catering & inquiries
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
