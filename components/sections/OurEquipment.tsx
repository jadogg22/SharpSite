'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Gauge, Wrench, Users, Award, Truck } from 'lucide-react'; // Added new icons
import React from 'react';

export const OurEquipment = () => {
  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] lg:h-[90vh] flex items-center justify-center text-white overflow-hidden">
      <Image
        src="/images/trucks/thumnail.jpg"
        alt="Sharp Transportation Truck"
        layout="fill"
        objectFit="cover"
        quality={100}
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
          <Image
            src="/images/sharp_transportation_logo.jpeg"
            alt="Sharp Transportation Logo"
            width={150}
            height={45}
            className="mx-auto mb-4 drop-shadow-lg"
          />
          <motion.h2
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl relative inline-flex items-center group"
            variants={{
              initial: {},
              hover: {
                transition: {
                  staggerChildren: 0.05,
                },
              },
            }}
            initial="initial"
            whileHover="hover"
          >
            <Truck className="h-10 w-10 mr-4 text-white group-hover:animate-bounce" />
            {"Our Modern Fleet: Reliability on the Road".split(" ").map((word, i, arr) => (
              <motion.span
                key={i}
                variants={{
                  initial: { color: "#FFFFFF" }, // Use hex code for white
                  hover: { color: "#FACC15" }, // Use hex code for yellow-400
                }}
                className="inline-block"
              >
                {word}{i < arr.length - 1 ? "\u00A0" : ""}
              </motion.span>
            ))}
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

        {/* Stats Section */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center space-y-2"
          >
            <Gauge className="h-10 w-10 text-white" />
            <span className="text-3xl font-bold">99%</span>
            <p className="text-sm text-gray-300">On-Time Delivery</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center space-y-2"
          >
            <Wrench className="h-10 w-10 text-white" />
            <span className="text-3xl font-bold">24/7</span>
            <p className="text-sm text-gray-300">Maintenance Support</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col items-center space-y-2"
          >
            <Users className="h-10 w-10 text-white" />
            <span className="text-3xl font-bold">350+</span>
            <p className="text-sm text-gray-300">Experienced Drivers</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col items-center space-y-2"
          >
            <Award className="h-10 w-10 text-white" />
            <span className="text-3xl font-bold">Top Rated</span>
            <p className="text-sm text-gray-300">Safety Record</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};