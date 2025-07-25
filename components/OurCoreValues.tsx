"use client";

import { ShieldCheck, ThumbsUp, Users, Truck } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

const values = [
  {
    icon: <ShieldCheck className="w-12 h-12 text-primary" />,
    title: "Safety First",
    description:
      "The safety of our drivers and the public is our top priority. We maintain a rigorous safety program and a modern, well-maintained fleet.",
    hoverColor: "hover:bg-primary/10",
  },
  {
    icon: <ThumbsUp className="w-12 h-12 text-blue-500" />,
    title: "Reliability & Trust",
    description:
      "Our customers count on us for on-time deliveries and dependable service. We build trust through transparency and consistent performance.",
    hoverColor: "hover:bg-blue-100",
  },
  {
    icon: <Users className="w-12 h-12 text-green-500" />,
    title: "Driver Focused",
    description:
      "Our drivers are the heart of our company. We are committed to providing a supportive, respectful, and rewarding environment for our team.",
    hoverColor: "hover:bg-green-100",
  },
  {
    icon: <Truck className="w-12 h-12 text-yellow-500" />,
    title: "Modern Fleet",
    description:
      "We invest in the latest equipment and technology to ensure efficiency, safety, and comfort for our drivers.",
    hoverColor: "hover:bg-yellow-100",
  },
];

const OurCoreValues = () => {
  return (
    <section className="bg-white py-24">
      <div className="container">
        <ScrollAnimation>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary">Our Core Values</h2>
            <p className="text-lg text-muted-foreground mt-2">
              The principles that drive our commitment to excellence.
            </p>
            <div className="flex justify-center mt-4">
              <span className="inline-block w-20 h-1 bg-primary/30 rounded-full" />
            </div>
          </div>
        </ScrollAnimation>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <ScrollAnimation delay={index * 0.2}>
              <div
                key={index}
                className={`group text-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ${value.hoverColor}`}>
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurCoreValues;
