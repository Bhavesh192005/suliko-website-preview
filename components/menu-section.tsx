"use client"

import { useState } from "react"

type MenuItem = {
  name: string
  description: string
  price: string
}

type MenuCategory = {
  id: string
  label: string
  items: MenuItem[]
}

const categories: MenuCategory[] = [
  {
    id: "salads",
    label: "Salads & Soups",
    items: [
      { name: "Suliko Salad", description: "Tomatoes, cucumbers, radish, parsley, green onion, cilantro, special dressing", price: "$17.95" },
      { name: "Beet Salad", description: "Beets, walnuts, paprika, herbs", price: "$12.95" },
      { name: "\"Olivie\" Salad", description: "Potato salad with beef", price: "$12.55" },
      { name: "\"Cobb\" Salad", description: "Lettuce with chicken, bacon, egg, feta, avocado", price: "$23.95" },
      { name: "Caesar Salad", description: "Classic Caesar with romaine, croutons, parmesan", price: "$14.95" },
      { name: "Greek Salad", description: "Fresh Mediterranean-style salad with feta", price: "$17.95" },
      { name: "Soup of the Day", description: "Ask your server for today's selection", price: "$8.95" },
      { name: "Chikhirtma", description: "Traditional Georgian chicken soup", price: "$10.95" },
      { name: "Harcho", description: "Rich Georgian beef soup with rice and walnuts", price: "$10.95" },
      { name: "Borsch", description: "Classic beet soup", price: "$9.95" },
    ],
  },
  {
    id: "appetizers",
    label: "Appetizers",
    items: [
      { name: "Satsivi", description: "Chicken in walnut sauce", price: "$19.95" },
      { name: "Eggplant Roll (3pc)", description: "Rolled eggplant with walnut filling", price: "$12.95" },
      { name: "Lobio", description: "Red beans with herbs", price: "$12.95" },
      { name: "Shrimp Cocktail", description: "Fresh shrimp with cocktail sauce", price: "$19.95" },
      { name: "Fried Calf Liver", description: "Pan-fried with caramelized onions", price: "$23.95" },
      { name: "Lamb Tongue", description: "Served with onion", price: "$26.95" },
      { name: "Eggplant Georgian Style", description: "Traditional preparation with walnuts and herbs", price: "$12.95" },
      { name: "Assorted Phali", description: "Selection of Georgian vegetable pates", price: "$32.95" },
      { name: "Ajapsandali", description: "Georgian vegetable stew", price: "$14.95" },
      { name: "Mushrooms \"Suliko\"", description: "Chef's special mushroom preparation", price: "$17.95" },
      { name: "Draniki", description: "Golden potato pancakes", price: "$14.95" },
    ],
  },
  {
    id: "khinkali",
    label: "Khinkali",
    items: [
      { name: "Khinkali with Pork & Beef (3pc)", description: "Traditional Georgian dumplings with mixed meat filling", price: "$10.95" },
      { name: "Khinkali with Beef (3pc)", description: "Georgian dumplings filled with seasoned beef", price: "$12.95" },
    ],
  },
  {
    id: "specials",
    label: "House Specials",
    items: [
      { name: "Herring with Potatoes", description: "Traditional preparation with fresh herbs", price: "$13.95" },
      { name: "Ispanahi", description: "Spinach and herbs Georgian style", price: "$13.95" },
    ],
  },
]

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("salads")

  const currentCategory = categories.find((c) => c.id === activeCategory)

  return (
    <section id="menu" className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-primary font-semibold mb-4">
            Our Menu
          </p>
          <h2 className="font-serif text-4xl font-bold text-foreground lg:text-5xl text-balance">
            A Taste of Georgia
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-muted-foreground leading-relaxed">
            Every dish is a tribute to the rich culinary traditions of Georgia,
            prepared with the freshest ingredients and time-honored recipes.
          </p>
        </div>

        {/* Category tabs */}
        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`rounded-md px-5 py-2.5 text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground hover:text-foreground hover:bg-card/80"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Menu items */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {currentCategory?.items.map((item) => (
            <div
              key={item.name}
              className="group flex justify-between gap-4 rounded-lg bg-card p-6 transition-colors hover:bg-card/80"
            >
              <div className="flex-1">
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  {item.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
              <p className="shrink-0 font-serif text-lg font-bold text-primary">
                {item.price}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Our full menu includes khachapuri varieties, grilled meats, European classics, and more.
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Ask your server about daily specials and seasonal offerings.
          </p>
        </div>
      </div>
    </section>
  )
}
