import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const NewDriverInterest = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="flex justify-center items-center py-8 px-4" style={{ backgroundColor: 'var(--color-dark-grey)' }}>
      <div className="bg-white shadow-lg rounded-md w-full max-w-5xl grid grid-cols-1 md:grid-cols-2">
        {/* Left Side */}
        <div className="p-8 flex flex-col justify-center items-start space-y-6 border-b md:border-b-0 md:border-r border-gray-200">
          <Image src="/images/logo.webp" alt="Sharp Logo" width={200} height={60} className="h-auto w-auto" />
          <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: 'var(--color-deep-blue)' }}>
            INTERESTED IN DRIVING FOR <span style={{ color: 'var(--color-bright-blue)' }}>SHARP</span>?
          </h2>
          <p className="font-medium" style={{ color: 'var(--color-deep-blue)' }}>
            Have questions? Call us: <span className="text-xl font-bold" style={{ color: 'var(--color-bright-blue)' }}>888-123-4567</span>
          </p>
        </div>

        {/* Right Side */}
        <form className="p-8 space-y-2">
          <p className="text-sm font-semibold uppercase mb-4" style={{ color: 'var(--color-deep-blue)' }}>
            Talk to a Sharp representative today.<br />
            <span style={{ color: 'var(--color-bright-blue)' }}>Fill out the form below.</span>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="email" className="text-xs text-gray-700 font-semibold">Email*</label>
              <input type="email" id="email" required className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[color:var(--color-bright-blue)]" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="cellNumber" className="text-xs text-gray-700 font-semibold">Cell Number*</label>
              <input type="tel" id="cellNumber" required className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[color:var(--color-bright-blue)]" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="firstName" className="text-xs text-gray-700 font-semibold">First Name*</label>
              <input type="text" id="firstName" required className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[color:var(--color-bright-blue)]" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="lastName" className="text-xs text-gray-700 font-semibold">Last Name*</label>
              <input type="text" id="lastName" required className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[color:var(--color-bright-blue)]" />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="streetAddress" className="text-xs text-gray-700 font-semibold">Street Address</label>
            <input type="text" id="streetAddress" className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[color:var(--color-bright-blue)]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="city" className="text-xs text-gray-700 font-semibold">City</label>
              <input type="text" id="city" className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[color:var(--color-bright-blue)]" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="stateRegion" className="text-xs text-gray-700 font-semibold">State/Region*</label>
              <input type="text" id="stateRegion" required className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[color:var(--color-bright-blue)]" />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="postalCode" className="text-xs text-gray-700 font-semibold">Postal Code</label>
            <input type="text" id="postalCode" className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[color:var(--color-bright-blue)]" />
          </div>

          <div className="flex flex-col">
            <label className="text-xs text-gray-700 font-semibold mb-2">Do you have a valid CDL?</label>
            <div className="flex items-center space-x-4">
              <label htmlFor="cdlYes" className="flex items-center space-x-2">
                <input type="radio" id="cdlYes" name="cdl" value="yes" className="focus:ring-2 focus:ring-[color:var(--color-bright-blue)]" style={{ color: 'var(--color-bright-blue)' }} />
                <span className="text-gray-700 text-sm">Yes</span>
              </label>
              <label htmlFor="cdlNo" className="flex items-center space-x-2">
                <input type="radio" id="cdlNo" name="cdl" value="no" className="focus:ring-2 focus:ring-[color:var(--color-bright-blue)]" style={{ color: 'var(--color-bright-blue)' }} />
                <span className="text-gray-700 text-sm">No</span>
              </label>
            </div>
          </div>

          <p className="text-[10px] text-gray-500">
            By submitting this form, I consent to Sharp Transportation and its affiliates contacting me via email, phone, or text (including from an auto-dialer) to inform me of employment opportunities.
          </p>

          <button type="submit" className="w-full text-white font-bold py-3 px-6 rounded transition bg-[color:var(--color-bright-blue)] hover:bg-[color:var(--color-bright-blue-darker)]">
            SEND NOW
          </button>
        </form>
      </div>
    </motion.section>
  );
};