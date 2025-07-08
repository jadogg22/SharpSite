'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, FileText, Search, Users, Truck, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export const HowToJoinSharp = () => {
  const steps = [
    {
      icon: FileText,
      title: "Apply Online",
      description: "Complete our simple online application in just minutes.",
    },
    {
      icon: Search,
      title: "Quick Review",
      description: "We review your app and reach out within 24 hours.",
    },
    {
      icon: Users,
      title: "Interview",
      description: "Chat with our team and see where you fit best.",
    },
    {
      icon: Truck,
      title: "Start Driving",
      description: "Complete orientation and hit the road.",
    },
  ];

  const requirements = [
    "22 years old",
    "1 year experience (or very close)",
    "No serious traffic violations in the last 3 years",
    "No DWI/DUI in the past 10 years",
    "Owner-ops: late model equipment (2013+)",
  ];

  return (
    <section className="bg-gray-50 py-36">
      <div className="container">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight">How to Join Sharp</h2>
          <p className="text-muted-foreground">
            We make it simple — and we make sure you're a good fit for the team.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Steps */}
          <div className="relative pl-6 border-l border-gray-300 space-y-10">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative pl-8"
                >
                  {/* Step Icon */}
                  <div className="absolute -left-3 top-0">
                    <div className="rounded-full bg-primary text-white w-10 h-10 flex items-center justify-center text-xs font-bold shadow">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Requirements */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Minimum Requirements</h3>
            <ul className="space-y-6 text-sm text-muted-foreground">
              {requirements.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="flex items-start gap-2"
                >
                  <CheckCircle className="text-green-600 h-5 w-5 mt-0.5" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://intelliapp.driverapponline.com/c/sharptransportation?uri_b=ia_sharptransportation_1928688647"
            className="inline-block"
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Start Your Application
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};