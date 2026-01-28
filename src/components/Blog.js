import React from 'react';
import { FiCalendar, FiClock, FiArrowRight } from 'react-icons/fi';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Building Scalable Microservices with Node.js',
      excerpt: 'Learn how to architect and deploy microservices that can handle millions of requests with proper load balancing and fault tolerance.',
      date: 'Jan 15, 2024',
      readTime: '8 min read',
      category: 'Backend',
      image: '🏗️',
      link: '#'
    },
    {
      title: 'Modern React Patterns and Best Practices',
      excerpt: 'Explore advanced React patterns including custom hooks, compound components, and performance optimization techniques.',
      date: 'Jan 10, 2024',
      readTime: '6 min read',
      category: 'Frontend',
      image: '⚛️',
      link: '#'
    },
    {
      title: 'Docker and Kubernetes: Complete DevOps Guide',
      excerpt: 'A comprehensive guide to containerization and orchestration for modern cloud-native applications.',
      date: 'Jan 5, 2024',
      readTime: '12 min read',
      category: 'DevOps',
      image: '🐳',
      link: '#'
    },
    {
      title: 'The Future of Web Development in 2024',
      excerpt: 'Discussing emerging trends, new frameworks, and technologies that will shape the future of web development.',
      date: 'Dec 28, 2023',
      readTime: '5 min read',
      category: 'Technology',
      image: '🚀',
      link: '#'
    },
    {
      title: 'Building a Real-Time Chat Application',
      excerpt: 'Step-by-step tutorial on creating a scalable real-time chat app using WebSockets, Redis, and React.',
      date: 'Dec 20, 2023',
      readTime: '10 min read',
      category: 'Tutorial',
      image: '💬',
      link: '#'
    },
    {
      title: 'Database Design: SQL vs NoSQL',
      excerpt: 'Understanding when to use relational databases versus document databases with real-world examples.',
      date: 'Dec 15, 2023',
      readTime: '7 min read',
      category: 'Database',
      image: '🗄️',
      link: '#'
    }
  ];

  return (
    <section id="blog" className="section-container bg-dark-bg">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Latest <span className="gradient-text">Blog Posts</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Thoughts, tutorials, and insights about web development
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="card-dark group hover:scale-105 transition-all duration-300 flex flex-col"
            >
              {/* Post Image/Icon */}
              <div className="relative mb-4 aspect-video bg-gradient-to-br from-neon-blue/10 via-neon-purple/10 to-neon-pink/10 
                            rounded-lg flex items-center justify-center overflow-hidden">
                <div className="text-7xl animate-float">{post.image}</div>
                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-neon-purple/20 backdrop-blur-sm 
                              border border-neon-purple rounded-full text-neon-purple text-xs font-semibold">
                  {post.category}
                </div>
              </div>

              {/* Post Meta */}
              <div className="flex items-center gap-4 text-gray-400 text-sm mb-3">
                <span className="flex items-center gap-1">
                  <FiCalendar size={14} />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <FiClock size={14} />
                  {post.readTime}
                </span>
              </div>

              {/* Post Content */}
              <h3 className="text-xl font-bold text-gray-100 mb-3 group-hover:text-neon-blue transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4 flex-grow leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>

              {/* Read More Link */}
              <a
                href={post.link}
                className="flex items-center gap-2 text-neon-blue font-semibold text-sm 
                         group-hover:gap-3 transition-all duration-300"
              >
                Read More
                <FiArrowRight />
              </a>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-purple 
                     text-white font-semibold rounded-lg hover:scale-105 hover:shadow-lg 
                     hover:shadow-neon-blue/50 transition-all duration-300"
          >
            View All Posts
            <FiArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
