import { getPostData } from '@/lib/posts';
import { MyHeader } from '@/components/MyHeader';
import { MyFooter } from '@/components/MyFooter';
import Image from 'next/image';

export default async function Post({ params }: { params: { slug: string } }) {
  const postData = await getPostData(params.slug);
  return (
    <>
      <MyHeader />
      <div className="container mx-auto px-4 py-12">
        <article>
          <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
            <Image
              src={postData.image}
              alt={postData.title}
              fill
              className="object-cover object-center"
              priority
            />
          </div>
          <h1 className="text-4xl font-bold mb-4">{postData.title}</h1>
          <div className="text-gray-500 mb-8">{postData.date}</div>
          <div className="prose lg:prose-lg xl:prose-xl max-w-none">
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          </div>
        </article>
      </div>
      <MyFooter />
    </>
  );
}