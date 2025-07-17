import { getPostData } from '@/lib/posts';
import { MyHeader } from '@/components/MyHeader';
import { MyFooter } from '@/components/MyFooter';

export default async function Post({ params }: { params: { slug: string } }) {
  const postData = await getPostData(params.slug);
  return (
    <>
      <MyHeader />
      <div className="container mx-auto px-4 py-12">
        <article>
          <h1 className="text-4xl font-bold mb-4">{postData.title}</h1>
          <div className="text-gray-500 mb-8">{postData.date}</div>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </div>
      <MyFooter />
    </>
  );
}