"use client"

import { useState } from "react"
import { perfumes, type Perfume } from "@/lib/perfumes-data"
import { PerfumeCard } from "@/components/perfume-card"
import { PerfumeDetailModal } from "@/components/perfume-detail-modal"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export default function Home() {
  const [selectedPerfume, setSelectedPerfume] = useState<Perfume | null>(null)
  const [filter, setFilter] = useState<"Todos" | "Hombre" | "Mujer">("Todos")

  const filteredPerfumes = perfumes.filter((perfume) => filter === "Todos" || perfume.gender === filter)

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Sparkles className="h-8 w-8 text-accent" />
              <h1 className="font-serif text-3xl font-bold text-balance">Aromas</h1>
            </div>
            <p className="text-sm text-muted-foreground hidden md:block">
              Encuentra los mejores precios en perfumes premium
            </p>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-secondary/30 to-background py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl md:text-6xl font-bold mb-4 text-balance">
            Descubre tu fragancia perfecta
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Compara precios en Falabella, Ripley y Elite Perfumes. Encuentra las mejores ofertas en perfumes premium.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex gap-2 justify-center flex-wrap">
          {(["Todos", "Hombre", "Mujer"] as const).map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
              className={filter === category ? "bg-accent hover:bg-accent/90" : ""}
            >
              {category}
            </Button>
          ))}
        </div>
      </section>

      {/* Perfumes Grid */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPerfumes.map((perfume) => (
            <PerfumeCard key={perfume.id} perfume={perfume} onClick={() => setSelectedPerfume(perfume)} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card mt-12">
        <div className="container mx-auto px-4 py-8 text-center text-sm text-muted-foreground">
          <p>© 2025 Aromas. Comparador de precios de perfumes premium.</p>
          <p className="mt-2">Los precios son referenciales y pueden variar.</p>
        </div>
      </footer>

      {/* Modal */}
      <PerfumeDetailModal
        perfume={selectedPerfume}
        open={!!selectedPerfume}
        onOpenChange={(open) => !open && setSelectedPerfume(null)}
      />
    </div>
  )
}
