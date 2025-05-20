import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Mail, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import  TimelineSection  from "@/components/TimelineSection";
import TruckTimeline from "@/components/TruckTimeline"

export default function AboutPage() {
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
              <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
                Home
              </Link>
              <Link href="/about" className="text-sm font-medium text-primary transition-colors">
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
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex">
              <Link href="/tracking">
                <Button variant="outline" size="sm" className="mr-2">
                  Tracking
                </Button>
              </Link>
              <Link href="/directory">
                <Button>Directory</Button>
              </Link>
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

      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-[300px] md:h-[400px] w-full">
          <Image
            src="/images/trucks/truckStop.avif"
            alt="Sharp Transportation Fleet"
            fill
            className="object-cover object-top"
            priority
          />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">ABOUT</h1>
          </div>
        </div>
      </section>

      {/* Company History Section */}
      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Our History</h2>
          <div className="space-y-6 text-lg">
            <p>
              In 1970 John T. Sharp founded Sharp Transportation of Wellsville, Utah which is located 75 miles north of
              Salt Lake City in beautiful Cache Valley. Zan Sharp, John's son, incorporated Sharp Transportation in
              January of 1990 after acquiring the company from his father. Since then, Sharp Transportation has grown to
              include 170 employees that run 200 trucks, 500 trailers, 25 outside carriers, and offices in Salt Lake,
              Twin Falls, Seattle, and the headquarters in Wellsville.
            </p>
            <p>
              In 33 years of business, Sharp Transportation has grown from one building and a handful of trucks to a
              nationwide operation with warehouses and offices throughout the western United States. We continue to run
              our operation from a small town in Northern Utah.
            </p>
          </div>
        </div>
      </section>

      {/* President/Owner Section */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/drivers/ZanSharpSmall.png"
                alt="Zan Sharp - President/Owner"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <div className="mb-6">
                <h2 className="text-3xl font-bold mb-2">PRESIDENT/OWNER</h2>
                <h3 className="text-xl font-medium text-primary">Zan Sharp</h3>
                <p className="text-muted-foreground">EXT. 106</p>
              </div>
              <div className="space-y-4">
                <p>
                  To say Zan Sharp knows a lot about the trucking business is like saying water knows a lot about being
                  wet. He immersed himself in it right out of high school, driving trucks for his father's company at
                  age 18. Three years later, Zan started dispatching. Then, in 1990, he and his wife decided to take
                  over Sharp. At the time, the company was small, but Zan felt that if he worked hard, he could grow the
                  business. His can-do spirit is reflected in the company philosophy, "We'll do it." Those three simple
                  words have been the driving force that has built Sharp Transportation's reputation as one of the most
                  flexible trucking companies in the United States.
                </p>
                <p>
                  Zan often finds himself reflecting on the success of the company, especially since he's been here
                  since the beginning. "Sharp Transportation has grown to become what my dad always wanted. He dreamed
                  of a trucking company run by the family, where we would work together during the week and play
                  together during weekends." His dream has come true, as his wife and all three children have worked for
                  the company.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 max-w-4xl mx-auto space-y-6">
            <p>
              Two of Zan's biggest priorities are his clients and his drivers. His clients know this because of the
              on-time deliveries. His CDL drivers know this because of how Sharp Trucking is run. Zan works hard with
              the office teams to ensure that all of their drivers stay happy and healthy while they are out on the
              road. With perks including new trucks every three years, and monthly mileage and safety bonuses, Sharp
              Transportation is a company that is here for its employees.
            </p>
            <p>
              With Sharp Transportation, you will never have to worry about having enough miles. There is consistent
              freight, so there is always work if you want it. Zan and the team have worked hard to provide pre-planned
              dispatch. This means that you won't have to wait forever at the dock. We even offer a rider program. All
              CDL drivers get all of their benefits within 90 days of driving for Sharp Transportation. After all, the
              best way to have a successful logistics company is to be sure that your drivers are just as successful.
            </p>
          </div>
        </div>
      </section>



      {/* Timeline Section */}
      <TruckTimeline />

      {/* Contact Section */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">CONTACT US</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="mb-8">
                <div className="flex items-start mb-4">
                  <MapPin className="mr-2 h-5 w-5 text-primary shrink-0 mt-1" />
                  <p className="text-lg">390 N 900 E Wellsville, UT 84339</p>
                </div>
                <div className="flex items-center mb-4">
                  <Phone className="mr-2 h-5 w-5 text-primary shrink-0" />
                  <p className="text-lg">Tel: 435-245-6053</p>
                </div>
              </div>

              <div className="aspect-w-16 aspect-h-9 h-[300px] relative rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4661.512279566052!2d-111.90958681743523!3d41.6458941214591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87537f829d24a6d1%3A0xef993dd5c684fd16!2sSharp%20Transportation!5e0!3m2!1sen!2sus!4v1744917958098!5m2!1sen!2sus"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>
            </div>

            <div>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium">
                      First Name
                    </label>
                    <Input id="firstName" placeholder="First Name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium">
                      Last Name
                    </label>
                    <Input id="lastName" placeholder="Last Name" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Email" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input id="subject" placeholder="Subject" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Type your message here..." rows={5} />
                </div>
                <Button type="submit" className="w-full">
                  Submit
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
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
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">YouTube</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/logistics" className="hover:text-white">
                    Logistics
                  </Link>
                </li>
                <li>
                  <Link href="/employment" className="hover:text-white">
                    Employment
                  </Link>
                </li>
                <li>
                  <Link href="/driver-resources" className="hover:text-white">
                    Drivers Resources
                  </Link>
                </li>
                <li>
                  <Link href="/tracking" className="hover:text-white">
                    Tracking
                  </Link>
                </li>
              </ul>
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
                <li className="flex items-center">
                  <Mail className="mr-2 h-5 w-5 shrink-0" />
                  <span>info@sharptransportation.com</span>
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
