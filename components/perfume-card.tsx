"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Perfume } from "@/lib/perfumes-data"
import Image from "next/image"

interface PerfumeCardProps {
  perfume: Perfume
  onClick: () => void
}

export function PerfumeCard({ perfume, onClick }: PerfumeCardProps) {
  return (
    <Card
      className="group cursor-pointer overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1"
      onClick={onClick}
    >
      <CardContent className="p-0">
        <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
          <Image
            src={perfume.image || "/placeholder.svg"}
            alt={`${perfume.brand} ${perfume.name}`}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
          <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground" variant="default">
            {perfume.gender}
          </Badge>
        </div>
        <div className="p-4 space-y-2">
          <p className="text-sm text-muted-foreground font-medium">{perfume.brand}</p>
          <h3 className="font-serif text-lg font-semibold leading-tight text-balance">{perfume.name}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{perfume.description}</p>
        </div>
      </CardContent>
    </Card>
  )
}
