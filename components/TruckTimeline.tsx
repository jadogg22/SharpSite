'use client'
import { useEffect, useRef, useState } from "react";
import Image from 'next/image';

const timelineData = [
  { year: "1970", text: "John T Sharp creates Sharp Transportation of Wellsville, UT." },
  { year: "1980", text: "Sharp Transportation operates 10 tractors and trailers." },
  { year: "1986", text: "Zan Sharp begins driving for his father’s company." },
  { year: "1990", text: "Zan Sharp purchases Sharp Transportation and incorporates." },
  { year: "2000", text: "Sharp Trans. Inc. adds several DBAs to accommodate clients’ needs: Sharp Refrigerated, Dry Storage, & Powder Coating." },
  { year: "2006", text: "Sharp Transportation expands to operating 70 tractors and 115 trailers." },
  { year: "2015", text: "Sharp Transportation creates Truman Truck Lines to establish operations in the Northwest." },
  { year: "2016", text: "Sharp expands Wellsville Headquarters to accommodate operating 90 tractors and over 230 trailers." },
  { year: "2018", text: "Sharp expands further operating in all 48 states with 150 tractors and over 300 trailers." },
  { year: "2020", text: "Sharp Transportation celebrates 30 years in business!" },
];


export default function TruckTimeline() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);
  const timelineRef = useRef(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  
  // I'll have to test this height but for my dev env it looks really good
  const componentHeight = 350;


  useEffect(() => {
    // Initial setup
    setCurrentIndex(0);
  }, []);
  

useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseEnter = () => {
      document.body.style.overflow = 'hidden';
    };
    const handleMouseLeave = () => {
      document.body.style.overflow = 'auto';
    };
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      document.body.style.overflow = 'auto';
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const handlePrev = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => Math.min(timelineData.length - 1, prev + 1));
  };

  const handleWheel = (e: any) => {
    e.preventDefault();
    if (isInteracting) return;
    const SCROLL_THRESHOLD = 10;
    if (e.deltaY > SCROLL_THRESHOLD) {
      handleNext();
      setIsInteracting(true);
      setTimeout(() => setIsInteracting(false), 300);
    } else if (e.deltaY < -SCROLL_THRESHOLD) {
      handlePrev();
      setIsInteracting(true);
      setTimeout(() => setIsInteracting(false), 300);
    }
  };  
  
   const getTruckPosition = (index: number) => {
    const diff = index - currentIndex;
    return 50 + (diff * 40);
  };

  return (
    <div className="flex justify-center my-8">
      <div 
        ref={containerRef}
        className="relative w-4/5 max-w-4xl rounded-lg overflow-hidden shadow-lg"
        style={{ height: `${componentHeight}px` }}
      >
        {/* Timeline component */}
        <div 
          ref={timelineRef}
          className="relative w-full h-full"
          onWheel={handleWheel}
        >
          {/* Sky Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-300 to-blue-500 w-full h-full" />
          {/* Road */}
          <div className="absolute bottom-0 w-full h-32 bg-gray-700" />
          {/* Road divider */}
          <div className="absolute bottom-28 w-full h-2 bg-yellow-400" />
          {/* Grass */}
          <div className="absolute bottom-0 w-full h-12 bg-green-600" />
          
          {/* Timeline Title */}
          <div className="absolute top-4 left-0 right-0 text-center text-2xl font-bold text-white">
            Trucking Timeline
          </div>
          
          {/* Current year indicator */}
          <div className="absolute top-4 right-6 px-3 py-1 bg-black text-white text-xl font-bold rounded-md opacity-80">
            {timelineData[currentIndex]?.year}
          </div>
          
          {/* Navigation UI */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center space-x-6 z-50">
            <button 
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`px-4 py-2 rounded-full bg-white text-gray-800 font-bold ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200'}`}
            >
              ← Previous
            </button>
            <div className="text-white font-bold">
              {currentIndex + 1} / {timelineData.length}
            </div>
            <button 
              onClick={handleNext}
              disabled={currentIndex === timelineData.length - 1}
              className={`px-4 py-2 rounded-full bg-white text-gray-800 font-bold ${currentIndex === timelineData.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200'}`}
            >
              Next →
            </button>
          </div>
          
          {/* Mouse instruction */}
          <div className="absolute top-16 left-0 right-0 text-center text-white text-sm opacity-70">
            Use mouse wheel or buttons to navigate the timeline
          </div>
          
          {/* Trucks with Timeline Data */}
          {timelineData.map((item, index) => {
            // Calculate position based on current index
            const position = getTruckPosition(index);
            const isActive = index === currentIndex;
            const diff = index - currentIndex;

            // Only render the current truck and its immediate neighbors
            if (Math.abs(diff) > 1) {
              return null;
            }

            let currentOpacity = 1; // Always fully opaque for visible trucks
            let currentScale = 1;   // Always full scale for visible trucks
            
            return (
              <div 
                key={item.year}
                className="absolute transition-all duration-500"
                style={{
                  bottom: '32px',
                  left: `${position}%`,
                  transform: `translateX(-50%) scale(${currentScale})`,
                  transformOrigin: 'bottom',
                  opacity: currentOpacity,
                  zIndex: isActive ? 10 : 5
                }}
              >
                <div className="relative">
                  <Image
                    src="/images/trucks/truckandtrailer.jpeg"
                    alt="Sharp Transportation Truck"
                    width={500}
                    height={150}
                    className="rounded-lg shadow-md"
                  />
                  {/* Timeline text positioned over the trailer */}
                  <div className="absolute top-3 bottom-3 left-[190px] right-3 p-3 text-sm leading-tight text-gray-800 bg-white/80 rounded-md">
                    <p className="font-bold text-primary">{item.year}</p>
                    <p className="mt-1">{item.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
