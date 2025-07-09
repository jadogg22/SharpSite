import Image from "next/image";
import { MyFooter } from "@/components/MyFooter";
import { MyHeader } from "@/components/MyHeader";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Button } from "@/components/ui/button";
import { Check, Cpu, Shield, Truck, Users, Warehouse } from "lucide-react";

const services = [
  {
    icon: <Truck className="w-8 h-8 text-white" />,
    title: "Full Truckload (FTL)",
    description:
      "Experience the efficiency and security of our Full Truckload service. We provide dedicated transportation for your large-scale shipments, ensuring a direct, non-stop journey from origin to destination. This is the ideal solution for businesses that require speed, reliability, and the full capacity of a modern trailer.",
    features: [
      "Dedicated equipment and capacity",
      "Optimized for large, high-volume shipments",
      "Reduced handling and faster transit times",
      "Real-time satellite tracking and monitoring",
    ],
    image: "/images/trucks/full-truckload.webp",
  },
  {
    icon: <Warehouse className="w-8 h-8 text-white" />,
    title: "Less Than Truckload (LTL)",
    description:
      "Our LTL services offer a flexible and cost-effective option for shipments that don’t require a full trailer. By consolidating your freight with other shipments, you pay only for the space you use, all while benefiting from our extensive network and reliable delivery schedules. It's smart logistics for savvy businesses.",
    features: [
      "Cost-effective for smaller freight volumes",
      "Access to a nationwide logistics network",
      "Regularly scheduled pickups and deliveries",
      "Full visibility with detailed tracking information",
    ],
    image: "/images/fleet/trucks1.avif",
  },
  {
    icon: <Shield className="w-8 h-8 text-white" />,
    title: "Specialized & High-Value Freight",
    description:
      "For cargo that requires special handling, we offer a suite of specialized freight services. From temperature-controlled goods to high-value electronics, our team has the expertise and equipment to manage your most sensitive shipments with the utmost care and security.",
    features: [
      "Temperature-controlled (Reefer) units",
      "High-security protocols for valuable cargo",
      "Hazmat and dangerous goods certified",
      "Flatbed and oversized load capabilities",
    ],
    image: "/images/trucks/hero2.avif",
  },
];

const advantages = [
  {
    icon: <Cpu className="w-10 h-10 text-primary" />,
    title: "Advanced Technology",
    description:
      "We leverage cutting-edge Transportation Management Systems (TMS) and real-time GPS tracking to provide full visibility and optimize every route.",
  },
  {
    icon: <Shield className="w-10 h-10 text-primary" />,
    title: "Uncompromising Safety",
    description:
      "Our safety culture is second to none. With rigorous driver training and proactive vehicle maintenance, we lead the industry in safety standards.",
  },
  {
    icon: <Users className="w-10 h-10 text-primary" />,
    title: "Dedicated Support",
    description:
      "Your business is our priority. Our logistics experts are available 24/7, providing proactive communication and solutions-oriented support.",
  },
];

export default function ServicesPageV2() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <MyHeader />

      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] w-full">
        <Image
          src="/images/trucks/hero-truck.webp"
          alt="A fleet of Sharp Transportation trucks"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <ScrollAnimation>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg">
              Engineered for Excellence
            </h1>
            <p className="mt-4 max-w-3xl text-lg md:text-xl text-gray-200 drop-shadow-md">
              Discover a full spectrum of logistics services designed to deliver reliability, efficiency, and peace of mind.
            </p>
            <Button size="lg" className="mt-8">
              Get a Custom Quote
            </Button>
          </ScrollAnimation>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="py-24">
        <div className="container">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary">Our Core Services</h2>
              <p className="mt-2 text-lg text-muted-foreground">
                The right solution for every shipment, backed by the Sharp guarantee.
              </p>
              <div className="flex justify-center mt-4">
                <span className="inline-block w-24 h-1 bg-primary/30 rounded-full" />
              </div>
            </div>
          </ScrollAnimation>

          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={service.title} className="grid md:grid-cols-2 gap-12 items-center">
                <ScrollAnimation delay={0.1}>
                  <div className={`relative h-96 rounded-xl overflow-hidden shadow-2xl ${index % 2 === 1 ? "md:order-2" : ""}`}>
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                  </div>
                </ScrollAnimation>
                <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <ScrollAnimation delay={0.2}>
                    <div className="inline-flex items-center gap-3 bg-primary text-primary-foreground py-2 px-4 rounded-full mb-4">
                      {service.icon}
                      <h3 className="text-2xl font-bold">{service.title}</h3>
                    </div>
                  </ScrollAnimation>
                  <ScrollAnimation delay={0.3}>
                    <p className="text-lg text-muted-foreground mb-6">
                      {service.description}
                    </p>
                  </ScrollAnimation>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <ScrollAnimation key={feature} delay={0.4 + featureIndex * 0.1}>
                        <li className="flex items-center gap-3">
                          <Check className="w-6 h-6 text-green-500 flex-shrink-0" />
                          <span className="text-md font-medium text-gray-700">{feature}</span>
                        </li>
                      </ScrollAnimation>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Sharp Advantage Section */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary">The Sharp Advantage</h2>
              <p className="mt-2 text-lg text-muted-foreground">
                Discover the difference that dedication and technology can make.
              </p>
              <div className="flex justify-center mt-4">
                <span className="inline-block w-24 h-1 bg-primary/30 rounded-full" />
              </div>
            </div>
          </ScrollAnimation>
          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div key={advantage.title} className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
                <ScrollAnimation delay={index * 0.1}>
                  <div className="flex justify-center mb-6">{advantage.icon}</div>
                </ScrollAnimation>
                <ScrollAnimation delay={index * 0.2}>
                  <h3 className="text-2xl font-bold text-center text-gray-800 mb-4">{advantage.title}</h3>
                </ScrollAnimation>
                <ScrollAnimation delay={index * 0.3}>
                  <p className="text-center text-muted-foreground">{advantage.description}</p>
                </ScrollAnimation>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-24 bg-fixed" style={{ backgroundImage: "url('/images/fleet/fleet-lineup.webp')" }}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="container relative text-white">
          <div className="grid md:grid-cols-4 gap-8">
            {[{
              stat: "35+",
              label: "Years of Excellence"
            }, {
              stat: "500+",
              label: "Modern Fleet Vehicles"
            }, {
              stat: "99.8%",
              label: "On-Time Delivery"
            }, {
              stat: "48",
              label: "States Covered"
            }].map((item, index) => (
              <ScrollAnimation key={item.label} delay={index * 0.1} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-primary">{item.stat}</div>
                <p className="mt-2 text-lg text-gray-200">{item.label}</p>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white">
        <div className="container py-20 text-center">
          <ScrollAnimation>
            <h2 className="text-4xl font-bold">Let's Get Your Freight Moving</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg">
              Contact our logistics experts today for a personalized quote and discover how we can drive your business forward.
            </p>
            <Button size="lg" variant="secondary" className="mt-8">
              Request a Quote
            </Button>
          </ScrollAnimation>
        </div>
      </section>

      <MyFooter />
    </div>
  );
}
