import xss from 'xss';
import { fetchBlogPost } from '@/lib/api/blog';
import { notFound } from 'next/navigation';

interface BlogPostProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPost({ params }: BlogPostProps) {
  const { slug } = await params;
  const blogResponse = await fetchBlogPost(slug);
  if (!blogResponse) return notFound();
  const blogPost = blogResponse.data.post;
  const { content } = blogPost;
  return (
    <div>
      <h1>Blog Post {slug}</h1>
      <div dangerouslySetInnerHTML={{__html: xss(content)}} />
    </div>
  );
}