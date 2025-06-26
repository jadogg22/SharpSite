'use client';
import Image from "next/image";
import Link from "next/link";
import { Button} from "@/components/ui/button";
import { Users, DollarSign, Truck, HeartPulse, CheckCircle } from "lucide-react";
import {MyHeader} from "@/components/MyHeader";
import {MyFooter} from "@/components/MyFooter";

// Swap these with your real photos!
const perkPhotos = [
  { src: "/images/trucks/road.jpg", alt: "Truck on highway" },
  { src: "/images/drivers/lies.avif", alt: "Sharp drivers together" },
  { src: "/images/trucks/wellsvile.avif", alt: "Yard and warehouse" },
  { src: "/images/drivers/generic_drivers.avif", alt: "Happy driver in cab" },
];

export default function Employment() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <MyHeader />

      {/* Hero: Real fleet banner */}
      <section className="relative h-[350px] md:h-[440px] w-full">
        <Image
          src="/images/trucks/bearlake.avif"
          alt="Sharp Transportation Trucks"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-primary/5 flex flex-col justify-center">
          <div className="container max-w-2xl px-4">
            <h1 className="text-white text-3xl md:text-5xl font-extrabold mb-3 drop-shadow">
              Drive With The Sharp Team
            </h1>
            <p className="text-white/80 mb-6 font-medium">
              We’re growing, and we want you on the road with us. Family-run, modern fleet, nationwide opportunity.
            </p>
            <a
              href="https://intelliapp.driverapponline.com/c/sharptransportation?uri_b=ia_sharptransportation_1928688647"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-primary">
                Apply Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Culture / Testimonial */}
      <section className="container py-12 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 flex-shrink-0">
          <Image
            src="/images/drivers/rob wilson.avif"
            alt="Rob Wilson, Sharp driver"
            width={500}
            height={400}
            className="rounded-xl object-cover shadow-lg border-4 border-primary/10"
          />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-3 text-primary">The Sharp Difference</h2>
          <p className="text-gray-700 mb-3">
            In 35 years, we’ve grown from a single truck to a nationwide operation with over 75% driver retention. Our team still feels like family.
          </p>
          <blockquote className="bg-primary/10 border-l-4 border-primary px-6 py-4 rounded text-gray-800 italic">
            "I’ve worked at big carriers before, but here, I’m not just a number. Dispatch knows my name, and I get the miles I want."
            <span className="block mt-2 text-sm font-bold text-primary">– Rob Wilson, Company Driver</span>
          </blockquote>
        </div>
      </section>

      {/* Perks with photo grid */}
      <section className="bg-white py-12">
        <div className="container">
          <h2 className="text-3xl font-bold mb-6 text-center">Driver Benefits & Perks</h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Benefits list */}
            <ul className="space-y-3 text-base text-gray-800">
              <li className="flex items-center"><DollarSign className="text-primary mr-2" /> Weekly pay + monthly bonuses</li>
              <li className="flex items-center"><Truck className="text-primary mr-2" /> New trucks (3 years or newer)</li>
              <li className="flex items-center"><HeartPulse className="text-primary mr-2" /> Full medical, dental, life</li>
              <li className="flex items-center"><Users className="text-primary mr-2" /> Rider & pet programs</li>
              <li className="flex items-center"><CheckCircle className="text-green-600 mr-2" /> $2,000 sign-on bonus</li>
              <li className="flex items-center"><CheckCircle className="text-green-600 mr-2" /> Pre-planned freight = less dock time</li>
              <li className="flex items-center"><CheckCircle className="text-green-600 mr-2" /> Paid vacation & 401k match</li>
            </ul>
            {/* Photos grid */}
            <div className="grid grid-cols-2 gap-4">
              {perkPhotos.map((photo, i) => (
                <Image
                  key={i}
                  src={photo.src}
                  alt={photo.alt}
                  width={240}
                  height={180}
                  className="rounded-lg object-cover h-32 w-full shadow-md"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Steps/How To Join + Requirements */}
      <section className="container py-12">
  <div className="grid md:grid-cols-2 gap-12 items-start">
    {/* Steps timeline + CTA */}
    <div>
      <h3 className="text-2xl font-bold mb-6">How to Join Sharp</h3>
      <ol className="relative border-l-2 border-primary/40 pl-6 space-y-8">
        {[
          ["Apply Online", "Complete our simple online application in just minutes."],
          ["Quick Review", "We review your app and reach out within 24 hours."],
          ["Interview", "Chat with our team and see where you fit best."],
          ["Start Driving", "Complete orientation and hit the road."],
        ].map(([title, desc], i) => (
          <li key={i}>
            <div className="absolute -left-4 top-1.5 w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center font-bold">
              {i + 1}
            </div>
            <div className="pl-6">
              <h4 className="font-semibold text-lg">{title}</h4>
              <p className="text-gray-600 text-sm">{desc}</p>
            </div>
          </li>
        ))}
      </ol>
      <button className="mt-10 px-6 py-3 bg-black text-white rounded-md shadow hover:bg-gray-800 transition">
        Apply Now
      </button>
    </div>

    {/* Requirements with a photo */}
    <div>
      <h3 className="text-2xl font-bold mb-6">Minimum Requirements</h3>
      <div className="rounded-md overflow-hidden mb-4 shadow-lg border">
        <Image
          src="/images/drivers/generic_driver.avif"
          alt="Sharp driver in truck"
          width={360}
          height={200}
          className="object-cover w-full h-48"
        />
      </div>
      <ul className="space-y-3 text-gray-800">
        {[
          "22 years old",
          "1 year experience (or very close)",
          "No serious traffic violations in last 3 years",
          "No DWI/DUI in past 10 years",
          "Owner-ops: late model equipment (2013+)",
        ].map((item, i) => (
          <li key={i} className="flex items-center text-sm">
            <CheckCircle className="text-green-600 mr-2 w-5 h-5" /> {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
</section>


      {/* Non-CDL / Office */}
      <section className="bg-primary/5 py-12">
        <div className="container text-center">
          <h2 className="text-2xl font-bold mb-3">Not a CDL Driver?</h2>
          <p className="mb-6 text-gray-800">We're also hiring for shop, office, and logistics. Drivers, mechanics, dispatchers, and more—join the Sharp family.</p>
          <Link href="/apply">
            <Button size="lg">See Open Positions</Button>
          </Link>
        </div>
      </section>

      <MyFooter />
    </div>
  );
}
