'use client';
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Users, DollarSign, Truck, HeartPulse, CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { MyHeader } from "@/components/MyHeader";
import { MyFooter } from "@/components/MyFooter";

// Swapped these with more driver-focused photos
const perkPhotos = [
  { src: "/images/drivers/driver_with_dog.jpg", alt: "A Sharp driver with their dog in the truck" },
  { src: "/images/trucks/front_w_trailer.jpg", alt: "A Sharp Transportation truck and trailer" },
  { src: "/images/trucks/inside_cab.JPG", alt: "The modern interior of a Sharp truck cab" },
  { src: "/images/drivers/driver_with_fam.png", alt: "A Sharp driver with their family" },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1.0] } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const timelineSteps = [
  ["Apply Online", "Complete our simple online application in just minutes."],
  ["Quick Review", "We review your app and reach out within 24 hours."],
  ["Interview", "Chat with our team and see where you fit best."],
  ["Start Driving", "Complete orientation and hit the road."],
];

const TimelineStep = ({ title, desc, index }) => (
  <motion.li variants={itemVariants} className="relative">
    <div className="absolute -left-4 top-1 w-7 h-7 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold ">
      {index + 1}
    </div>
    <div className="pl-4">
      <h4 className="font-semibold text-xl text-gray-800">{title}</h4>
      <p className="text-gray-600 mt-1">{desc}</p>
    </div>
  </motion.li>
);

export default function Employment() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <MyHeader />

      {/* Hero: Real fleet banner */}
      <section className="relative h-[400px] md:h-[500px] w-full">
        <Image
          src="/images/trucks/bearlake.avif"
          alt="Sharp Transportation Trucks"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end">
          <div className="container max-w-3xl px-4 pb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
              Drive With The Sharp Team
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-white/90 text-lg md:text-xl mb-8 font-medium">
              We’re growing, and we want you on the road with us. Family-run, modern fleet, nationwide opportunity.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}>
              <a
                href="https://intelliapp.driverapponline.com/c/sharptransportation?uri_b=ia_sharptransportation_1928688647"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3">
                  Apply Now <ArrowRight className="ml-2" />
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Culture / Testimonial */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="container py-16 flex flex-col md:flex-row items-center gap-12">
        <motion.div variants={itemVariants} className="md:w-1/2 flex-shrink-0">
          <Image
            src="/images/drivers/Rob%20Wilson.avif"
            alt="Rob Wilson, Sharp driver"
            width={500}
            height={400}
            className="rounded-2xl object-cover shadow-2xl border-8 border-white"
          />
        </motion.div>
        <motion.div variants={itemVariants} className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">The Sharp Difference</h2>
          <p className="text-gray-600 text-lg mb-5">
            In 35 years, we’ve grown from a single truck to a nationwide operation with over 75% driver retention. Our team still feels like family.
          </p>
          <blockquote className="bg-blue-50 border-l-4 border-blue-500 px-6 py-5 rounded-r-lg text-gray-700 italic text-lg">
            "I’ve worked at big carriers before, but here, I’m not just a number. Dispatch knows my name, and I get the miles I want."
            <span className="block mt-3 text-md font-bold text-gray-800">– Rob Wilson, Company Driver</span>
          </blockquote>
        </motion.div>
      </motion.section>

      {/* Perks with photo grid */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="bg-white py-20 bg-flowing-lines">
        <div className="container">
          <h2 className="text-4xl font-bold mb-10 text-center text-gray-800">Driver Benefits & Perks</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Benefits list */}
            <motion.ul
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
              className="space-y-4 text-lg text-gray-700">
              <motion.li variants={itemVariants} className="flex items-center"><DollarSign className="text-blue-500 mr-3" /> Weekly pay + monthly bonuses</motion.li>
              <motion.li variants={itemVariants} className="flex items-center"><Truck className="text-blue-500 mr-3" /> New trucks (3 years or newer)</motion.li>
              <motion.li variants={itemVariants} className="flex items-center"><HeartPulse className="text-blue-500 mr-3" /> Full medical, dental, life</motion.li>
              <motion.li variants={itemVariants} className="flex items-center"><Users className="text-blue-500 mr-3" /> Rider & pet programs</motion.li>
              <motion.li variants={itemVariants} className="flex items-center"><CheckCircle className="text-green-500 mr-3" /> $2,000 sign-on bonus</motion.li>
              <motion.li variants={itemVariants} className="flex items-center"><CheckCircle className="text-green-500 mr-3" /> Pre-planned freight = less dock time</motion.li>
              <motion.li variants={itemVariants} className="flex items-center"><CheckCircle className="text-green-500 mr-3" /> Paid vacation & 401k match</motion.li>
            </motion.ul>
            {/* Photos grid */}
            <motion.div
              variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
              className="grid grid-cols-2 gap-4">
              {perkPhotos.map((photo, i) => (
                <motion.div key={i} variants={itemVariants}>
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={240}
                    height={180}
                    className={`rounded-xl object-cover h-40 w-full shadow-lg transform hover:scale-105 transition-transform duration-300 ${i === 1 ? "object-bottom" : ""} ${i === 2 ? "blur-xs" : ""}`}

                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Steps/How To Join + Requirements */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="container py-20 bg-subtle-prism">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Steps timeline + CTA */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}>
            <h3 className="text-3xl font-bold mb-8">How to Join Sharp</h3>
            <motion.ol
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
              className="relative border-l-2 border-blue-300 pl-6 space-y-10">
              {timelineSteps.map(([title, desc], i) => (
                <motion.li key={title} variants={itemVariants} className="relative">
                  <div className="absolute -left-4 top-1 w-7 h-7 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold ">
                    {i + 1}
                  </div>
                  <div className="pl-6">
                    <h4 className="font-semibold text-xl text-gray-800">{title}</h4>
                    <p className="text-gray-600 mt-1">{desc}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ol>
          </motion.div>

          {/* Requirements with a photo */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold mb-8">Minimum Requirements</h3>
            <div className="bg-white p-8 rounded-xl shadow-lg border">
              <Image
                src="/images/drivers/canyon_w_driver.png"
                alt="Sharp driver in truck"
                width={360}
                height={200}
                className="object-cover w-full h-64 rounded-lg mb-6"
              />
              <ul className="space-y-3 text-gray-700">
                {[
                  "22 years old",
                  "1 year experience (or very close)",
                  "No serious traffic violations in last 3 years",
                  "No DWI/DUI in past 10 years",
                  "Owner-ops: late model equipment (2014+)",
                ].map((item, i) => (
                  <motion.li key={i} variants={itemVariants} className="flex items-center text-base">
                    <CheckCircle className="text-green-500 mr-3 w-5 h-5 flex-shrink-0" /> {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.section>


      {/* Non-CDL / Office */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="bg-gray-800 py-20">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Not a CDL Driver?</h2>
          <p className="mb-8 text-gray-300 max-w-2xl mx-auto text-lg">We're also hiring for our in-house shop, office, and logistics teams. Expert mechanics, dispatchers, and more—join the Sharp family.</p>
          <Link href="/coming-soon">
            <Button size="lg" className="bg-white text-gray-800 hover:bg-primary hover:text-white text-lg px-8 py-3">
              See Open Positions
            </Button>
          </Link>
        </div>
      </motion.section>

      <MyFooter />
    </div>
  );
}
