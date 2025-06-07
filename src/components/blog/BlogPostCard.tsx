import React from 'react';
import Image from 'next/image';
import { BlogPost } from '@/types';

const BlogPostCard: React.FC<BlogPost> = ({
  title,
  subtitle,
  content,
  imageUrl,
  imagePosition
}) => {
  return (
    <article>
      <hr className="major" />
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <div className={`image ${imagePosition}`}>
        <Image 
          src={imageUrl} 
          alt={title} 
          width={400} 
          height={300}
          style={{ objectFit: 'cover' }}
        />
      </div>
      {content.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </article>
  );
};

export default BlogPostCard; 