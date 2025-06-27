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
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { MyHeader } from "@/components/MyHeader";
import { MyFooter } from "@/components/MyFooter";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <MyHeader />
  
      {/* Main Content */}
      {/* Hero Section with Dashboard-like Layout */}
      <section className="bg-gray-50 py-12">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/images/trucks/hero-truck.webp"
                  alt="Join Our Team"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex flex-col justify-center p-8">
                  <div className="max-w-md text-white">
                    <div className="mb-4 inline-block rounded-full bg-white/20 px-3 py-1 text-sm font-medium text-primary">
                      Now Hiring Drivers
                    </div>
                    <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                      JOIN THE SHARP TRANSPORTATION TEAM
                    </h1>
                        <p className="mb-6 text-white/90">
                        We’re a small-town company doing big things—with a growing fleet, real people who answer the phone, and a promise to treat every driver like family.
                        </p>

                    <div className="flex flex-wrap gap-3">
                      <a href="https://intelliapp.driverapponline.com/c/sharptransportation?uri_b=ia_sharptransportation_1928688647" className="hidden md:inline-block">
                      <Button size="lg" className="bg-primary hover:bg-primary/90">
                        Apply Now
                      </Button>
                      </a>
                      <Link href="/employment" passHref>
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-white bg-white text-gray-800 hover:bg-white/90"
                      >
                        Driver Benefits
                      </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Track Your Shipment</CardTitle>
                  <CardDescription>Enter your tracking number below</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      placeholder="Enter tracking #"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                    <Button>Track</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary text-primary-foreground">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Driver Quick Links</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-2">
                  <Link href="https://intelliapp.driverapponline.com/c/sharptransportation?uri_b=ia_sharptransportation_1928688647" passHref>
                  <Button variant="secondary" className="w-full justify-start">
                    <Users className="mr-2 h-4 w-4" />
                    Apply Now
                  </Button>
                  </Link>
                  <Link href="/str-radio" passHref>
                  <Button variant="secondary" className="w-full justify-start">
                    <Radio className="mr-2 h-4 w-4" />
                    STR Radio
                  </Button>
                  </Link>
                  <Link href="/driver-resources" passHref>
                  <Button variant="secondary" className="w-full justify-start">
                    <FileText className="mr-2 h-4 w-4" />
                    Resources
                  </Button>
                  </Link>
                  <Link href="/directory" passHref>
                  <Button variant="secondary" className="w-full justify-start">
                    <Phone className="mr-2 h-4 w-4" />
                    Directory
                  </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Driver Benefits Section */}
      <section className="container py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Why Drive With Sharp</h2>
          <p className="text-muted-foreground">Join a team that values your experience and prioritizes your success</p>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          <Card>
            <CardHeader>
              <div className="mb-2 rounded-full bg-primary/10 p-2 w-10 h-10 flex items-center justify-center">
                <DollarSign className="h-5 w-5 text-primary" />
              </div>
              <CardTitle>Competitive Pay</CardTitle>
            </CardHeader>
            <CardContent>
              
            <p className="text-muted-foreground text-sm">
              Weekly pay, monthly bonuses for fuel, performance & safety, and a $2,000 sign-on bonus paid quarterly.
            </p>
            </CardContent>
          </Card>

          <Card>
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
              <CardTitle>Home Time</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Flexible scheduling options that respect your need for quality time at home with family and friends.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="mb-2 rounded-full bg-primary/10 p-2 w-10 h-10 flex items-center justify-center">
                <Truck className="h-5 w-5 text-primary" />
              </div>
              <CardTitle>Modern Equipment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Drive late-model, well-maintained trucks equipped with the latest safety and comfort features.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="mb-2 rounded-full bg-primary/10 p-2 w-10 h-10 flex items-center justify-center">
                <HeartPulse className="h-5 w-5 text-primary" />
              </div>
              <CardTitle>Full Benefits</CardTitle>
            </CardHeader>
            <CardContent>
            <p className="text-muted-foreground text-sm">
              Medical, Dental, 401K w/ 4% match, free Teladoc & life insurance. Starts at 60 days.
            </p>
            </CardContent>
          </Card>
        </div>
      </section>



      
<section className="bg-gray-50 py-12">
  <div className="container">
    <div className="mb-8 text-center">
      <h2 className="text-3xl font-bold tracking-tight">How to Join Sharp</h2>
      <p className="text-muted-foreground">
        We make it simple — and we make sure you're a good fit for the team.
      </p>
    </div>

    <div className="grid gap-12 md:grid-cols-2">
      {/* Steps */}
     
<div className="relative pl-6 border-l border-gray-300 space-y-6">
  {[
    ["Apply Online", "Complete our simple online application in just minutes."],
    ["Quick Review", "We review your app and reach out within 24 hours."],
    ["Interview", "Chat with our team and see where you fit best."],
    ["Start Driving", "Complete orientation and hit the road."],
  ].map(([title, desc], i) => (
    <div key={i} className="relative pl-8">
      {/* Step Dot */}
      <div className="absolute -left-3 top-1">
        <div className="rounded-full bg-primary text-white w-6 h-6 flex items-center justify-center text-xs font-bold shadow">
          {i + 1}
        </div>
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-muted-foreground text-sm">{desc}</p>
    </div>
  ))}
</div>

      {/* Requirements */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold">Minimum Requirements</h3>
        <ul className="space-y-3 text-sm text-muted-foreground">
          {[
            "22 years old",
            "1 year experience (or very close)",
            "No serious traffic violations in the last 3 years",
            "No DWI/DUI in the past 10 years",
            "Owner-ops: late model equipment (2013+)",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <CheckCircle className="text-green-600 h-5 w-5 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <div className="mt-10 text-center">
      <a
        href="https://intelliapp.driverapponline.com/c/sharptransportation?uri_b=ia_sharptransportation_1928688647"
        className="inline-block"
      >
        <Button size="lg" className="bg-primary hover:bg-primary/90">
          Start Your Application
          <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </a>
    </div>
  </div>
</section>

      {/* Driver Testimonials */}
      <section className="container py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Hear From Our Drivers</h2>
          <p className="text-muted-foreground">Real experiences from the Sharp Transportation team</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-full w-16 h-16 overflow-hidden">
                    <Image
                      src="/images/drivers/Truckdriver1.png"
                      alt="Driver Name"
                      width={64}
                      height={64}
                      className="object-cover object-top w-full h-full"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Tyler</p>
                    <p className="text-sm text-muted-foreground">OTR Driver • 7 Years with Sharp</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
             
                  "I have driven with the mega carriers and I have done local work out of Arizona. This company is by far the best I have been with in my 11 years of driving. They are good at keeping me busy, getting me in the shop if I need it and getting me home when needed.

                  As long as you are doing what you are supposed to be doing and doing it safely.... they don't micromanage. They understand that drivers are professionals and know what is expected of them.

                  If you are looking for a smaller trucking atmosphere with a family feel to it.... I highly recommend working for Sharp Transportation!!"
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-full w-16 h-16 overflow-hidden">
                    <Image
                      src="/images/drivers/Truckdriver2.png"
                      alt="Driver Name"
                      width={64}
                      height={64}
                      className="object-cover object-top w-full h-full"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Nate</p>
                    <p className="text-sm text-muted-foreground">Regional Driver • 4 Years with Sharp</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "My working relationship with the office personnel at Sharp has been stellar. My routes have been tight and efficient. I have all the work I can handle. Despite all the challenges this year, it was the most productive year for me. I could not be more grateful for the support!

                  Additionally, I must mention the shop support as well! That crew has my thanks and gratitude for keeping me on the road with no interruptions to my loads and I consider myself very lucky in that regard!"
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="rounded-full w-16 h-16 overflow-hidden">
                    <Image
                      src="/images/trucks/hero-truck.webp"
                      alt="Driver Name"
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Chris</p>
                    <p className="text-sm text-muted-foreground">Team Driver • 3 Years with Sharp</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "Sharp Transportation is a great company to work for. Dispatchers, mechanics are awesome, and the drive managers are on top of it. I feel like an asset here. I’ve worked at a few trucking companies, and this is by far the best. Not to mention the equipment is well taken care of."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground">
        <div className="container py-12">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tight">Ready to Join Our Team?</h2>
            
              <p className="mt-4 max-w-2xl text-primary-foreground/90">
                If you're tired of being a number, come work with folks who know your name and answer the damn phone.
              </p>
            <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link href="https://intelliapp.driverapponline.com/c/sharptransportation?uri_b=ia_sharptransportation_1928688647" passHref>
              <Button size="lg" variant="secondary">
                Apply Now
              </Button>
              </Link >
              <Link href="/directory?tab=Recruitment" passHref>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Contact Recruiting
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <MyFooter />
    </div>
  )
}

