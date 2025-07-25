import React from "react";
import { HeartHandshake, Baby, Truck, Award } from "lucide-react";

export const impactAreas = [
  {
    icon: <HeartHandshake className="w-10 h-10 text-blue-500" />,
    title: "Youth & Sports",
    description: "We built an indoor baseball training facility for our local high school — because strong teams build strong communities.",
    image: "/images/misc/IMG_1820.JPG",
  },
  {
    icon: <Baby className="w-10 h-10 text-pink-500" />,
    title: "Little Lambs",
    description: "We support Little Lambs to provide essentials for families and children in need. Compassion is part of our culture.",
    image: "/images/drivers/driver_with_fam.png", // Replaced placeholder
  },
  {
    icon: <Truck className="w-10 h-10 text-red-500" />,
    title: "Wrapped Trucks With Meaning",
    description: "Our custom trucks honor the causes closest to our hearts — from veterans and EMS to breast cancer awareness.",
    image: "/images/trucks/hero-truck.webp",
  },
  {
    icon: <Award className="w-10 h-10 text-green-500" />,
    title: "Wreaths Across America",
    description: "Every December, we haul remembrance wreaths to honor our fallen heroes and their families.",
    image: "/images/drivers/ZanSharp.JPG", // Replaced placeholder
  },
];

export const latestNews = [
  {
    title: "Annual Wreaths Across America Convoy a Success",
    date: "December 18, 2024",
    excerpt: "For the fifth year running, our drivers proudly delivered thousands of wreaths to honor our nation's heroes...",
    image: "/images/drivers/ZanSharp.JPG",
    link: "/blog/wreaths-across-america-2024",
  },
  {
    title: "Celebrating the Grand Opening of the Training Facility",
    date: "October 05, 2024",
    excerpt: "This week we cut the ribbon on the new indoor baseball facility, a project years in the making...",
    image: "/images/trucks/1st area 1.22.jpg",
    link: "/blog/facility-grand-opening",
  },
  {
    title: "Supporting Little Lambs at the Annual Gala",
    date: "September 15, 2024",
    excerpt: "We were honored to be a gold sponsor at the Little Lambs Foundation annual charity gala, supporting...",
    image: "/images/drivers/driver_with_fam.png",
    link: "/blog/little-lambs-gala-2024",
  },
];

export const wrappedTrucks = [
  {
    name: "EMS/First Responders Truck",
    cause: "Honoring the daily sacrifices of our local heroes.",
    image: "/images/trucks/hero-truck.webp",
  },
  {
    name: "Veterans Tribute Truck",
    cause: "A salute to the brave men and women of the armed forces.",
    image: "/images/trucks/truckandtrailer.jpeg",
  },
  {
    name: "Breast Cancer Awareness Truck",
    cause: "Driving hope and awareness in the fight against breast cancer.",
    image: "/images/trucks/truckStop.avif",
  },
];

export const impactNumbers = [
  { number: 500, text: "Wreaths Delivered Annually", suffix: "+" },
  { number: 1, text: "State-of-the-Art Training Facility Built" },
  { number: 3, text: "Cause-Driven Truck Wraps on the Road" },
  { number: 1000, text: "Of Children Supported via Little Lambs", suffix: "s" },
];

export const galleryImages = [
  { src: "/images/trucks/1st area 1.14.jpg", alt: "Indoor baseball facility" },
  { src: "/images/trucks/hero-truck.webp", alt: "EMS wrapped truck" },
  { src: "/images/trucks/1st area 1.18.jpg", alt: "Community event" },
];