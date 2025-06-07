import React from 'react';
import Image from 'next/image';
import { ProgrammingProject } from '@/types';

const ProjectCard: React.FC<ProgrammingProject> = ({
  title,
  websiteUrl,
  imageUrl,
  languages,
  description,
  additionalNotes,
  buttonText = 'View Website'
}) => {
  return (
    <section>
      <h2>
        <a href={websiteUrl}>{title}</a>
      </h2>
      <div className="image right">
        <Image 
          src={imageUrl} 
          alt={title} 
          width={300} 
          height={200}
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div>
        <h3>Languages used: {languages.join(', ')}</h3>
        <p>{description}</p>
        {additionalNotes && <p>{additionalNotes}</p>}
      </div>
      <a href={websiteUrl} className="button">
        <span className="label">{buttonText}</span>
      </a>
    </section>
  );
};

export default ProjectCard; 