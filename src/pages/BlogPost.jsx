import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Icon from '../components/AppIcon';
import Image from '../components/AppImage';
import BlogCard from '../components/blog/BlogCard';
import { getPostBySlug, getRelatedPosts, blogCategories, generateBlogPostSchema } from '../data/blogData';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = getPostBySlug(slug);
  const relatedPosts = post ? getRelatedPosts(post.id, 3) : [];

  useEffect(() => {
    if (!post) {
      navigate('/blog', { replace: true });
    }
    // Scroll to top when post loads
    window.scrollTo(0, 0);
  }, [post, navigate]);

  if (!post) return null;

  const category = blogCategories.find(cat => cat.id === post.category);

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{post.metaTitle}</title>
        <meta name="description" content={post.metaDescription} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.featuredImage} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={post.publishedAt} />
        <meta property="article:modified_time" content={post.updatedAt} />
        <meta property="article:section" content={category?.name} />
        {post.tags.map(tag => (
          <meta property="article:tag" content={tag} key={tag} />
        ))}
        <script type="application/ld+json">
          {JSON.stringify(generateBlogPostSchema(post))}
        </script>
      </Helmet>

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-primary">Home</Link>
            <Icon name="ChevronRight" size={14} />
            <Link to="/blog" className="hover:text-primary">Blog</Link>
            <Icon name="ChevronRight" size={14} />
            <span className="text-gray-900 truncate">{post.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-64 md:h-96 lg:h-[500px]">
        <Image
          src={post.featuredImage}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
          <div className="max-w-4xl mx-auto">
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${category?.color || 'bg-gray-100'}`}>
              {category?.name}
            </span>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Author and Meta */}
        <div className="flex flex-wrap items-center gap-6 pb-8 mb-8 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <div className="font-semibold text-gray-900">{post.author.name}</div>
              <div className="text-sm text-gray-500">{post.author.role}</div>
            </div>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <Icon name="Calendar" size={16} />
              {new Date(post.publishedAt).toLocaleDateString('en-KE', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
            <span className="flex items-center gap-1">
              <Icon name="Clock" size={16} />
              {post.readTime} min read
            </span>
          </div>
        </div>

        {/* Content */}
        <div 
          className="animate-slide-down prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-strong:text-gray-900 prose-a:text-primary hover:prose-a:text-primary-600 prose-li:text-gray-600"
          dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
        />

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <span 
                key={tag}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Author Bio */}
        <div className="mt-12 bg-gray-50 rounded-2xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-6">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              className="w-20 h-20 rounded-full object-cover mx-auto md:mx-0"
            />
            <div className="text-center md:text-left">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                Written by {post.author.name}
              </h3>
              <p className="text-primary font-medium text-sm mb-2">{post.author.role}</p>
              <p className="text-gray-600 text-sm">{post.author.bio}</p>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map(relatedPost => (
                <BlogCard key={relatedPost.id} post={relatedPost} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-primary-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-primary-100 mb-8 text-lg">
            Get expert help with your printing, branding, or campaign materials.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get a Quote
              <Icon name="ArrowRight" size={18} />
            </Link>
            <Link
              to="/corporate-services"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

// Simple markdown-like formatting (in production, use a proper markdown parser)
function formatContent(content) {
  return content
    .replace(/## (.*)/g, '<h2>$1</h2>')
    .replace(/### (.*)/g, '<h3>$1</h3>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
    .replace(/- (.*)/g, '<li>$1</li>')
    .replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>')
    .replace(/\| (.*) \| (.*) \|/g, '<tr><td>$1</td><td>$2</td></tr>')
    .replace(/(<tr>.*<\/tr>\n?)+/g, '<table class="min-w-full border-collapse border border-gray-300 my-6"><tbody>$&</tbody></table>');
}

export default BlogPost;