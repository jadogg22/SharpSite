'use client'
import { useEffect, useRef, useState } from "react";


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
  
  // Handle manual navigation
  const handlePrev = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };
  
  const handleNext = () => {
    setCurrentIndex(prev => Math.min(timelineData.length - 1, prev + 1));
  };


// on mouse hover, disable scroll
useEffect(() => {
  const container = containerRef.current;

  const preventDefaultScroll = (e: WheelEvent) => {
    e.preventDefault();
  };

  const handleMouseEnter = () => {
    document.body.style.overflow = 'hidden';
    container?.addEventListener("wheel", preventDefaultScroll, { passive: false });
  };

  const handleMouseLeave = () => {
    document.body.style.overflow = 'auto';
    container?.removeEventListener("wheel", preventDefaultScroll);
  };

  container?.addEventListener("mouseenter", handleMouseEnter);
  container?.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    document.body.style.overflow = 'auto';
    container?.removeEventListener("mouseenter", handleMouseEnter);
    container?.removeEventListener("mouseleave", handleMouseLeave);
    container?.removeEventListener("wheel", preventDefaultScroll);
  };
}, []);
  
// Handle mouse wheel navigation
const handleWheel = (e: React.WheelEvent) => {
  e.preventDefault();

  if (isInteracting) return;

    // sensitifity for scroll, 30 was too high. trying 10
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
  
  // Calculate truck positions based on current index
  const getTruckPosition = (index: number) => {
    const diff = index - currentIndex;
    
    // Current truck is centered (50%)
    if (diff === 0) return 50;
    
    // Previous trucks to the left
    if (diff < 0) return 50 + (diff * 100); // Off to the left
    
    // Future trucks to the right
    return 50 + (diff * 100); // Off to the right
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
            
            // Only render trucks that could be visible (-100% to 200% position)
            if (position < -100 || position > 200) return null;
            
            return (
              <div 
                key={item.year}
                className="absolute transition-all duration-500"
                style={{ 
                  bottom: '75px',
                  left: `${position}%`,
                  transform: 'translateX(-50%)',
                  opacity: position >= 0 && position <= 100 ? 1 : 0.3,
                  zIndex: isActive ? 10 : 5
                }}
              >
                {/* Truck Cab */}
                <div className="relative">
                  <div className="relative w-28 h-24 bg-white rounded-lg shadow-md">
                    {/* Cab details */}
                    <div className="absolute top-4 left-3 w-12 h-10 bg-blue-200 rounded" /> {/* Windshield */}
                    <div className="absolute bottom-0 w-28 h-6 bg-gray-800" /> {/* Chassis */}
                    <div className="absolute -bottom-4 left-2 w-8 h-8 bg-black rounded-full" /> {/* Front wheel */}
                    <div className="absolute -bottom-4 right-8 w-8 h-8 bg-black rounded-full" /> {/* Rear wheel */}
                    <div className="absolute -bottom-4 right-0 w-8 h-8 bg-black rounded-full" /> {/* Rear wheel */}
                  </div>
                  
                  {/* Trailer with timeline content */}
                  <div className="absolute left-28 -top-2 w-72 h-28 bg-gradient-to-r from-gray-200 to-gray-300 rounded-sm border-2 border-gray-400">
                    {/* Year badge */}
                    <div className="absolute -top-6 left-2 px-3 py-1 bg-yellow-500 text-black font-bold rounded-lg">
                      {item.year}
                    </div>
                    
                    {/* Timeline text */}
                    <div className="p-3 text-sm leading-tight text-gray-800">
                      {item.text}
                    </div>
                    
                    {/* Trailer wheels */}
                    <div className="absolute -bottom-4 right-4 flex space-x-3">
                      <div className="w-6 h-6 bg-black rounded-full" />
                      <div className="w-6 h-6 bg-black rounded-full" />
                    </div>
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
