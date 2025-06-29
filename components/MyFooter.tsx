import Image from 'next/image';
import { MapPin, Phone } from 'lucide-react';
import React from 'react';
import Link from 'next/link';

export const MyFooter = () => (

      <footer className="bg-gray-900 text-gray-300">
        <div className="container py-12">
          <div className="grid gap-8 md:grid-cols-5">
            <div>
              <div className="bg-white rounded-lg inline-block p-2">
                <Image
                  src="/images/logo.webp"
                  alt="Sharp Transportation Logo"
                  width={150}
                  height={50}
                  className="h-10 w-auto"
                />
              </div>
              <p className="mt-4 text-sm">
                Providing reliable transportation services across North America for over 35 years.
              </p>
              <div className="mt-6 flex space-x-4">
                <a href="https://www.facebook.com/sharptransportation" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="https://x.com/sharptruck" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/sharp-transportation-inc./" className="text-gray-400 hover:text-white">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-4">For Drivers</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/employment" className="hover:text-white transition-colors">
                    Apply Now
                  </Link>
                </li>
                <li>
                  <Link href="/driver-resources" className="hover:text-white transition-colors">
                    Driver Resources
                  </Link>
                </li>
                <li>
                  <a href="https://intelliapp.driverapponline.com/c/sharptruck?r=website" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Driver Portal
                  </a>
                </li>
                <li>
                  <Link href="/str-radio" className="hover:text-white transition-colors">
                    STR Radio
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-4">For Shippers</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://sharptruck.mcleodsoftware.com/customer/login.aspx" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Track Shipment
                  </a>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">
                    Request a Quote
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/directory" className="hover:text-white transition-colors">
                    Directory
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-4">Contact</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start">
                  <MapPin className="mr-2 h-5 w-5 shrink-0" />
                  <span>390 N 900 E Wellsville, UT 84339</span>
                </li>
                <li className="flex items-center">
                  <Phone className="mr-2 h-5 w-5 shrink-0" />
                  <span>435-245-6053</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-800 pt-8">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} Sharp Transportation. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
                <Link href="/cookie-policy" className="text-gray-400 hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
);

