import Image from 'next/image';
import PageLayout from '@/components/layout/PageLayout';

export default function Zymo() {
  return (
    <PageLayout title="Zymo Research Corp">
      <div className="image main">
        <Image 
          src="/images/zymologo.jpeg" 
          alt="Zymo Research" 
          width={1000} 
          height={500}
          style={{ objectFit: 'cover' }}
        />
      </div>

      <section>
        <h2>Research and Development</h2>
        <p>
          At Zymo Research, I worked in the Research and Development department,
          contributing to the development and optimization of molecular biology kits
          and reagents.
        </p>
      </section>

      <section>
        <h3>Key Responsibilities</h3>
        <ul>
          <li>Developed and optimized DNA/RNA extraction protocols</li>
          <li>Conducted quality control testing on new product batches</li>
          <li>Collaborated with the manufacturing team to scale up production</li>
          <li>Participated in new product development initiatives</li>
        </ul>
      </section>
    </PageLayout>
  );
} 