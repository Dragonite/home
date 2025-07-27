import { fetchBlogSummary } from "@/lib/api/blog";
import BlogPostPreview from "./post-preview";

const BlogPostSummary = async () => {
  const blogPosts = await fetchBlogSummary();
  if (!blogPosts || !blogPosts.data || !blogPosts.data.posts || !blogPosts.data.posts.length) return <></>;
  const blogPostList = blogPosts.data.posts;
  return (
    <div className="px-8 sm:px-16 lg:px-24 w-full mt-12 mb-8 max-w-6xl">
      {blogPostList.map(post => <BlogPostPreview key={`blog_post__${post.id}`} blogPost={post} />)}
      {blogPostList.map(post => <BlogPostPreview key={`blog_post__${post.id}`} blogPost={post} />)}
    </div>
  )
}

export default BlogPostSummary;