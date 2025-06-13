import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

export const MyHeader = () => (
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/logo.webp"
                alt="Sharp Transportation Logo"
                width={150}
                height={50}
                className="h-10 w-auto"
              />
            </Link>
            <nav className="hidden gap-6 md:flex">
              <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
                About
              </Link>
              <Link href="/logistics" className="text-sm font-medium transition-colors hover:text-primary">
                Logistics
              </Link>
              <Link href="/employment" className="text-sm font-medium transition-colors hover:text-primary">
                Employment
              </Link>
              <Link href="/driver-resources" className="text-sm font-medium transition-colors hover:text-primary">
                Driver Resources
              </Link>
              <Link href="/str-radio" className="text-sm font-medium transition-colors hover:text-primary">
                STR Radio
              </Link>
              <Link href="/directory" className="text-sm font-medium transition-colors hover:text-primary">
                Directory
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex">
              <Button variant="outline" size="sm" className="mr-2">
                <Search className="mr-2 h-4 w-4" />
                Track Shipment
              </Button>
              <Button>Contact Us</Button>
            </div>
            <button className="flex items-center justify-center rounded-md p-2.5 text-sm font-medium md:hidden">
              <span className="sr-only">Open menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </header>
);
