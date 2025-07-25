'use client';
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion, easeOut } from "framer-motion";
import { MyHeader } from "@/components/MyHeader";
import { MyFooter } from "@/components/MyFooter";
import ImpactGallery from "@/components/ImpactGallery";
import { CountUp } from "@/components/CountUp";
import {
  impactAreas,
  latestNews,
  wrappedTrucks,
  impactNumbers,
  galleryImages,
} from "./communityData.tsx";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
};

export default function CommunityPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <MyHeader />

      {/* Hero Section */}
      <motion.section
        className="relative h-[450px] w-full flex items-center justify-center text-center text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0 }}
      >

        <Image
          src="/images/trucks/breastCancerFullCompany.jpg"
          alt="Sharp Transportation Community Impact"
          fill
          className="object-cover object-center brightness-75"
          priority
        />
        <div className="relative z-10 max-w-3xl px-4">
          <motion.p
            variants={itemVariants}
            className="text-lg font-semibold text-blue-300 mb-2"
          >
            Driven by Purpose. Powered by Community.
          </motion.p>
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-xl"
          >
            We don’t just drive freight — we drive change.
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-white/90 mb-8"
          >
            Learn how Sharp Transportation gives back to the communities we serve.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3">
              See Our Impact <ArrowRight className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Impact Areas Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-20 bg-white"
      >
        <div className="container grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactAreas.map((area, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="bg-gray-50 p-6 rounded-lg shadow-md text-center flex flex-col items-center"
            >
              <div className="mb-4">{area.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{area.title}</h3>
              <p className="text-gray-600 text-base">{area.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Impact by the Numbers */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-20 bg-blue-600 text-white"
      >
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-10">Impact by the Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {impactNumbers.map((item, i) => (
              <motion.div key={i} variants={itemVariants}>
                <p className="text-5xl font-extrabold">
                  <CountUp to={item.number} suffix={item.suffix} />
                </p>
                <p className="text-lg text-blue-200 mt-2">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Wrapped Trucks Section */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-20 bg-white"
      >
        <div className="container">
          <h2 className="text-4xl font-bold mb-4 text-center text-gray-800">Mobile Tributes</h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-16">Our wrapped trucks are more than just vehicles; they are rolling symbols of our commitment to the causes that matter.</p>
          <div className="space-y-16">
            {wrappedTrucks.map((truck, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
              >
                <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <Image
                    src={truck.image}
                    alt={truck.name}
                    width={600}
                    height={400}
                    className="rounded-lg shadow-2xl object-cover w-full"
                  />
                </div>
                <div className={`md:w-1/2 ${i % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                  <h3 className="text-2xl font-bold text-gray-800">{truck.name}</h3>
                  <p className="text-gray-600 mt-4 text-lg">{truck.cause}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Featured Gallery */}
      <ImpactGallery images={galleryImages} />

      {/* Testimonials / Partners */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-20 bg-white"
      >
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Community Voices</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="md:col-span-1">
              <motion.div variants={itemVariants} className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg text-left">
                <p className="text-gray-700 italic text-lg">
                  "Sharp Transportation's contribution was a game-changer for our program. The indoor facility they built allows our student-athletes to train year-round, something we only dreamed of before. They truly invested in our kids' futures."
                </p>
                <p className="mt-4 font-bold text-gray-800">– High School Baseball Coach</p>
              </motion.div>
            </div>
            <motion.div variants={itemVariants} className="md:col-span-1 grid grid-cols-2 gap-4">
              <Image src="/images/misc/IMG_1820.JPG" alt="Inside of Sharp Transportation building" width={300} height={200} className="rounded-lg shadow-lg object-cover w-full h-full" />
              <Image src="/images/misc/IMG_1821.JPG" alt="Outside of Sharp Transportation building" width={300} height={200} className="rounded-lg shadow-lg object-cover w-full h-full" />
              <div className="col-span-2">
                <Image src="/images/misc/kids_cropped.JPG" alt="Baseball team smiling in front of the diamond" width={600} height={300} className="rounded-lg shadow-lg object-cover w-full h-full" />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Employee Spotlight */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-20 bg-gray-100"
      >
        <div className="container flex flex-col md:flex-row items-center gap-12">
          <motion.div variants={itemVariants} className="md:w-1/2 flex-shrink-0">
            <Image
              src="/images/drivers/generic_driver.avif" // Replace with a real employee photo
              alt="Sharp employee volunteer"
              width={500}
              height={400}
              className="rounded-2xl object-cover shadow-2xl border-8 border-white"
            />
          </motion.div>
          <motion.div variants={itemVariants} className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Driven by Our People</h2>
            <blockquote className="bg-white border-l-4 border-blue-500 px-6 py-5 rounded-r-lg text-gray-700 italic text-lg">
              "Driving the EMS truck is a huge source of pride. When people see it, they wave, they honk... you feel connected to something bigger than just the load you're hauling. It's a reminder of what this company is all about."
              <span className="block mt-3 text-md font-bold text-gray-800">– John D., Company Driver</span>
            </blockquote>
          </motion.div>
        </div>
      </motion.section>

      {/* Partner Logos */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-16 bg-white"
      >
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-500">Our Valued Partners</h2>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
            <motion.img variants={itemVariants} src="/images/logo.webp" alt="Wreaths Across America Logo" className="h-12 w-auto" />
            <motion.img variants={itemVariants} src="/images/logo.webp" alt="Little Lambs Logo" className="h-16 w-auto" />
            <motion.img variants={itemVariants} src="/images/logo.webp" alt="Local High School Logo" className="h-20 w-auto" />
            <motion.img variants={itemVariants} src="/images/logo.webp" alt="Another Partner Logo" className="h-12 w-auto" />
          </div>
        </div>
      </motion.section>

      {/* News & Updates */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-20 bg-gray-50"
      >
        <div className="container">
          <h2 className="text-4xl font-bold mb-10 text-center text-gray-800">News & Updates</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {latestNews.map((news, i) => (
              <motion.div key={i} variants={itemVariants} className="bg-white rounded-lg shadow-lg overflow-hidden group">
                <Link href={news.link}>
                  <div className="overflow-hidden">
                    <Image
                      src={news.image}
                      alt={news.title}
                      width={400}
                      height={250}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-gray-500 mb-2">{news.date}</p>
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">{news.title}</h3>
                    <p className="text-gray-600 mt-2">{news.excerpt}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Footer */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="bg-gray-800 py-20 text-white"
      >
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Want to partner with us or learn more?</h2>
          <p className="mb-8 text-gray-300 max-w-2xl mx-auto text-lg">Let’s work together to keep making a difference.</p>
          <div className="flex justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-gray-800 hover:bg-gray-200">
                Contact Us
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-800">
              Nominate a Cause
            </Button>
          </div>
        </div>
      </motion.section>

      <MyFooter />
    </div>
  );
}