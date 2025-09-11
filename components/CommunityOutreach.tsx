
'use client';
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { CountUp } from "@/components/CountUp";

const impactNumbers = [
    { number: 10, suffix: "+", text: "Years of Partnerships" },
    { number: 500000, suffix: "+", text: "Dollars Donated" },
    { number: 3, suffix: "", text: "Wrapped Trucks" },
    { number: 1000, suffix: "+", text: "Lives Impacted" },
];

const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function CommunityOutreach() {
    return (
        <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="py-20 bg-cover bg-center" style={{backgroundImage: "url('/background.svg')"}}
        >
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            Driven by Purpose. Powered by Community.
                        </h2>
                        <p className="text-lg text-gray-300 mt-4">
                            We believe in giving back to the communities that have supported us. Our commitment goes beyond logistics; it's about making a real impact where it matters most.
                        </p>
                        <div className="grid grid-cols-2 gap-8 text-center my-8">
                            {impactNumbers.map((item, i) => (
                                <motion.div key={i} variants={itemVariants}>
                                    <p className="text-4xl md:text-5xl font-extrabold text-white">
                                        <CountUp to={item.number} suffix={item.suffix} />
                                    </p>
                                    <p className="text-md text-gray-400 mt-2">{item.text}</p>
                                </motion.div>
                            ))}
                        </div>
                        <Link href="/community">
                            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                                Explore Our Community Impact
                                <ArrowRight className="ml-2" />
                            </Button>
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <motion.div variants={itemVariants} className="col-span-2">
                            <Image src="/images/misc/kids_cropped.JPG" alt="Community event" width={600} height={400} className="rounded-lg shadow-lg object-cover w-full h-full" />
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <Image src="/images/misc/IMG_1820.JPG" alt="Community event 2" width={300} height={200} className="rounded-lg shadow-lg object-cover w-full h-full" />
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <Image src="/images/misc/IMG_1821.JPG" alt="Community event 3" width={300} height={200} className="rounded-lg shadow-lg object-cover w-full h-full" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
