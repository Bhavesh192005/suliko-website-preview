import Image from "next/image"

export function About() {
  return (
    <section id="about" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section label */}
        <p className="text-xs uppercase tracking-[0.35em] text-primary font-semibold mb-4">
          Our Story
        </p>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <h2 className="font-serif text-4xl font-bold leading-tight text-foreground lg:text-5xl text-balance">
              Where Georgian Tradition Meets European Elegance
            </h2>
            <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
              <p>
                {"Suliko means \"soul\" in Georgian \u2014 and that's exactly what we pour into every dish. Our restaurant is a celebration of Georgia's rich culinary heritage, blending centuries-old recipes with European finesse."}
              </p>
              <p>
                From hand-folded khinkali to wood-fired khachapuri, every plate
                tells a story of tradition passed down through generations. Our
                kitchen honors the bold flavors of the Caucasus while embracing
                the refined techniques of European cuisine.
              </p>
              <p>
                Whether you are joining us for a family gathering, a quiet dinner,
                or a celebration with friends, we invite you to experience the
                warmth and hospitality that defines Georgian culture.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-10">
              <div>
                <p className="font-serif text-3xl font-bold text-foreground">2</p>
                <p className="mt-1 text-sm text-muted-foreground">Locations</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-bold text-foreground">50+</p>
                <p className="mt-1 text-sm text-muted-foreground">Menu Items</p>
              </div>
              <div>
                <p className="font-serif text-3xl font-bold text-foreground">7</p>
                <p className="mt-1 text-sm text-muted-foreground">Days Open</p>
              </div>
            </div>
          </div>

          {/* Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                <Image
                  src="/images/khachapuri.jpg"
                  alt="Georgian khachapuri cheese bread"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src="/images/wine.jpg"
                  alt="Georgian wine served traditionally"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="pt-8">
              <div className="relative aspect-[3/5] overflow-hidden rounded-lg">
                <Image
                  src="/images/grilled-meat.jpg"
                  alt="Georgian grilled meats on skewers"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
