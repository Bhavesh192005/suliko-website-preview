import Image from "next/image"

const images = [
  { src: "/images/khachapuri.jpg", alt: "Georgian khachapuri cheese bread" },
  { src: "/images/khinkali.jpg", alt: "Traditional Georgian khinkali dumplings" },
  { src: "/images/grilled-meat.jpg", alt: "Georgian grilled meats on skewers" },
  { src: "/images/salad.jpg", alt: "Fresh Georgian salad" },
  { src: "/images/wine.jpg", alt: "Georgian wine served traditionally" },
  { src: "/images/hero.jpg", alt: "Suliko restaurant interior" },
]

export function Gallery() {
  return (
    <section id="gallery" className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-primary font-semibold mb-4">
            Gallery
          </p>
          <h2 className="font-serif text-4xl font-bold text-foreground lg:text-5xl text-balance">
            A Feast for the Eyes
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-muted-foreground leading-relaxed">
            Glimpses of our kitchen, our dishes, and the warm ambiance
            that makes Suliko special.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-3">
          {images.map((img, i) => (
            <div
              key={img.src}
              className={`group relative overflow-hidden rounded-lg ${
                i === 0 ? "md:col-span-2 md:row-span-2 aspect-square" : "aspect-[4/3]"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
