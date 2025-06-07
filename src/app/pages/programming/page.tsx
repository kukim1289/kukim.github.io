import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import ProjectCard from '@/components/projects/ProjectCard';
import { ProgrammingProject } from '@/types';

const programmingProjects: ProgrammingProject[] = [
  {
    title: 'BlakBlok (React)',
    websiteUrl: 'https://blakblok.com',
    imageUrl: '/images/bb2.jpeg',
    languages: ['JSX'],
    description: 'The initial version of BlakBlok hosted only one game on one page and was created using HTML, CSS, and Javascript. The latest version of BlakBlok is completely programmed in JSX and hosts several game versions along with an "about" page, and improved UI/UX. BlakBlok utilizes routing, useState([]), and component props.'
  },
  {
    title: 'Promis Diagnostics EZ Cloud System',
    websiteUrl: '/EZ Cloud System.pdf',
    imageUrl: '/images/EZcloud/Screen Shot 2022-04-26 at 5.18.29 PM.png',
    languages: ['Microsoft Power Fx'],
    description: 'EZrecord, EZaccess, EZsend are three cloud-based solutions created through Microsoft Powerautomate, Powerapps, and sharepoint. The EZ Cloud System increased testing capacity by reducing time for patient data entry, sample accessioning, and result delivery.',
    buttonText: 'Read More'
  },
  {
    title: 'ABG/ABB Calculator',
    websiteUrl: 'https://www.abgcalculator.com',
    imageUrl: '/images/o.jpg',
    languages: ['HTML', 'Javascript', 'CSS'],
    description: 'ABG Calculator is a satirical questionaire that pokes fun at a socialite group in the asian community. The total inputs on a checkbox class is totaled with "for" loops and "if" statements are then used to generate a message dependent on the number of selected inputs. The total input and generated comment is set to .sessionStorage and retrieved on a separate page. The questionaire was then posted to several social media outlets and has now garnered more than 75,000 web visits.'
  },
  {
    title: 'BlakBlok (Original)',
    websiteUrl: 'https://blakblok.com',
    imageUrl: '/images/blakblok.png',
    languages: ['HTML', 'Javascript', 'CSS'],
    description: 'Blak Blok is a simple game site with various game versions that revolve around black squares. The core of Blak Blok utilizes addEventListener(), "if" statements, "for" loops, and setInterval().',
    additionalNotes: 'The biggest challenge with Blak Blok is the time drift and loss of accuracy of the stopwatch on phones. I am currently finding a way to replace setInterval().'
  }
];

export default function Programming() {
  return (
    <PageLayout title="Programming Projects">
      {programmingProjects.map((project, index) => (
        <React.Fragment key={index}>
          <ProjectCard {...project} />
          {index < programmingProjects.length - 1 && <hr className="major" />}
        </React.Fragment>
      ))}
    </PageLayout>
  );
} 