"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { type Perfume, getBestPrice, formatPrice } from "@/lib/perfumes-data"
import Image from "next/image"
import { ExternalLink, Sparkles } from "lucide-react"

interface PerfumeDetailModalProps {
  perfume: Perfume | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function PerfumeDetailModal({ perfume, open, onOpenChange }: PerfumeDetailModalProps) {
  if (!perfume) return null

  const bestPrice = getBestPrice(perfume.stores)

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl">
            {perfume.brand} - {perfume.name}
          </DialogTitle>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-secondary">
            <Image
              src={perfume.image || "/placeholder.svg"}
              alt={`${perfume.brand} ${perfume.name}`}
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-3">
                {perfume.gender}
              </Badge>
              <p className="text-muted-foreground leading-relaxed">{perfume.description}</p>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-accent" />
                Comparación de Precios
              </h3>

              <div className="space-y-2">
                {perfume.stores
                  .sort((a, b) => a.price - b.price)
                  .map((store) => {
                    const isBest = store.name === bestPrice.name
                    return (
                      <div
                        key={store.name}
                        className={`flex items-center justify-between p-4 rounded-lg border-2 transition-all ${
                          isBest ? "border-accent bg-accent/5" : "border-border bg-card"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="relative h-8 w-24">
                            <Image
                              src={store.logo || "/placeholder.svg"}
                              alt={store.name}
                              fill
                              className="object-contain"
                            />
                          </div>
                          {isBest && (
                            <Badge variant="default" className="bg-accent text-accent-foreground">
                              Mejor Oferta
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center gap-3">
                          <span className={`font-bold text-lg ${isBest ? "text-accent" : ""}`}>
                            {formatPrice(store.price)}
                          </span>
                          <Button
                            size="sm"
                            variant={isBest ? "default" : "outline"}
                            className={isBest ? "bg-accent hover:bg-accent/90" : ""}
                            onClick={() => window.open(store.url, "_blank")}
                          >
                            <ExternalLink className="h-4 w-4 mr-1" />
                            Ver
                          </Button>
                        </div>
                      </div>
                    )
                  })}
              </div>

              <div className="pt-4 border-t">
                <p className="text-sm text-muted-foreground">
                  Ahorra hasta{" "}
                  <span className="font-bold text-accent">
                    {formatPrice(
                      Math.max(...perfume.stores.map((s) => s.price)) - Math.min(...perfume.stores.map((s) => s.price)),
                    )}
                  </span>{" "}
                  eligiendo la mejor oferta
                </p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
