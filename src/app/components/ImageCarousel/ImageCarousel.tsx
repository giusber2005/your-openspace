'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface ImageCarouselProps {
  images: string[]
  interval?: number
}

export const ImageCarousel = ({ images, interval = 3000 }: ImageCarouselProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, interval)

    return () => clearInterval(intervalId)
  }, [images.length, interval])

  return (
    <div className="relative h-[400px] overflow-hidden rounded-2xl">
      {images.map((src, index) => (
        <div
          key={index}
          className="absolute w-full h-full transition-all duration-1000 ease-in-out"
          style={{
            transform: `translateY(${(index - currentImageIndex) * 100}%)`,
          }}
        >
          <Image
            src={src}
            alt={`Carousel image ${index + 1}`}
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
          />
        </div>
      ))}
    </div>
  )
}
