import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { getSortedPostsData } from "@/lib/posts";
import { MyHeader } from "@/components/MyHeader";
import { MyFooter } from "@/components/MyFooter";

const BlogPage = () => {
  const allPostsData = getSortedPostsData();

  return (
    <>
      <MyHeader />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Our Blog</h1>
        <p className="text-lg text-center text-gray-600 mb-12">
          Stay up-to-date with the latest news, insights, and stories from Sharp Transportation.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allPostsData.map(({ id, date, title, image }) => (
            <Card key={id} className="overflow-hidden">
              <CardHeader className="p-0">
                <Image src={image} alt={title} width={400} height={250} className="w-full h-auto object-cover" />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="mb-2">{title}</CardTitle>
                <CardDescription className="text-sm text-gray-500 mb-4">{date}</CardDescription>
              </CardContent>
              <CardFooter className="p-6 bg-gray-50">
                <Link href={`/blog/${id}`} passHref>
                  <Button variant="secondary">Read More</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <MyFooter />
    </>
  );
};

export default BlogPage;