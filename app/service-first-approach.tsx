import Image from "next/image"
import Link from "next/link"
import { ChevronRight, MapPin, Phone, Mail, Truck, Users, FileText, Radio, Search, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export default function ServiceFirstApproach() {
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
              <Link href="/logistics" className="text-sm font-medium transition-colors hover:text-primary">
                Logistics
              </Link>
              <Link href="/employment" className="text-sm font-medium transition-colors hover:text-primary">
                Employment
              </Link>
              <Link href="/driver-resources" className="text-sm font-medium transition-colors hover:text-primary">
                Driver Resources
              </Link>
              <Link href="/str-radio" className="text-sm font-medium transition-colors hover:text-primary">
                STR Radio
              </Link>
              <Link href="/directory" className="text-sm font-medium transition-colors hover:text-primary">
                Directory
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex">
              <Button variant="outline" size="sm" className="mr-2">
                <Search className="mr-2 h-4 w-4" />
                Track Shipment
              </Button>
              <Button>Contact Us</Button>
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

      {/* Mini Hero with Quick Actions */}
      <section className="bg-gray-900 text-white">
        <div className="container py-10">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <div className="mb-2 inline-block rounded-full bg-primary/20 px-3 py-1 text-sm font-medium text-primary">
                35 Years of Excellence
              </div>
              <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Transportation You Can Trust
              </h1>
              <p className="mb-6 max-w-md text-gray-300">
                Sharp Transportation delivers reliable logistics solutions across North America with our dedicated team
                and modern fleet.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Request a Quote
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-white/10 backdrop-blur border-0">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <Truck className="h-8 w-8 text-primary mb-2" />
                    <h3 className="font-medium">Track Shipment</h3>
                  </CardContent>
                  <CardFooter className="p-0">
                    <Button variant="link" className="w-full text-white hover:text-primary">
                      Track Now <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
                <Card className="bg-white/10 backdrop-blur border-0">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <Users className="h-8 w-8 text-primary mb-2" />
                    <h3 className="font-medium">Driver Portal</h3>
                  </CardContent>
                  <CardFooter className="p-0">
                    <Button variant="link" className="w-full text-white hover:text-primary">
                      Log In <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
                <Card className="bg-white/10 backdrop-blur border-0">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <FileText className="h-8 w-8 text-primary mb-2" />
                    <h3 className="font-medium">Get a Quote</h3>
                  </CardContent>
                  <CardFooter className="p-0">
                    <Button variant="link" className="w-full text-white hover:text-primary">
                      Request <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
                <Card className="bg-white/10 backdrop-blur border-0">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <Radio className="h-8 w-8 text-primary mb-2" />
                    <h3 className="font-medium">STR Radio</h3>
                  </CardContent>
                  <CardFooter className="p-0">
                    <Button variant="link" className="w-full text-white hover:text-primary">
                      Listen <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="container py-16">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Transportation Services</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Sharp Transportation offers comprehensive logistics solutions tailored to your specific business needs
          </p>
        </div>

        <div className="grid gap-12">
          {/* Service 1 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/trucks/full-truckload.webp"
                alt="Full Truckload Service"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
                Full Truckload
              </div>
              <h3 className="text-2xl font-bold mb-4">Dedicated Capacity When You Need It</h3>
              <p className="text-muted-foreground mb-6">
                Our full truckload service provides dedicated trucks for your shipments with direct routes and efficient
                delivery times. Perfect for larger shipments that require the entire truck capacity.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Direct point-to-point delivery
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Dedicated equipment and capacity
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Expedited and time-definite options
                </li>
              </ul>
              <Button>
                Learn More About FTL
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Service 2 */}
          <div className="grid md:grid-cols-2 gap-8 items-center md:order-1">
            <div className="md:order-2 relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/trucks/hero-truck.webp"
                alt="Less Than Truckload Service"
                fill
                className="object-cover"
              />
            </div>
            <div className="md:order-1">
              <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
                Less Than Truckload
              </div>
              <h3 className="text-2xl font-bold mb-4">Cost-Effective Solutions for Smaller Shipments</h3>
              <p className="text-muted-foreground mb-6">
                Our LTL service provides cost-effective solutions for smaller shipments that don't require a full truck.
                Share space with other shipments while maintaining reliability and tracking.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Cost-effective for smaller shipments
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Flexible scheduling options
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Real-time tracking and visibility
                </li>
              </ul>
              <Button>
                Learn More About LTL
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Service 3 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/trucks/hero-truck.webp"
                alt="Specialized Freight Service"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
                Specialized Freight
              </div>
              <h3 className="text-2xl font-bold mb-4">Custom Solutions for Unique Cargo</h3>
              <p className="text-muted-foreground mb-6">
                Our specialized freight service provides custom solutions for oversized, high-value, or
                temperature-controlled cargo. We have the equipment and expertise to handle your most challenging
                shipments.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Temperature-controlled transport
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Oversized and heavy haul capabilities
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  High-value and sensitive freight expertise
                </li>
              </ul>
              <Button>
                Learn More About Specialized Freight
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Choose Sharp Transportation</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              With 35 years of experience, we've built our reputation on reliability, safety, and customer satisfaction
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-3">
                    <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium mb-2">Safety First</h3>
                  <p className="text-muted-foreground">
                    Our commitment to safety is unmatched, with rigorous training programs and modern equipment
                    maintained to the highest standards.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-3">
                    <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium mb-2">Reliability</h3>
                  <p className="text-muted-foreground">
                    Count on us for on-time pickups and deliveries, with real-time tracking and proactive communication
                    throughout the journey.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-3">
                    <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium mb-2">Experienced Team</h3>
                  <p className="text-muted-foreground">
                    Our professional drivers and logistics experts bring decades of experience to ensure your freight
                    arrives safely and on time.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats with Image Background */}
      <section className="relative py-20">
        <div className="absolute inset-0 z-0">
          <Image src="/images/fleet/fleet-lineup.webp" alt="Sharp Transportation Fleet" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="container relative z-10 text-white">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary">35+</div>
              <p className="mt-2 text-white/80">Years in Business</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary">500+</div>
              <p className="mt-2 text-white/80">Modern Trucks</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary">48</div>
              <p className="mt-2 text-white/80">States Covered</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary">10M+</div>
              <p className="mt-2 text-white/80">Miles Driven Annually</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground">
        <div className="container py-16">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Simplify Your Logistics?</h2>
            <p className="mt-4 max-w-2xl text-primary-foreground/90">
              Let our team of experts handle your transportation needs so you can focus on growing your business.
            </p>
            <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button size="lg" variant="secondary">
                Request a Quote
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              >
                Contact Sales
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
                <a href="#" className="text-gray-400 hover:text-white">
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
              <h3 className="text-lg font-medium text-white mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    Full Truckload
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Less Than Truckload
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Specialized Freight
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Expedited Shipping
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Cross-Border Services
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    News & Press
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Sustainability
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-4">Contact</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start">
                  <MapPin className="mr-2 h-5 w-5 shrink-0" />
                  <span>123 Logistics Way, Trucking City, TC 12345</span>
                </li>
                <li className="flex items-center">
                  <Phone className="mr-2 h-5 w-5 shrink-0" />
                  <span>(800) 555-SHARP</span>
                </li>
                <li className="flex items-center">
                  <Mail className="mr-2 h-5 w-5 shrink-0" />
                  <span>swag@sharptransportation.com</span>
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

