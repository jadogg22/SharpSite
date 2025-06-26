import Image from "next/image"
import Link from "next/link"
import { Phone, MapPin, Truck, FileText, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MyHeader } from "@/components/MyHeader"
import { MyFooter } from "@/components/MyFooter"

export default function LogisticsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <MyHeader />

      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-[300px] md:h-[400px] w-full">
          <Image
            src="/images/trucks/hero-truck.webp"
            alt="Sharp Transportation Logistics"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center">LOGISTICS SERVICES</h1>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="container py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Comprehensive Logistics Solutions</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Sharp Transportation offers a complete range of logistics services to meet your transportation needs,
            from full truckload to specialized freight and brokerage services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <div className="mb-2 rounded-full bg-primary/10 p-2 w-10 h-10 flex items-center justify-center">
                <Truck className="h-5 w-5 text-primary" />
              </div>
              <CardTitle>Carrier Services</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Our fleet of modern trucks provides reliable transportation services across North America.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Full Truckload
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Less Than Truckload
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Specialized Freight
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="mb-2 rounded-full bg-primary/10 p-2 w-10 h-10 flex items-center justify-center">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <CardTitle>Brokerage Services</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Our logistics team connects you with trusted carriers to ensure your freight is delivered on time.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Carrier Matching
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Load Planning
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Freight Management
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="mb-2 rounded-full bg-primary/10 p-2 w-10 h-10 flex items-center justify-center">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <CardTitle>Expedited Services</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                When time is critical, our expedited services ensure your freight arrives on schedule.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Time-Critical Delivery
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Team Drivers
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Priority Handling
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Brokerage Services Section */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">BROKERAGE SERVICES</h2>
            <div className="flex items-center justify-center mb-4">
              <Phone className="h-5 w-5 text-primary mr-2" />
              <p className="text-lg font-medium">Phone: 435-245-6053</p>
            </div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              You can reach our logistics team by calling the number listed above. If you have a specific person you are
              looking for, you can find names and extension numbers listed below.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="wellsville" className="w-full">
              <TabsList className="grid grid-cols-4 mb-8">
                <TabsTrigger value="wellsville">Accounts Payable</TabsTrigger>
                <TabsTrigger value="saltlake">Wellsvile Utah</TabsTrigger>
                <TabsTrigger value="twinfalls">Ashton Idaho</TabsTrigger>
                <TabsTrigger value="seattle">Salt Lake Utah</TabsTrigger>
              </TabsList>
              <TabsContent value="wellsville">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MapPin className="h-5 w-5 text-primary mr-2" />
                      Wellsville
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      <li className="flex justify-between items-center border-b pb-2">
                        <span className="font-medium">Shayna Misner</span>
                        <span className="text-muted-foreground">Ext. 123</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="saltlake">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MapPin className="h-5 w-5 text-primary mr-2" />
                      Wellsville
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      <li className="flex justify-between items-center border-b pb-2">
                        <span className="font-medium">LeNora Smith</span>
                        <span className="text-muted-foreground">Ext. 201</span>
                      </li>
                      <li className="flex justify-between items-center border-b pb-2">
                        <span className="font-medium">Liz Swenson</span>
                        <span className="text-muted-foreground">Ext. 301</span>
                      </li>
                      <li className="flex justify-between items-center border-b pb-2">
                        <span className="font-medium">Cami Hansen</span>
                        <span className="text-muted-foreground">Ext. 305</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="twinfalls">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MapPin className="h-5 w-5 text-primary mr-2" />
                      Ashton Idaho
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      <li className="flex justify-between items-center border-b pb-2">
                        <span className="font-medium">Riki and Jerrami Marotz</span>
                        <span className="text-muted-foreground">Ext. 260</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="seattle">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MapPin className="h-5 w-5 text-primary mr-2" />
                      Salt Lake Utah
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      <li className="flex justify-between items-center border-b pb-2">
                        <span className="font-medium">Jim Burke</span>
                        <span className="text-muted-foreground">Ext. 501</span>
                      </li>
                      <li className="flex justify-between items-center border-b pb-2">
                        <span className="font-medium">Mijken Cassidy</span>
                        <span className="text-muted-foreground">Ext. 302</span>
                      </li>
                      <li className="flex justify-between items-center border-b pb-2">
                        <span className="font-medium">Joy Lynn</span>
                        <span className="text-muted-foreground">Ext. 502</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about our logistics services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What areas do you service?</AccordionTrigger>
              <AccordionContent>
                Sharp Transportation provides logistics services across all 48 contiguous states. We have offices in
                Wellsville, Salt Lake, Twin Falls, and Seattle, allowing us to efficiently serve customers throughout
                North America.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How do I request a quote for shipping?</AccordionTrigger>
              <AccordionContent>
                You can request a quote by calling our main number at 435-245-6053 and asking for the logistics
                department, or by contacting one of our logistics coordinators directly using the extension numbers
                listed above. We aim to provide quotes within 24 hours of your request.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What types of freight do you handle?</AccordionTrigger>
              <AccordionContent>
                We handle a wide variety of freight, including general commodities, refrigerated goods, oversized loads,
                and specialized equipment. Our diverse fleet and network of carriers allows us to accommodate most
                shipping needs. For specific inquiries about unique cargo, please contact our logistics team.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>How can I track my shipment?</AccordionTrigger>
              <AccordionContent>
                You can track your shipment by using our online tracking system available on our website, or by
                contacting your assigned logistics coordinator. We provide real-time updates on the status and location
                of your freight to ensure transparency throughout the shipping process.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>What makes Sharp Transportation different from other logistics providers?</AccordionTrigger>
              <AccordionContent>
                Sharp Transportation stands out with our "We'll do it" philosophy, which reflects our commitment to
                flexibility and customer service. With over 35 years of experience, a modern fleet, and a dedicated team
                of logistics professionals, we provide reliable, efficient, and personalized service that many larger
                companies cannot match.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground">
        <div className="container py-16">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Ship With Sharp?</h2>
            <p className="mt-4 max-w-2xl text-primary-foreground/90">
              Contact our logistics team today to discuss your transportation needs and discover how Sharp
              Transportation can help streamline your supply chain.
            </p>
            <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button size="lg" variant="secondary">
                Request a Quote
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              >
                Contact Logistics
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <MyFooter />
  </div> 
  )
}

