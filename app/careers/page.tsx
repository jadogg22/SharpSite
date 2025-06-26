import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MapPin, Briefcase } from "lucide-react";

const jobOpenings = [
  {
    title: "Long-Haul Truck Driver",
    location: "Wellsville, UT",
    type: "Full-time",
    description: "Seeking experienced and reliable long-haul truck drivers to join our growing team. Must have a valid CDL and a clean driving record.",
    link: "/employment"
  },
  {
    title: "Diesel Mechanic",
    location: "Wellsville, UT",
    type: "Full-time",
    description: "We are looking for a skilled diesel mechanic to maintain and repair our fleet of trucks. Experience with modern diesel engines is required.",
    link: "/employment"
  },
  {
    title: "Logistics Coordinator",
    location: "Wellsville, UT",
    type: "Full-time",
    description: "Join our logistics team to help coordinate and manage the movement of freight. Strong organizational and communication skills are a must.",
    link: "/employment"
  }
];

const CareersPage = () => (
  <div className="container mx-auto px-4 py-12">
    <h1 className="text-4xl font-bold text-center mb-8">Join Our Team</h1>
    <p className="text-lg text-center text-gray-600 mb-12">
      At Sharp Transportation, we're more than just a company, we're a family. We are always looking for talented and dedicated individuals to join us. 
    </p>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {jobOpenings.map((job, index) => (
        <Card key={index} className="flex flex-col">
          <CardHeader>
            <CardTitle>{job.title}</CardTitle>
            <CardDescription className="flex items-center space-x-2 pt-2">
              <Briefcase className="h-4 w-4 text-gray-500" />
              <span>{job.type}</span>
              <MapPin className="h-4 w-4 text-gray-500" />
              <span>{job.location}</span>
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-grow">
            <p className="text-gray-700">{job.description}</p>
          </CardContent>
          <CardFooter>
            <Link href={job.link} passHref>
              <Button>Apply Now</Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  </div>
);

export default CareersPage;