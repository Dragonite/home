import { BlogPost } from "@/lib/schemas/blog-post";
import Link from "next/link";

interface BlogPostPreviewProps {
  blogPost: BlogPost;
}

const BlogPostPreview = ({ blogPost }: BlogPostPreviewProps) => {
  const { id, title, image, short_description } = blogPost;
  return (
    <div className="px-8 sm:px-16 lg:px-24 w-full mb-8 max-w-6xl">
      <div className="text-center">
        <Link href={`/blogs/${id}`}>
          <article className="w-full overflow-hidden rounded-xl h-72 sm:h-72 md:h-64 shadow-xl transition transform motion-reduce:transition-none motion-reduce:hover:transform-none relative group">
            {/* Full Width Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
              style={{ backgroundImage: `url(${image})` }}
            />
            
            {/* Gradient Overlay - fades to white by halfway point */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-bg/80 to-bg" />
          </article>
        </Link>
      </div>
    </div>
  );
};

export default BlogPostPreview;