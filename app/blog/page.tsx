import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const blogPosts = [
  {
    title: "The Future of Logistics: Trends to Watch in 2025",
    description: "From AI-powered route optimization to sustainable practices, the logistics industry is evolving rapidly. Here are the key trends we're keeping an eye on.",
    date: "June 20, 2025",
    author: "Jane Doe, Logistics Expert",
    image: "/public/images/trucks/hero-truck.webp",
    link: "/blog/future-of-logistics"
  },
  {
    title: "A Day in the Life of a Sharp Transportation Driver",
    description: "Ever wondered what it's like to be behind the wheel of a big rig? We followed one of our drivers for a day to give you a glimpse into their journey.",
    date: "June 15, 2025",
    author: "John Smith, Staff Writer",
    image: "/public/images/drivers/generic_driver.avif",
    link: "/blog/day-in-the-life"
  },
  {
    title: "Celebrating 35 Years of Service",
    description: "Sharp Transportation is proud to celebrate 35 years of delivering excellence. A look back at our history and our commitment to the future.",
    date: "June 1, 2025",
    author: "Company Announcement",
    image: "/public/images/fleet/fleet-lineup.webp",
    link: "/blog/35-years-of-service"
  }
];

const BlogPage = () => (
  <div className="container mx-auto px-4 py-12">
    <h1 className="text-4xl font-bold text-center mb-8">Our Blog</h1>
    <p className="text-lg text-center text-gray-600 mb-12">
      Stay up-to-date with the latest news, insights, and stories from Sharp Transportation.
    </p>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogPosts.map((post, index) => (
        <Card key={index} className="overflow-hidden">
          <CardHeader className="p-0">
            <Image src={post.image} alt={post.title} width={400} height={250} className="w-full h-auto object-cover" />
          </CardHeader>
          <CardContent className="p-6">
            <CardTitle className="mb-2">{post.title}</CardTitle>
            <CardDescription className="text-sm text-gray-500 mb-4">{post.date} - {post.author}</CardDescription>
            <p className="text-gray-700">{post.description}</p>
          </CardContent>
          <CardFooter className="p-6 bg-gray-50">
            <Link href={post.link} passHref>
              <Button variant="secondary">Read More</Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  </div>
);

export default BlogPage;