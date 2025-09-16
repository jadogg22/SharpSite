"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Truck = {
  title: string;
  image: string;
  description: string;
  gradient: string;
};

const trucks: Truck[] = [
  {
    title: "Veterans Tribute Truck",
    image: "/images/trucks/veterans_truck.avif",
    description:
      "Dedicated to the brave men and women who served our country, this truck is a rolling reminder of the sacrifices made to protect our freedom.",
    gradient: "from-blue-700 to-red-500",
  },
  {
    title: "Breast Cancer Awareness Truck",
    image: "/images/trucks/breast_cancer_truck.avif",
    description:
      "Wrapped in pink, this truck represents hope, resilience, and unity in the fight against breast cancer. It spreads awareness wherever it goes.",
    gradient: "from-pink-500 to-rose-400",
  },
  {
    title: "EMS Tribute Truck",
    image: "/images/trucks/ems_truck.avif",
    description:
      "A tribute to first responders and EMS workers, honoring their courage and dedication to saving lives every day.",
    gradient: "from-green-600 to-emerald-400",
  },
];

export default function WrappedTrucks() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">
            Our Wrapped Trucks
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            These special trucks represent the values and causes close to our
            hearts. Each one is more than a vehicle — it’s a tribute.
          </p>
        </motion.div>

        <div className="space-y-32">
          {trucks.map((truck, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className={`flex flex-col md:grid md:grid-cols-2 gap-12 items-center ${isEven ? "" : "md:[&>*:first-child]:col-start-2 md:[&>*:last-child]:col-start-1"
                  }`}
              >
                {/* Image */}
                <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl w-full">
                  <Image
                    src={truck.image}
                    alt={truck.title}
                    fill
                    className="object-cover"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-tr ${truck.gradient} opacity-40`}
                  />
                </div>

                {/* Text */}
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-gray-800">
                    {truck.title}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {truck.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

