import { useNavigate } from 'react-router-dom';
import Icon from '../AppIcon';

const RelatedBlogPosts = ({ posts }) => {
  const navigate = useNavigate();

  if (!posts || posts.length === 0) return null;

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Icon name="BookOpen" size={20} className="text-primary" />
          </div>
          <div>
            <h2 className="text-2xl font-heading font-bold text-gray-900">Related Guides & Tips</h2>
            <p className="text-sm text-gray-500">Expert advice to help you plan your project</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200 cursor-pointer group"
              onClick={() => navigate(`/blog/${post.slug}`)}
            >
              {post.image && (
                <div className="h-40 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              )}
              <div className="p-5">
                {post.category && (
                  <span className="inline-block text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full mb-3">
                    {post.category}
                  </span>
                )}
                <h3 className="font-semibold text-gray-900 mb-2 leading-snug group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                {post.excerpt && (
                  <p className="text-sm text-gray-500 line-clamp-2">{post.excerpt}</p>
                )}
                <div className="flex items-center gap-1 mt-4 text-primary text-sm font-medium">
                  Read article <Icon name="ArrowRight" size={14} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedBlogPosts;
