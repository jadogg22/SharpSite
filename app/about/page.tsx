'use client';

import Image from "next/image";
import TruckTimeline from "@/components/TruckTimeline";
import { MyFooter } from "@/components/MyFooter";
import { MyHeader } from "@/components/MyHeader";
import ContactUs from "@/components/ContactUs";
import { Award, Users } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";
import OurCoreValues from "@/components/OurCoreValues"; // Import the new component
import { CommunityOutreach } from "@/components/CommunityOutreach";
import ZAnimation from "@/components/ZAnimation";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function AboutPage() {
  const [showContent, setShowContent] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      setStartAnimation(true);
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 1000); // Delay to match the animation duration

      return () => clearTimeout(timer);
    }
  }, [inView]);

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <MyHeader />

      <ScrollAnimation>
        <section className="relative">
          <div className="relative h-[320px] md:h-[440px] w-full">
            <Image
              src="/images/trucks/truckStop.avif"
              alt="Sharp Transportation Fleet"
              fill
              className="object-cover object-top"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-transparent flex flex-col items-center justify-center">
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
      </ScrollAnimation>

      <ScrollAnimation>
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
              <p className="text-gray-700">
                In 1970 <span className="font-semibold text-gray-800">John T. Sharp</span> founded Sharp Transportation of Wellsville, Utah which is located 75 miles north of
                Salt Lake City in beautiful Cache Valley. <span className="font-semibold text-gray-800">Zan Sharp</span>, John's son, incorporated Sharp Transportation in
                January of 1990 after acquiring the company from his father. Since then, Sharp Transportation has grown to
                include <span className="font-semibold text-gray-800">170 employees</span> that run <span className="font-semibold text-gray-800">200 trucks</span>, <span className="font-semibold text-gray-800">500 trailers</span>, 25 outside carriers, and offices in Salt Lake,
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
      </ScrollAnimation>

      <OurCoreValues />

      <section ref={ref} className="bg-gradient-to-r from-primary/10 to-white py-24 relative">
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <ZAnimation startAnimation={startAnimation} />
        </div>
        <div
          className={`container grid md:grid-cols-2 gap-16 items-center transition-opacity duration-1000 ${showContent ? "opacity-100" : "opacity-0"}`}>
          <div className="relative flex items-center justify-center">
            <div className="relative w-96 h-96 rounded-full overflow-hidden shadow-2xl border-8 border-primary/20">
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
              <h2 className="text-3xl font-bold mb-1 text-primary">A Word from Our President</h2>
              <h3 className="text-2xl font-bold text-gray-800">Zan Sharp</h3>
              <p className="text-muted-foreground">EXT. 106</p>
            </div>
            <div className="space-y-4 text-lg text-gray-700">
              <p>
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
              <p>
                Two of Zan's biggest priorities are his clients and his drivers. His clients know this because of the
                on-time deliveries. His CDL drivers know this because of how Sharp Trucking is run. Zan works hard with
                the office teams to ensure that all of their drivers stay happy and healthy while they are out on the
                road. With perks including new trucks every three years, and monthly mileage and safety bonuses, Sharp
                Transportation is a company that is here for its employees.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ScrollAnimation>
        <section className="container py-20">
          <div className="flex flex-col items-center mb-8">
            <h2 className="text-3xl font-bold text-primary flex items-center gap-2 mb-1">
              <Users className="w-8 h-8 text-primary" />
              Company Timeline
            </h2>
          </div>
          <TruckTimeline />
        </section>
      </ScrollAnimation>

      <CommunityOutreach />

      <ScrollAnimation>
        <section className="py-20">
          <ContactUs />
        </section>
      </ScrollAnimation>

      <MyFooter />
    </div>
  );
}
