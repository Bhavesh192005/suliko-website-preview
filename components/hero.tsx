import Image from "next/image"
import { ChevronDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-end overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero.jpg"
        alt="Suliko Restaurant warm interior ambiance"
        fill
        className="object-cover"
        priority
        quality={90}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 lg:px-8 lg:pb-32">
        <p className="text-sm uppercase tracking-[0.35em] text-white/70 mb-4">
          Concord, Ontario
        </p>
        <h1 className="font-serif text-5xl font-bold leading-tight text-white sm:text-7xl lg:text-8xl text-balance">
          The Soul of
          <br />
          Georgian Cuisine
        </h1>
        <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/80">
          Authentic Georgian and European dishes crafted with tradition,
          served with warmth. Welcome to Suliko.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#menu"
            className="inline-flex items-center rounded-md bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Explore Our Menu
          </a>
          <a
            href="#about"
            className="inline-flex items-center rounded-md border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            Our Story
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ChevronDown className="h-6 w-6 text-white/60" />
        </a>
      </div>
    </section>
  )
}
