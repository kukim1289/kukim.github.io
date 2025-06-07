import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import BiologyProjectCard from '@/components/projects/BiologyProjectCard';
import { BiologyProject } from '@/types';

const biologyProjects: BiologyProject[] = [
  {
    title: 'Molecular Diagnostics',
    subtitle: 'Colorectal Cancer Assay',
    keyTools: [
      'KingFisher 24-well DNA Extraction',
      'Bisulfite Conversion',
      'LTE-qMSP',
      'QuantSudioDx'
    ],
    description: 'My involvement in the Colorectal Cancer assay was during the pilot study stages where I worked with two other lab members to process over 1400 stool samples. I was hands-on from the point of patient data entry, through to the very last step of determining the Ct-value of the amplification of methylated Syndecan-2. My expertise revolves around epigenetic based techniques from nucleic acid extraction to bisulfite conversion, and downstream Linear Targeted Enrichment-qualitative methylation specific real time PCR(LTE-qMSP). DNA extraction was performed both manually(columns) and with automation(KingFisher 24-well)'
  },
  {
    title: 'SARS-CoV-2',
    subtitle: 'COVID-19 Testing',
    keyTools: [
      'Hamilton StarLet',
      'KingFisher 96-well RNA Extraction',
      'QuantSudioDx 96/384-well PCR'
    ],
    description: 'During the height of the Covid-19 Pandemic, Promis Diagnostics was processing 1000-4000 samples daily. RNA extraction was performed from both nasopharyngeal and oropharyngeal swab samples. I was involved in experiements for reducing the total PCR reaction volume in order to save reagents for increased and long term testing capacity. PCR reaction volumes were reduced from 20 microliters in a 96-well format to 5 microliters in a 384-well format.'
  },
  {
    title: 'UTI',
    subtitle: 'Urinary Tract Infection Panel',
    keyTools: [
      'KingFisher 96-well DNA Extraction',
      'QuantstudioDx',
      'Hamilton StarLet'
    ],
    description: 'I was in charge of the development of the UTI assay which consisted of a 16 pathogen panel. The UTI assay allowed me to independently practice my experimental design skills ranging from adequacy, repeatability, stability, and mixed flora experiments. With a 16 pathogen panel, it was extremely tedious to manually prepare 384-well plates for Polymerase chain reaction(PCR). I found the notion of manual PCR plating for future clinical use to be an unbearably severe bottleneck, so my most recent project was creating a 10ul and 5ul automated plating protocols on the Hamilton Starlet Liquid Handler.'
  }
];

export default function Biology() {
  return (
    <PageLayout title="Biology Projects">
      {biologyProjects.map((project, index) => (
        <React.Fragment key={index}>
          <BiologyProjectCard {...project} />
          {index < biologyProjects.length - 1 && <hr className="major" />}
        </React.Fragment>
      ))}
    </PageLayout>
  );
} 