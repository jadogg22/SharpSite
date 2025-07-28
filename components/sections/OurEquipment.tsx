'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Gauge, Wrench, Users, Award, Truck, Settings, ShieldCheck, Clock } from 'lucide-react';
import React, { useState, useEffect } from 'react';

const stats = [
  { icon: Gauge, value: "99%", label: "On-Time Delivery" },
  { icon: Wrench, value: "24/7", label: "Maintenance Support" },
  { icon: Users, value: "350+", label: "Experienced Drivers" },
  { icon: Award, value: "Top Rated", label: "Safety Record" },
];

export const OurEquipment = () => {
  const [currentStat, setCurrentStat] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStat((prevStat) => (prevStat + 1) % stats.length);
    }, 3000); // Change stat every 3 seconds

    return () => clearInterval(timer);
  }, []);

  const CurrentIcon = stats[currentStat].icon;

  return (
    <>
      <section className="relative w-full h-[70vh] md:h-[80vh] lg:h-[90vh] flex items-center justify-center text-white overflow-hidden">
        <Image
          src="/images/trucks/thumnail.jpg"
          alt="Sharp Transportation Truck"
          fill
          style={{ objectFit: 'cover' }}
          className="absolute inset-0 z-0"
        />
        <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay for readability */}

        <div className="relative z-20 container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="hidden md:block">
              <Image
                src="/images/sharp_transportation_logo.jpeg"
                alt="Sharp Transportation Logo"
                width={150}
                height={45}
                className="mx-auto mb-4 drop-shadow-lg"
              />
            </div>
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight relative flex items-center justify-center group"
            >
              <Truck className="h-8 w-8 sm:h-10 sm:w-10 mr-4 text-white group-hover:animate-bounce" />
              <span className="group-hover:text-yellow-400 transition-colors duration-300">
                Our Modern Fleet: Reliability on the Road
              </span>
            </motion.h2>
            <p className="max-w-3xl mx-auto text-lg md:text-xl">
              At Sharp Transportation, we pride ourselves on maintaining a fleet of late-model, well-equipped trucks. Our commitment to modern equipment ensures not only the safety and comfort of our drivers but also the reliable and efficient delivery of your cargo.
            </p>
            <Link href="/services" passHref>
              <Button size="lg" className="mt-4 bg-primary hover:bg-primary/90">
                Learn More About Our Services
              </Button>
            </Link>
          </motion.div>

          {/* Stats Section - Desktop */}
          <div className="mt-12 hidden md:grid grid-cols-4 gap-8 px-4 sm:px-0">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.8, delay: 0.2 * (index + 1) }}
                  className="flex flex-col items-center space-y-2"
                >
                  <Icon className="h-10 w-10 text-white" />
                  <span className="text-3xl font-bold">{stat.value}</span>
                  <p className="text-sm text-gray-300">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Stats Section - Mobile Carousel */}
          <div className="mt-12 md:hidden h-32 flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStat}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center space-y-2"
              >
                <CurrentIcon className="h-10 w-10 text-white" />
                <span className="text-3xl font-bold">{stats[currentStat].value}</span>
                <p className="text-sm text-gray-300">{stats[currentStat].label}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white text-gray-800">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <Wrench className="h-12 w-12 mx-auto text-blue-600 mb-4" />
            <h2 className="text-4xl font-bold">State-of-the-Art In-House Shop</h2>
            <p className="max-w-3xl mx-auto text-lg mt-4 text-gray-600">
              Our commitment to reliability is backed by our fully-equipped, on-site maintenance facility. This allows us to keep our fleet in peak condition, ensuring safety and minimizing downtime.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Benefits List */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            >
              <h3 className="text-2xl font-semibold mb-6">What This Means For You:</h3>
              <ul className="space-y-5 text-lg">
                <motion.li variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} className="flex items-start">
                  <ShieldCheck className="h-7 w-7 text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Enhanced Safety & Reliability:</span>
                    <p className="text-gray-600">Proactive maintenance and certified technicians mean our trucks are among the safest on the road.</p>
                  </div>
                </motion.li>
                <motion.li variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} className="flex items-start">
                  <Clock className="h-7 w-7 text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Maximum Uptime:</span>
                    <p className="text-gray-600">With 24/7 access to our shop, we handle repairs immediately, keeping our drivers on schedule and freight moving.</p>
                  </div>
                </motion.li>
                <motion.li variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }} className="flex items-start">
                  <Settings className="h-7 w-7 text-green-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Quality Control:</span>
                    <p className="text-gray-600">We don't cut corners. Our in-house team uses top-quality parts and follows rigorous standards for every truck.</p>
                  </div>
                </motion.li>
              </ul>
            </motion.div>

            {/* Image Gallery */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <motion.div variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}>
                <Image src="/images/shop/in-house-shop-1.JPG" alt="Mechanic working on a truck engine" width={400} height={300} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="rounded-lg shadow-lg object-cover w-full h-full" />
              </motion.div>
              <motion.div variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }} className="grid grid-rows-2 gap-4">
                <Image src="/images/shop/6B8A16641.JPG" alt="View of the service bays" width={400} height={142} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="rounded-lg shadow-lg object-cover w-full h-full" />
                <Image src="/images/shop/6B8A16881.JPG" alt="Tire and parts storage" width={400} height={142} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="rounded-lg shadow-lg object-cover w-full h-full" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurEquipment;
