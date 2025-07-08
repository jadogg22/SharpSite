"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const testimonials = [
  {
    name: "Tyler",
    role: "OTR Driver • 7 Years with Sharp",
    imageSrc: "/images/drivers/truckdriver1.png",
    testimonial:
      "I have driven with the mega carriers and I have done local work out of Arizona. This company is by far the best I have been with in my 11 years of driving. They are good at keeping me busy, getting me in the shop if I need it and getting me home when needed. As long as you are doing what you are supposed to be doing and doing it safely.... they don't micromanage. They understand that drivers are professionals and know what is expected of them. If you are looking for a smaller trucking atmosphere with a family feel to it.... I highly recommend working for Sharp Transportation!!",
  },
  {
    name: "Nate",
    role: "Regional Driver • 4 Years with Sharp",
    imageSrc: "/images/drivers/TruckDriver2.png",
    testimonial:
      "My working relationship with the office personnel at Sharp has been stellar. My routes have been tight and efficient. I have all the work I can handle. Despite all the challenges this year, it was the most productive year for me. I could not be more grateful for the support! Additionally, I must mention the shop support as well! That crew has my thanks and gratitude for keeping me on the road with no interruptions to my loads and I consider myself very lucky in that regard!",
  },
  {
    name: "Chris",
    role: "Team Driver • 3 Years with Sharp",
    imageSrc: "/images/trucks/hero-truck.webp",
    testimonial:
      "Sharp Transportation is a great company to work for. Dispatchers, mechanics are awesome, and the drive managers are on top of it. I feel like an asset here. I’ve worked at a few trucking companies, and this is by far the best. Not to mention the equipment is well taken care of.",
  },
]

export function TestimonialCarousel() {
  return (
    <section className="container py-12">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight">Hear From Our Drivers</h2>
        <p className="text-muted-foreground">Real experiences from the Sharp Transportation team</p>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-4xl mx-auto"
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/1">
              <div className="p-4">
                <Card>
                  <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                    <div className="mb-4">
                      <Image
                        src={testimonial.imageSrc}
                        alt={testimonial.name}
                        width={80}
                        height={80}
                        className="rounded-full object-cover"
                      />
                    </div>
                    <p className="text-lg font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground mb-4">{testimonial.role}</p>
                    <blockquote className="text-muted-foreground italic">
                      “{testimonial.testimonial}”
                    </blockquote>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  )
}