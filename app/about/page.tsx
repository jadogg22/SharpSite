import Image from "next/image"
import { MapPin, Phone, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import TruckTimeline from "@/components/TruckTimeline"
import { MyFooter } from "@/components/MyFooter"
import { MyHeader } from "@/components/MyHeader"
import { ContactSection } from "@/components/ContactUs"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <MyHeader />

      {/* Main Content */}

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
      <ContactSection />

      {/* Footer */}
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
      <MyFooter />

    </div>
  )
}
