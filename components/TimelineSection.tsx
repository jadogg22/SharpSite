import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import TruckCab from "@/components/TruckCab";

const timelineEvents = [
  { year: "1970", text: "John T Sharp creates Sharp Transportation of Wellsville, UT" },
  { year: "1980", text: "Sharp Transportation operates 10 tractors and trailers" },
  { year: "1986", text: "Zan Sharp begins driving for his father’s company" },
  { year: "1990", text: "Zan Sharp purchases Sharp Transportation and incorporates." },
  { year: "2000", text: "Sharp Trans. Inc. adds several DBAs to accommodate clients’ needs: Sharp Refrigerated, Dry Storage, & Powder Coating" },
  { year: "2006", text: "Sharp Transportation expands to operating 70 tractors and 115 trailers" },
  { year: "2015", text: "Sharp Transportation creates Truman Truck Lines to establish operations in the Northwest" },
  { year: "2016", text: "Sharp expands Wellsville Headquarters to accommodate operating 90 tractors and over 230 trailers" },
  { year: "2018", text: "Sharp expands further operating in all 48 states with 150 tractors and over 300 trailers" },
  { year: "2020", text: "Sharp Transportation celebrates 30 years in business!" },
];


export default function TimelineSection() {
  return (

    <section className="container py-16">
      <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>

      <div className="relative overflow-x-auto">
        {/* Road */}
        <div className="absolute top-1/2 left-0 w-full h-2 bg-gray-300 z-0" />

        {/* Timeline Scroll Area */}
        <div className="flex gap-12 px-6 py-14 min-w-max scroll-smooth snap-x snap-mandatory overflow-x-auto">
          {timelineEvents.map((event, i) => (
            <div
              key={i}
              className="relative shrink-0 snap-center flex flex-col items-center group"
            >
              {/* Truck cab */}
              <div className="transition-transform group-hover:-translate-y-1 group-hover:rotate-1 mb-3">
                <TruckCab />
              </div>

              {/* Trailer */}
              <Card className="w-[260px] bg-white border-2 border-primary rounded-lg shadow-xl relative">
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold mb-2">{event.year}</h3>
                  <p className="text-sm">{event.text}</p>
                </CardContent>

                {/* Wheels */}
                <div className="absolute bottom-[-10px] left-4 w-4 h-4 rounded-full bg-black" />
                <div className="absolute bottom-[-10px] right-4 w-4 h-4 rounded-full bg-black" />
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

