                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <span className="font-serif text-2xl font-bold text-foreground">
              Suliko
            </span>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              The soul of Georgian cuisine, brought to you in Concord and Vaughan, Ontario.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground">Quick Links</h4>
            <ul className="mt-3 space-y-2">
              {[
                { label: "About", href: "#about" },
                { label: "Menu", href: "#menu" },
                { label: "Gallery", href: "#gallery" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Dine-In */}
          <div>
            <h4 className="text-sm font-semibold text-foreground">Restaurant Suliko</h4>
            <p className="mt-3 text-sm text-muted-foreground">
              1311 Alness St Unit 8
            </p>
            <p className="text-sm text-muted-foreground">
              Concord, ON L4K 1E8
            </p>
            <a
              href="tel:+19057601989"
              className="mt-2 block text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              (905) 760-1989
            </a>
          </div>

          {/* Takeout */}
          <div>
            <h4 className="text-sm font-semibold text-foreground">Little Suliko</h4>
            <p className="mt-3 text-sm text-muted-foreground">
              1102 Centre St #2
            </p>
            <p className="text-sm text-muted-foreground">
              Vaughan, ON L4J 3M8
            </p>
            <a
              href="tel:+19055971440"
              className="mt-2 block text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              (905) 597-1440
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            {'\u00A9'} {new Date().getFullYear()} Suliko Restaurant. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Georgian & European Cuisine
          </p>
        </div>
      </div>
      <div className="mt-8 text-center text-xs text-muted-foreground">
  Independent Concept Proposal – Not affiliated with or endorsed by Suliko.
</div> 
    </footer>
  )
}
