import Image from 'next/image';
import PageLayout from '@/components/layout/PageLayout';

export default function PromisDx() {
  return (
    <PageLayout title="Promis Diagnostics">
      <div className="image main">
        <Image 
          src="/images/promisdxlogo.jpg" 
          alt="Promis Diagnostics" 
          width={1000} 
          height={500}
          style={{ objectFit: 'cover' }}
        />
      </div>

      <section>
        <h2>Clinical Laboratory Scientist</h2>
        <p>
          At Promis Diagnostics, I worked as a Clinical Laboratory Scientist focusing on molecular diagnostics.
          My work involved developing and validating assays for various conditions including COVID-19,
          urinary tract infections, and colorectal cancer screening.
        </p>
      </section>

      <section>
        <h3>Key Achievements</h3>
        <ul>
          <li>Developed and validated a 16-pathogen UTI panel</li>
          <li>Increased COVID-19 testing capacity from 1,000 to 4,000 samples daily</li>
          <li>Implemented automated liquid handling protocols using Hamilton StarLet</li>
          <li>Created the EZ Cloud System for improved laboratory workflow</li>
        </ul>
      </section>
    </PageLayout>
  );
} 