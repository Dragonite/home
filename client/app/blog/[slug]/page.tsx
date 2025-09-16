import xss from 'xss';
import Image from 'next/image';
import { fetchBlogPost } from '@/lib/api/blog';
import { notFound } from 'next/navigation';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Metadata } from "next";

interface BlogPostProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const { slug } = await params;
  const blogResponse = await fetchBlogPost(slug);
  
  if (!blogResponse) {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }
  
  const blogPost = blogResponse.data.post;
  const { title, short_description } = blogPost;
  
  return {
    title: `${title} | Haolin Wu - Blog`,
    description: short_description,
    // Optional: Add more metadata
    openGraph: {
      title: title,
      description: short_description!,
      images: blogPost.image ? [blogPost.image] : [],
    },
  };
}

const generateTailwindRichTextStyles = (): string => {
  const base = "flex flex-col";
  const paragraphs = "[&_p]:mb-4";
  const anchors = "[&_a]:text-blue-600 [&_a]:underline [&_a]:hover:text-blue-800";
  const headings = "[&_h2]:text-2xl [&_h2]:font-bold [&_h2]:my-4 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:my-4 [&_h4]:text-lg [&_h4]:font-semibold [&_h4]:my-4 [&_h5]:text-lg [&_h5]:font-semibold [&_h5]:my-4 [&_h6]:text-lg [&_h6]:font-semibold [&_h6]:my-4";
  const images = "[&_img]:mx-auto [&_img]:rounded-lg";
  const lists = "[&_ul]:list-disc [&_ul]:mb-4 [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:mb-4 [&_ol]:pl-6 [&_li]:mb-2";

  return `${base} ${paragraphs} ${anchors} ${headings} ${images} ${lists}`;
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
          <div className={generateTailwindRichTextStyles()} dangerouslySetInnerHTML={{__html: xss(content)}} />
          <Separator className="mt-8" />
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