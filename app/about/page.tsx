import Image from "next/image"
import TruckTimeline from "@/components/TruckTimeline"
import { MyFooter } from "@/components/MyFooter"
import { MyHeader } from "@/components/MyHeader"
import ContactUs from "@/components/ContactUs"
import { Award, Users, Heart, Star } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      {/* Navigation */}
      <MyHeader />

      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-[320px] md:h-[440px] w-full">
          <Image
            src="/images/trucks/truckStop.avif"
            alt="Sharp Transportation Fleet"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] tracking-tight">
              About Sharp Transportation
            </h1>
            <div className="flex gap-3 mt-4">
              <span className="bg-primary/80 text-white text-xs font-semibold px-4 py-1 rounded-full uppercase tracking-wider shadow-lg">
                Family Owned
              </span>
              <span className="bg-white/80 text-primary text-xs font-semibold px-4 py-1 rounded-full uppercase tracking-wider shadow-lg">
                Est. 1970
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Company History Section */}
      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-primary text-center flex items-center justify-center gap-2">
            <Award className="w-8 h-8 text-yellow-400" />
            Our History
          </h2>
          <div className="flex justify-center mb-8">
            <span className="inline-block w-16 h-1 bg-primary/30 rounded-full" />
          </div>
          <div className="bg-white/70 shadow-lg rounded-xl p-8 space-y-6 text-lg">
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
      <section className="bg-gradient-to-r from-primary/10 to-white py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative flex items-center justify-center">
              <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-2xl border-8 border-primary/20">
                <Image
                  src="/images/drivers/ZanSharpSmall.png"
                  alt="Zan Sharp - President/Owner"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-1 text-primary">PRESIDENT / OWNER</h2>
                <h3 className="text-2xl font-bold text-gray-800">Zan Sharp</h3>
                <p className="text-muted-foreground">EXT. 106</p>
              </div>
              <div className="space-y-4 text-lg">
                <p className="text-gray-700">
                  To say Zan Sharp knows a lot about the trucking business is like saying water knows a lot about being
                  wet. He immersed himself in it right out of high school, driving trucks for his father's company at
                  age 18. Three years later, Zan started dispatching. Then, in 1990, he and his wife decided to take
                  over Sharp. At the time, the company was small, but Zan felt that if he worked hard, he could grow the
                  business. His can-do spirit is reflected in the company philosophy, <span className="italic font-semibold text-primary">"We'll do it."</span>
                </p>
                <p>
                  Zan often finds himself reflecting on the success of the company, especially since he's been here
                  since the beginning. <span className="italic">"Sharp Transportation has grown to become what my dad always wanted. He dreamed
                  of a trucking company run by the family, where we would work together during the week and play
                  together during weekends."</span> His dream has come true, as his wife and all three children have worked for
                  the company.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 max-w-4xl mx-auto space-y-6 text-lg bg-white/70 rounded-xl shadow-lg p-8">
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

      {/* Timeline Section (keeps your custom component) */}
      <section className="container py-20">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-3xl font-bold text-primary flex items-center gap-2 mb-1">
            <Users className="w-8 h-8 text-primary" />
            Company Timeline
          </h2>
          <span className="inline-block w-16 h-1 bg-primary/30 rounded-full" />
        </div>
        <TruckTimeline />
      </section>

      {/* Contact Section (with light accent bg) */}
      <section className="bg-primary/5 py-20">
        <ContactUs />
      </section>

      {/* Footer */}
      <MyFooter />
    </div>
  )
}
