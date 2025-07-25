import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ImpactGallery({ images }: { images: { src: string; alt: string; }[] }) {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="py-20"
    >
      <div className="container">
        <h2 className="text-4xl font-bold mb-10 text-center text-gray-800">Our Impact in Action</h2>
        <Carousel className="max-w-2xl mx-auto">
          <CarouselContent>
            {images.map((img, i) => (
              <CarouselItem key={i}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={400}
                  className="w-full h-auto object-contain rounded-lg shadow-lg"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <motion.blockquote
          variants={itemVariants}
          className="mt-12 text-center text-2xl italic text-gray-700 max-w-3xl mx-auto"
        >
          “Giving back is more than a gesture — it’s part of the Sharp DNA.”
        </motion.blockquote>
      </div>
    </motion.section>
  );
}
