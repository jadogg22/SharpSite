'use client';
import React from 'react';
import { MapPin, Phone, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function ContactUs() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container">
        <h2 className="text-3xl font-bold mb-12 text-center">CONTACT US</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="mb-8">
              <div className="flex items-start mb-4">
                <MapPin className="mr-2 h-5 w-5 text-primary shrink-0 mt-1" />
                <p className="text-lg">390 N 900 E Wellsville, UT 84339</p>
              </div>
              <div className="flex items-center mb-4">
                <Phone className="mr-2 h-5 w-5 text-primary shrink-0" />
                <p className="text-lg">Tel: 435-245-6053</p>
              </div>
            </div>
            <div className="aspect-[16/9] h-[300px] relative rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4661.512279566052!2d-111.90958681743523!3d41.6458941214591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87537f829d24a6d1%3A0xef993dd5c684fd16!2sSharp%20Transportation!5e0!3m2!1sen!2sus!4v1744917958098!5m2!1sen!2sus"
                width="600"
                height="450"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
                // REMOVE allowFullScreen={false}!
              ></iframe>
            </div>
          </div>

          <div>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium">
                    First Name
                  </label>
                  <Input id="firstName" placeholder="First Name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium">
                    Last Name
                  </label>
                  <Input id="lastName" placeholder="Last Name" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input id="email" type="email" placeholder="Email" />
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input id="subject" placeholder="Subject" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea id="message" placeholder="Type your message here..." rows={5} />
              </div>
              <Button type="submit" className="w-full">
                Submit
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
