import Image from 'next/image';
import PageLayout from '@/components/layout/PageLayout';

export default function Teaching() {
  return (
    <PageLayout title="Teaching">
      <div className="image main">
        <Image 
          src="/images/me2.jpeg" 
          alt="Teaching" 
          width={1000} 
          height={500}
          style={{ objectFit: 'cover' }}
        />
      </div>

      <p>
        UC San Diego is where I peer tutored primarily in STEM subjects such as physics and biology. 
        Physics 1A/1AL(Mechanics), 1B/BL(Electricity/Magnetism), and 1C/CL(waves and optics) were the 
        subjects I felt most comfortable tutoring. I am fully capable of teaching lower division biology 
        series which includes topics on the cell, multicellular life, and Organismic biology.
      </p>
      
      <p>
        Over my last semester at Berkeley, I volunteered as a k-12 tutor at Multicultural Institute and 
        found enjoyment in tutoring kids and young adults. More recently I tutored for two high school 
        students in AP Biology at E.M. Academy in Irvine California.
      </p>
      
      <p>
        Although I have mostly tutored highschool and college students, I feel comfortable with tutoring 
        any age group.
      </p>
    </PageLayout>
  );
} 