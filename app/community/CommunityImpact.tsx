import Image from "next/image";
import React from "react";

const CommunityImpact: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Community Tribute</h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
              We are proud to give back to the community in meaningful ways.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border bg-white p-6 shadow-md">
              <h3 className="text-xl font-semibold">Indoor Baseball Arena</h3>
              <p className="text-gray-600">
                Built for our local high school to support youth athletics and provide a space for growth.
              </p>
            </div>
            <div className="rounded-lg border bg-white p-6 shadow-md">
              <h3 className="text-xl font-semibold">Little Lambs</h3>
              <p className="text-gray-600">
                Supporting children and families in need through direct donations and care packages.
              </p>
            </div>
            <div className="rounded-lg border bg-white p-6 shadow-md">
              <h3 className="text-xl font-semibold">Wrapped Tribute Trucks</h3>
              <p className="text-gray-600">
                Honoring causes close to our hearts with custom EMS, Veterans, and Breast Cancer awareness wraps.
              </p>
            </div>
            <div className="rounded-lg border bg-white p-6 shadow-md">
              <h3 className="text-xl font-semibold">Wreaths Across America</h3>
              <p className="text-gray-600">
                Participating in national remembrance events to honor our fallen veterans every year.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CommunityImpact;

