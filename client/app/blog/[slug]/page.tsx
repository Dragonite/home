import xss from 'xss';
import Image from 'next/image';
import { fetchBlogPost } from '@/lib/api/blog';
import { notFound } from 'next/navigation';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

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
  const { content, image, title, created_at, read_duration, categories } = blogPost;
  const formattedDate = new Date(Date.parse(created_at)).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <div className="w-full flex items-center justify-center flex-col grow mb-8">
      <div className="px-8 sm:px-16 lg:px-24 w-full flex flex-col items-center mb-12">
        <div className="text-center w-full text-primary leading-tighter max-w-2xl text-4xl font-semibold tracking-tight text-balance lg:leading-[1.1] lg:font-semibold xl:tracking-tighter">
          {title}
        </div>
        <div className="text-center text-muted-foreground mt-4">
          {formattedDate} &middot; {read_duration}
        </div>
      </div>
      <div className="w-full flex items-center justify-center flex-col mb-auto">
        <div className="max-w-4xl px-8 sm:px-16 lg:px-24 w-full flex flex-col items-center">
          {image && (
            <div className="relative h-64 w-full mb-8"> {/* Adjust aspect ratio as needed */}
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover rounded-xl opacity-80" // Maintains your styling
              />
            </div>
          )}
          <div className="flex flex-col [&_p]:mb-4 [&_a]:text-blue-600" dangerouslySetInnerHTML={{__html: xss(content)}} />
          <Separator />
          <div className="flex w-full gap-2 mt-4">
            {categories.map(category => (
              <Badge 
                key={category.id} 
                variant="default"
                className="text-xs"
              >
                {category.name}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}