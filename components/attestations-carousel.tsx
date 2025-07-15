"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const files = [
  "/Beitch Faro.jpg",
  "/Binette.jpg",
  "/Brand'O.jpg",
  "/Darain Visual.jpg",
  "/Edele A.jpg",
  "/Farel MD.jpg",
  "/Fave Gloa.jpg",
  "/Femme Belle Ambitieuse et Dynamique.jpg",
  "/Indi Hair.jpg",
  "/La Gare Du Nord.jpg",
  "/Lady Riaba.jpg",
  "/LeGrand TV.jpg",
  "/madame Luc.jpg",
  "/Miguel Fashion Style.jpg",
  "/Rab's Collection.jpg",
  "/Sabo Fashion.jpg",
  "/Stecya Minkoué.jpg",
  "/Tito Style.jpg",
  "/Ventex.jpg",
];

export default function AttestationsCarousel() {
  return (
    <Carousel
      className="w-full"
      opts={{ loop: true }}
      plugins={[
        Autoplay({ delay: 3000, stopOnInteraction: false })
      ]}
    >
      <CarouselContent>
        {files.map((src, i) => (
          <CarouselItem key={i}>
            <div className="flex justify-center items-center h-96">
              <Image
                src={src}
                alt={`Attestation Golden Partner ${i + 1}`}
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-contain bg-white"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10" />
      <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-10" />
    </Carousel>
  );
} 