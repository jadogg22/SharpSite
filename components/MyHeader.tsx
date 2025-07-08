"use client"

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Search, Menu, X } from 'lucide-react';

const navLinks = [
    { href: "/about", label: "About" },
    { href: "/logistics", label: "Logistics" },
    { href: "/employment", label: "Employment" },
    { href: "/driver-resources", label: "Driver Resources" },
    { href: "/str-radio", label: "STR Radio" },
    { href: "/directory", label: "Directory" },
]

export const MyHeader = () => (
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-zinc-900/95">
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
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex">
              <Button variant="outline" size="sm" className="mr-2" asChild>
                <Link href="/track-shipment">
                  <Search className="mr-2 h-4 w-4" />
                  Track Shipment
                </Link>
              </Button>
              <Button asChild><Link href="/contact">Contact Us</Link></Button>
            </div>
            <div className="md:hidden">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Open menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-full max-w-xs bg-white dark:bg-zinc-900">
                        <div className="flex h-full flex-col">
                            <div className="flex items-center justify-between border-b pb-4">
                                <Link href="/" className="flex items-center space-x-2">
                                    <Image
                                        src="/images/logo.webp"
                                        alt="Sharp Transportation Logo"
                                        width={120}
                                        height={40}
                                        className="h-8 w-auto"
                                    />
                                </Link>
                                <SheetClose asChild>
                                    <Button variant="ghost" size="icon">
                                        <X className="h-6 w-6" />
                                        <span className="sr-only">Close menu</span>
                                    </Button>
                                </SheetClose>
                            </div>
                            <nav className="mt-6 flex flex-1 flex-col gap-4">
                                {navLinks.map((link) => (
                                    <SheetClose asChild key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="text-base font-medium transition-colors hover:text-primary"
                                        >
                                            {link.label}
                                        </Link>
                                    </SheetClose>
                                ))}
                            </nav>
                            <div className="mt-auto border-t pt-6">
                                <div className="flex flex-col gap-4">
                                    <Button variant="outline" asChild>
                                        <Link href="/track-shipment">
                                            <Search className="mr-2 h-4 w-4" />
                                            Track Shipment
                                        </Link>
                                    </Button>
                                    <Button asChild>
                                        <Link href="/contact">Contact Us</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
          </div>
        </div>
      </header>
);
