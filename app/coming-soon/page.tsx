"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MyHeader } from "@/components/MyHeader";
import { MyFooter } from "@/components/MyFooter";

export default function ComingSoon() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">(
    "idle"
  );

  function validateEmail(e: string) {
    return /\S+@\S+\.\S+/.test(e);
  }

  function handleSubmit(evt: React.FormEvent) {
    evt.preventDefault();
    if (!validateEmail(email)) {
      setStatus("error");
      return;
    }

    // No external requests — simulate a save + success
    setStatus("sending");
    setTimeout(() => {
      try {
        // store locally so user sees it persisted (not sending anywhere)
        const saved = JSON.parse(localStorage.getItem("comingSoonEmails") || "[]");
        saved.push({ email, at: new Date().toISOString() });
        localStorage.setItem("comingSoonEmails", JSON.stringify(saved));

        setStatus("ok");
        setEmail("");
      } catch {
        setStatus("error");
      }
    }, 700);
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <MyHeader />

      <main className="flex-1 flex flex-col">
        <section className="relative w-full h-[360px] md:h-[440px]">
          <Image
            src="/images/trucks/truckStop.avif"
            alt="Sharp Transportation fleet"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 to-transparent flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center px-6"
            >
              <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg tracking-tight">
                Coming Soon
              </h1>
            </motion.div>
          </div>
        </section>

        <section className="container mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left: message */}
              <div>
                <h2 className="text-3xl font-bold text-primary">
                  We’ll be back — better than ever.
                </h2>
                <p className="mt-4 text-gray-700 text-lg leading-relaxed">
                  We’re finishing touches and content for this page so everything
                  looks and works great. If you want the first look when it
                  goes live, leave your email below.                 </p>

                <ul className="mt-6 space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold">✓</span>
                    <span>Updates about truck reveals & stories</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-semibold">✓</span>
                    <span>Event & community outreach news</span>
                  </li>
                </ul>
              </div>

              {/* Right: subscribe form */}
              <div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <label className="sr-only" htmlFor="email">Email address</label>
                  <div className="flex gap-3">
                    <input
                      id="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (status !== "idle") setStatus("idle");
                      }}
                      type="email"
                      placeholder="your@email.com"
                      className="flex-1 rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/40"
                      aria-invalid={status === "error"}
                    />
                    <button
                      type="submit"
                      className="rounded-lg bg-primary px-5 py-3 text-white font-semibold shadow hover:brightness-95 transition"
                      aria-live="polite"
                    >
                      {status === "sending" ? "Saving..." : "Notify Me"}
                    </button>
                  </div>

                  <div className="min-h-[1.4rem]">
                    {status === "error" && (
                      <p className="text-sm text-rose-600">Please enter a valid email.</p>
                    )}
                    {status === "ok" && (
                      <p className="text-sm text-emerald-600">Thanks — we’ll reach out when it’s live.</p>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Small footer CTA */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-10 text-center"
          >
            <Link href="/" className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
              ← Back to home
            </Link>
          </motion.div>
        </section>
      </main>

      <MyFooter />
    </div>
  );
}
