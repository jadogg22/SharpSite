'use client';

import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import Link from "next/link"
import Image from "next/image"
import {
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Truck,
  Users,
  FileText,
  Radio,
  Search,
  DollarSign,
  HeartPulse,
  CheckCircle,
  ArrowDown,
} from "lucide-react"
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { MyHeader } from "@/components/MyHeader";
import { MyFooter } from "@/components/MyFooter";
import { DriverInterestForm } from "@/components/DriverInterestForm";
import { OurEquipment } from "@/components/sections/OurEquipment";
import { NewDriverInterest } from "@/components/NewDriverInterest";
import { HowToJoinSharp } from "@/components/sections/HowToJoinSharp";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex min-h-screen flex-col"
    >
      {/* Navigation */}
      <MyHeader />

      <section className="relative h-[85vh] w-full overflow-hidden">
        <video
          src="/videos/broll.mp4"
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 container mx-auto flex h-full items-center">
          <div className="max-w-xl text-left">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Your Future on the Open Road Starts Here
            </h1>
            <p className="mt-6 text-lg text-gray-200 md:text-xl">
              We're not just another trucking company. We're a family that invests in your success with top-tier benefits, competitive pay, and a supportive team that has your back.
            </p>
            <div className="mt-10 flex flex-wrap justify-start gap-4">
              <Button size="lg" asChild>
                <a href="https://intelliapp.driverapponline.com/c/sharptransportation?uri_b=ia_sharptransportation_1928688647">
                  Apply Now
                  <ChevronRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white backdrop-blur-sm bg-white/10 hover:bg-white hover:text-black">
                <Link href="/employment">
                  Explore Driver Benefits
                </Link>
              </Button>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowDown className="h-8 w-8 text-white" />
            </motion.div>
            <span className="text-white text-sm">Learn More</span>
          </motion.div>
        </div>
      </section>

      {/* Driver Benefits Section */}
      <section className="py-36" style={{ backgroundColor: 'var(--color-dark-blue)' }}>
        <div className="container">
          <div className="mb-8">
            <h2 className="text-3xl font-bold tracking-tight" style={{ color: 'var(--color-white)' }}>Why Drive With Sharp</h2>
            <p className="text-muted-foreground" style={{ color: 'var(--color-white)' }}>Join a team that values your experience and prioritizes your success</p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            <Card className="transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <CardHeader>
                <div className="mb-2 rounded-full bg-primary/10 p-2 w-10 h-10 flex items-center justify-center">
                  <DollarSign className="h-5 w-5 text-primary" />
                </div>
                <CardTitle style={{ color: 'var(--color-dark-blue)' }}>Competitive Pay</CardTitle>
              </CardHeader>
              <CardContent>

                <p className="text-muted-foreground text-sm" style={{ color: 'var(--color-light-blue-grey)' }}>
                  Weekly pay, monthly bonuses for fuel, performance & safety, and a $2,000 sign-on bonus paid quarterly.
                </p>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <CardHeader>
                <div className="mb-2 rounded-full bg-primary/10 p-2 w-10 h-10 flex items-center justify-center">
                  <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </div>
                <CardTitle style={{ color: 'var(--color-dark-blue)' }}>Home Time</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm" style={{ color: 'var(--color-light-blue-grey)' }}>
                  Flexible scheduling options that respect your need for quality time at home with family and friends.
                </p>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <CardHeader>
                <div className="mb-2 rounded-full bg-primary/10 p-2 w-10 h-10 flex items-center justify-center">
                  <Truck className="h-5 w-5 text-primary" />
                </div>
                <CardTitle style={{ color: 'var(--color-dark-blue)' }}>Modern Equipment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm" style={{ color: 'var(--color-light-blue-grey)' }}>
                  Drive late-model, well-maintained trucks equipped with the latest safety and comfort features.
                </p>
              </CardContent>
            </Card>

            <Card className="transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <CardHeader>
                <div className="mb-2 rounded-full bg-primary/10 p-2 w-10 h-10 flex items-center justify-center">
                  <HeartPulse className="h-5 w-5 text-primary" />
                </div>
                <CardTitle style={{ color: 'var(--color-dark-blue)' }}>Full Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm" style={{ color: 'var(--color-light-blue-grey)' }}>
                  Medical, Dental, 401K w/ 4% match, free Teladoc & life insurance. Starts at 60 days.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <OurEquipment />

      <HowToJoinSharp />

      

      <NewDriverInterest />

      {/* Footer */}
      <MyFooter />
    </motion.div>
  )
}
