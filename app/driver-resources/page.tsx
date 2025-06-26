import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Phone, Mail, Download, ExternalLink } from "lucide-react";

const resources = {
  benefits: [
    {
      title: "Employee Benefits Information",
      description: "Access details about your comprehensive benefits package.",
      link: "https://1082df07-481d-4b58-aff8-b072757b221d.usrfiles.com/ugd/1082df_a057f4c476254d6384c6359545ee9c01.pdf",
      linkText: "View Benefits",
      isExternal: true,
      isPdf: true,
      image: "/images/DriverHelp/EmployeeBenefits.png"
    },
    {
      title: "Medicare Creditable Coverage",
      description: "Information regarding your Medicare coverage.",
      link: "/images/DriverHelp/Medicare made Easy.avif",
      linkText: "Read Notice",
      isExternal: true,
      isPdf: false,
      image: "/images/DriverHelp/Medicare made Easy.avif",
    },
     {
      title: "Teladoc Services",
      description: "24/7 access to board-certified doctors for non-emergency medical issues.",
      link: "/images/DriverHelp/Teledoc.avif",
      linkText: "Visit Teladoc",
      isExternal: true,
      image: "/images/DriverHelp/Teledoc.avif",
    },
    {
      title: "Benefits Website",
      description: "Access your comprehensive benefits information online.",
      link: "https://www.cbmicrosite.com/sharptransportation",
      linkText: "Visit Website",
      isExternal: true,
      image: "/images/drivers/generic_driver.avif",
    },
  ],
  insurance: {
    title: "Dental & Vision Insurance",
    provider: "MetLife",
    groupName: "Sharp Transportation Inc",
    groupNumber: "5385041",
    name: "Employee Name or dependants name",
    employeeID: "SSN", 
    description: "Should you require any assistance or encounter any challenges while trying to access these cards, please feel free to reach out to us for support. Call us at 435-227-2176, or send an email to   ken@sharptrucking.com",
  },
  tools: [
    {
      title: "McLeod Anywhere App",
      description: "Submit your trip paperwork, view settlement information, and more with the McLeod Anywhere app.",
      link: "https://e3c89b9a-3622-4211-8a81-46285a6f62df.filesusr.com/ugd/3833fe_03893cb1806f4be08bcc80282d756845.pdf",
      linkText: "Download App",
      isExternal: true,
      image: "/images/DriverHelp/Mcleod.avif",
    }
  ],
  support: {
    title: "Need Assistance?",
    description: "For any questions or support, please don't hesitate to reach out.",
    phone: "435-245-6053",
    email: "info@sharptruck.com"
  }
};

import { MyHeader } from '@/components/MyHeader';
import { MyFooter } from '@/components/MyFooter';

const DriverResourcesPage = () => (
  <div className="flex min-h-screen flex-col">
    <MyHeader />
    <main className="flex-1">
      <div className="container mx-auto px-4 py-12 bg-white">
        <h1 className="text-4xl font-bold text-center mb-8 text-black">Driver Resources</h1>
        <p className="text-lg text-center text-gray-700 mb-12">
          All the information you need in one place. From benefits to tools, we've got you covered.
        </p>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Benefits */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="border-black border-2">
              <CardHeader>
                <CardTitle className="text-black">Benefits & Wellness</CardTitle>
                <CardDescription>Access your health and wellness resources.</CardDescription>
              </CardHeader>
              <CardContent className="grid sm:grid-cols-2 gap-6">
                {resources.benefits.map((item, index) => (
                  <Card key={index} className="flex flex-col bg-gray-100">
                    {item.image && <Image src={item.image} alt={item.title} width={400} height={200} className="w-full h-auto max-h-[200px] object-contain p-4" />} 
                    <CardHeader>
                      <CardTitle className="text-lg text-black">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-gray-700">{item.description}</p>
                    </CardContent>
                    <CardFooter>
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="w-full">
                        <Button className="w-full bg-black hover:bg-gray-800 text-white">
                          {item.isPdf ? <Download className="mr-2 h-4 w-4" /> : <ExternalLink className="mr-2 h-4 w-4" />}
                          {item.linkText}
                        </Button>
                      </a>
                    </CardFooter>
                  </Card>
                ))}
              </CardContent>
            </Card>

            <Card className="border-black border-2">
              <CardHeader>
                <CardTitle className="text-black">Essential Tools</CardTitle>
                 <CardDescription>Apps and software to make your job easier.</CardDescription>
              </CardHeader>
              <CardContent className="grid sm:grid-cols-2 gap-6">
                {resources.tools.map((item, index) => (
                  <Card key={index} className="flex flex-col bg-gray-100">
                    {item.image && <Image src={item.image} alt={item.title} width={400} height={200} className="w-full h-auto max-h-[200px] object-contain p-4" />} 
                    <CardHeader>
                      <CardTitle className="text-lg text-black">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-gray-700">{item.description}</p>
                    </CardContent>
                    <CardFooter>
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="w-full">
                        <Button className="w-full bg-black hover:bg-gray-800 text-white">
                          <Download className="mr-2 h-4 w-4" />
                          {item.linkText}
                        </Button>
                      </a>
                    </CardFooter>
                  </Card>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Insurance & Support */}
          <div className="space-y-8">
            <Card className="border-black border-2">
              <CardHeader>
                <CardTitle className="text-black">{resources.insurance.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">{resources.insurance.description}</p>
                <div>
                  <p className="font-semibold text-black">Provider: {resources.insurance.provider}</p>
                  <p className="text-gray-800">Group Name: {resources.insurance.groupName}</p>
                  <p className="text-gray-800">Group Number: {resources.insurance.groupNumber}</p>
                  <p className="text-gray-800">Name: {resources.insurance.name}</p>
                  <p className="text-gray-800">Employee ID: {resources.insurance.employeeID}</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-black border-2">
              <CardHeader>
                <CardTitle className="text-black">{resources.support.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                 <p className="text-gray-700">{resources.support.description}</p>
                <Button asChild className="w-full bg-black hover:bg-gray-800 text-white">
                  <a href={`tel:${resources.support.phone}`}>
                    <Phone className="mr-2 h-4 w-4" /> Call Support
                  </a>
                </Button>
                <Button asChild variant="secondary" className="w-full bg-gray-200 hover:bg-gray-300 text-black">
                  <a href={`mailto:${resources.support.email}`}>
                    <Mail className="mr-2 h-4 w-4" /> Email Support
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
         <div className="text-center mt-12">
            <p className="text-gray-600">Please note: The links for benefits and tools are currently placeholders. They need to be updated with the correct URLs.</p>
          </div>
      </div>
    </main>
    <MyFooter />
  </div>
);


export default DriverResourcesPage;
