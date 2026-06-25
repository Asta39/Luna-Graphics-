import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../AppIcon';
import Image from '../AppImage';

const BlogCard = ({ post, variant = 'default' }) => {
  const categoryColors = {
    'printing-tips': 'bg-blue-100 text-blue-800',
    'political-campaigns': 'bg-red-100 text-red-800',
    'corporate-branding': 'bg-purple-100 text-purple-800',
    'exhibition-events': 'bg-green-100 text-green-800',
    'large-format': 'bg-orange-100 text-orange-800',
    'industry-news': 'bg-gray-100 text-gray-800'
  };

  const categoryNames = {
    'printing-tips': 'Printing Tips',
    'political-campaigns': 'Political Campaigns',
    'corporate-branding': 'Corporate Branding',
    'exhibition-events': 'Exhibition & Events',
    'large-format': 'Large Format',
    'industry-news': 'Industry News'
  };

  if (variant === 'horizontal') {
    return (
      <article className="flex flex-col md:flex-row gap-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-100">
        <div className="md:w-2/5 h-48 md:h-auto relative overflow-hidden">
          <Image
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
          <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[post.category] || 'bg-gray-100 text-gray-800'}`}>
            {categoryNames[post.category]}
          </span>
        </div>
        
        <div className="md:w-3/5 p-6 flex flex-col justify-center">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
            <span className="flex items-center gap-1">
              <Icon name="Calendar" size={14} />
              {new Date(post.publishedAt).toLocaleDateString('en-KE', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })}
            </span>
            <span className="flex items-center gap-1">
              <Icon name="Clock" size={14} />
              {post.readTime} min read
            </span>
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 hover:text-primary transition-colors">
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
          </h3>
          
          <p className="text-gray-600 line-clamp-2 mb-4">{post.excerpt}</p>
          
          <div className="flex items-center gap-3 mt-auto">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="text-sm">
              <span className="font-medium text-gray-900">{post.author.name}</span>
              <span className="text-gray-500"> • {post.author.role}</span>
            </div>
          </div>
        </div>
      </article>
    );
  }

  // Default vertical card
  return (
    <article className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 group">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={post.featuredImage}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[post.category] || 'bg-gray-100 text-gray-800'}`}>
          {categoryNames[post.category]}
        </span>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <span className="flex items-center gap-1">
            <Icon name="Calendar" size={14} />
            {new Date(post.publishedAt).toLocaleDateString('en-KE', {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            })}
          </span>
          <span className="flex items-center gap-1">
            <Icon name="Clock" size={14} />
            {post.readTime} min read
          </span>
        </div>
        
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        
        <p className="text-gray-600 text-sm line-clamp-3 mb-4">{post.excerpt}</p>
        
        <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
          <Image
            src={post.author.avatar}
            alt={post.author.name}
            className="w-8 h-8 rounded-full object-cover"
          />
          <div className="text-sm">
            <span className="font-medium text-gray-900">{post.author.name}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;