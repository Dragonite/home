import { BlogPost } from "@/lib/schemas/blog-post";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "../ui/badge";

interface BlogPostPreviewProps {
  blogPost: BlogPost;
}

const BlogPostPreview = ({ blogPost }: BlogPostPreviewProps) => {
  const { slug, title, image, short_description, created_at, categories } = blogPost;
  const formattedDate = new Date(Date.parse(created_at)).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <Link href={`/blog/${slug}`} className="text-center">
      <article className="w-full rounded-xl shadow-xl">
        <div className="h-full w-full flex flex-col sm:flex-row gap-6">
          <div className="relative h-36 sm:min-h-36 aspect-[16/9]"> {/* Adjust aspect ratio as needed */}
            <Image
              src={image!}
              alt={title}
              fill
              className="object-cover rounded-xl opacity-80" // Maintains your styling
            />
          </div>
          <div className="flex flex-col h-auto text-white text-left">
            <div className="text-sm text-muted-foreground mb-1">{formattedDate}</div>
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="text-sm">{short_description}</p>
            <div className="flex gap-2 mt-4">
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
      </article>
    </Link>
  );
};

export default BlogPostPreview;