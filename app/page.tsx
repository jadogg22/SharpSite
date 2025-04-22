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

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/logo.webp"
                alt="Sharp Transportation Logo"
                width={150}
                height={50}
                className="h-10 w-auto"
              />
            </Link>
            <nav className="hidden gap-6 md:flex">
              <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
                About
              </Link>
              <Link href="/dashboard" className="text-sm font-medium transition-colors hover:text-primary">
                Logistics
              </Link>
              <Link href="/employment" className="text-sm font-medium transition-colors hover:text-primary">
                Employment
              </Link>
              <Link href="/driver-resources" className="text-sm font-medium transition-colors hover:text-primary">
                Driver Resources
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex">
              <Button variant="outline" size="sm" className="mr-2">
                <Search className="mr-2 h-4 w-4" />
                Track Shipment
              </Button>
              <Button>
                <Users className="mr-2 h-4 w-4" />
                Drive With Us
              </Button>
            </div>
            <button className="flex items-center justify-center rounded-md p-2.5 text-sm font-medium md:hidden">
              <span className="sr-only">Open menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section with Dashboard-like Layout */}
      <section className="bg-gray-50 py-12">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/images/drivers/recruitment-hero.webp"
                  alt="Join Our Team"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex flex-col justify-center p-8">
                  <div className="max-w-md text-white">
                    <div className="mb-4 inline-block rounded-full bg-primary/20 px-3 py-1 text-sm font-medium text-primary">
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
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-white bg-white text-gray-800 hover:bg-white/90"
                      >
                        Driver Benefits
                      </Button>
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
                  <Button variant="secondary" className="justify-start">
                    <Users className="mr-2 h-4 w-4" />
                    Driver Portal
                  </Button>
                  <Button variant="secondary" className="justify-start">
                    <Radio className="mr-2 h-4 w-4" />
                    STR Radio
                  </Button>
                  <Button variant="secondary" className="justify-start">
                    <FileText className="mr-2 h-4 w-4" />
                    Resources
                  </Button>
                  <Button variant="secondary" className="justify-start">
                    <Phone className="mr-2 h-4 w-4" />
                    Contact
                  </Button>
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
                      src="/images/trucks/hero-truck.webp"
                      alt="Driver Name"
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
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
                      src="/images/trucks/hero-truck.webp"
                      alt="Driver Name"
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <p className="font-medium">Sarah Williams</p>
                    <p className="text-sm text-muted-foreground">Regional Driver • 4 Years with Sharp</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "The respect I receive at Sharp is unmatched. From dispatch to management, everyone treats drivers as
                  the professionals we are. The pay and benefits are excellent too."
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
                    <p className="font-medium">Robert Garcia</p>
                    <p className="text-sm text-muted-foreground">Team Driver • 3 Years with Sharp</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "My partner and I joined Sharp after trying several other companies. The difference is night and day.
                  Consistent miles, great equipment, and a support team that actually answers when you call."
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
              <Button size="lg" variant="secondary">
                Apply Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Contact Recruiting
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="container py-12">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <Image
                src="/images/logo-white.webp"
                alt="Sharp Transportation Logo"
                width={150}
                height={50}
                className="h-10 w-auto mb-4"
              />
              <p className="mt-4 text-sm">
                Providing reliable transportation services across North America for over 35 years.
              </p>
              <div className="mt-6 flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="https://www.facebook.com/sharptransportation" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-4">For Drivers</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    Apply Now
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Driver Benefits
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Equipment
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Driver Portal
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    STR Radio
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-4">For Shippers</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    Track Shipment
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Request a Quote
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Coverage Map
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact Sales
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-4">Contact</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start">
                  <MapPin className="mr-2 h-5 w-5 shrink-0" />
                  <span>390 N 900 E Wellsville, UT 84339</span>
                </li>
                <li className="flex items-center">
                  <Phone className="mr-2 h-5 w-5 shrink-0" />
                  <span>435-245-6053</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-800 pt-8">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} Sharp Transportation. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

