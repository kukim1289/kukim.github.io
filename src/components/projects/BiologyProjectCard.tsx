import React from 'react';
import Image from 'next/image';
import { BiologyProject } from '@/types';

const BiologyProjectCard: React.FC<BiologyProject> = ({
  title,
  subtitle,
  keyTools,
  description,
  imageUrl
}) => {
  return (
    <section>
      <h2>{title}</h2>
      {imageUrl && (
        <div className="image right">
          <Image 
            src={imageUrl} 
            alt={title} 
            width={300} 
            height={200}
            style={{ objectFit: 'cover' }}
          />
        </div>
      )}
      <h3>{subtitle}</h3>
      <h5>Key Concepts and Tools: {keyTools.join(', ')}</h5>
      <p>{description}</p>
    </section>
  );
};

export default BiologyProjectCard; 