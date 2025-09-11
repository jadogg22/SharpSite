'use client';

import { MyHeader } from '@/components/MyHeader';
import { MyFooter } from '@/components/MyFooter';
import Image from 'next/image';

export default function CommunityInvolvementPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <MyHeader />

      <section className="relative">
        <div className="relative h-[320px] md:h-[440px] w-full">
          <Image
            src="/images/trucks/breastCancerFullCompany.jpg"
            alt="Sharp Transportation Community Involvement"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-transparent flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] tracking-tight">
              Community Involvement
            </h1>
          </div>
        </div>
      </section>

      <section className="container py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-primary text-center">Giving Back to the Community</h2>
          <div className="flex justify-center mb-8">
            <span className="inline-block w-16 h-1 bg-primary/30 rounded-full" />
          </div>
          <div className="bg-white/70 shadow-lg rounded-xl p-8 space-y-6 text-lg">
            <p className="text-gray-700">
              At Sharp Transportation, we believe in the importance of giving back to the communities where we live and work. We are proud to support a variety of local and national organizations through donations, sponsorships, and volunteer efforts.
            </p>
            <p className="text-gray-700">
              Our commitment to community involvement is an integral part of our company culture. We are dedicated to making a positive impact and helping to create a better future for everyone.
            </p>
          </div>
        </div>
      </section>

      <MyFooter />
    </div>
  );
}
