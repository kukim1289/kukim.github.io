import Image from "next/image";
import Link from "next/link";
import PageLayout from "@/components/layout/PageLayout";

export default function Home() {
  return (
    <PageLayout title="Homepage">
      {/* Banner */}
      <section id="banner">
        <div className="content">
          <header>
            <h1>Hi, I'm Ku</h1>
            <p>Masters in Software Engineering Student at UC Irvine</p>
          </header>
          <p>Welcome to my professional website portfolio! Explore my projects, educational background, and work history.</p>
        </div>
        <div className="image object">
          <Image 
            src="/images/Me.jpeg" 
            alt="Ku Kim"
            width={400}
            height={400}
            style={{ 
              objectFit: 'cover',
              width: '100%',
              height: '100%',
              maxHeight: '400px'
            }}
            priority
          />
        </div>
      </section>

      {/* Education Section */}
      <section>
        <header className="major">
          <h2><i className="fas fa-graduation-cap"></i> Education</h2>
        </header>
        <div className="features">
          <article>
            <div className="content">
              <h3>UC Irvine (2022-2024)</h3>
              <h5>Software Engineering 4.0 GPA</h5>
              <hr />
              <h3>UC Berkeley (2018-2019)</h3>
              <h5>Molecular and Cell Biology 3.62 GPA</h5>
              <hr />
              <h3>UC San Diego (2016-2018)</h3>
              <h5>General Biology 3.87 GPA</h5>
            </div>
          </article>
        </div>
      </section>

      {/* Experience Section */}
      <section>
        <header className="major">
          <h2>Experience</h2>
        </header>
        <div className="posts">
          <article>
            <Link href="/promisdx" className="image">
              <Image 
                src="/images/promisdxlogo.jpg" 
                alt="Promis Diagnostics" 
                width={600} 
                height={300}
                style={{ 
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%'
                }}
              />
            </Link>
            <div className="content">
              <h3>Promis Diagnostics</h3>
              <p>Experimental design and planning, data analysis, and documentation to satisfy CLIA and CAP requirements across several assays.</p>
              <ul className="actions">
                <li><Link href="/promisdx" className="button">More</Link></li>
              </ul>
            </div>
          </article>

          <article>
            <Link href="/zymo" className="image">
              <Image 
                src="/images/zymologo.jpeg" 
                alt="Zymo Research" 
                width={600} 
                height={300}
                style={{ 
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%'
                }}
              />
            </Link>
            <div className="content">
              <h3>Zymo Research Corp</h3>
              <p>Human Saliva, Urine, and Lancet sample processing and marketing of purification products for researchers, physicians, and clinical labs.</p>
              <ul className="actions">
                <li><Link href="/zymo" className="button">More</Link></li>
              </ul>
            </div>
          </article>
        </div>
      </section>
    </PageLayout>
  );
}
