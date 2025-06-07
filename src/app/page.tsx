import Image from "next/image";
import Link from "next/link";
import PageLayout from "@/components/layout/PageLayout";

export default function Home() {
  return (
    <PageLayout title="Welcome">
      <div className="image main">
        <Image
          src="/images/me2.jpeg"
          alt="Ku Kim"
          width={1000}
          height={500}
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      <section>
        <h2>About Me</h2>
        <p>
          Hello! I'm Ku Kim, a professional with a diverse background spanning biology, programming,
          and entrepreneurship. My journey has taken me from molecular diagnostics labs to web development,
          always driven by curiosity and a desire to solve complex problems.
        </p>
      </section>

      <section className="features">
        <article>
          <h3>Programming</h3>
          <p>
            From developing web applications to creating automation tools, I combine technical expertise
            with practical solutions. Check out my programming projects including BlakBlok, EZ Cloud System,
            and more.
          </p>
          <Link href="/programming" className="button">View Projects</Link>
        </article>

        <article>
          <h3>Biology</h3>
          <p>
            My work in molecular diagnostics includes experience with COVID-19 testing, UTI panels, and
            colorectal cancer assays. I've contributed to increasing testing capacity and improving
            laboratory workflows.
          </p>
          <Link href="/biology" className="button">Learn More</Link>
        </article>

        <article>
          <h3>Teaching</h3>
          <p>
            I've had the privilege of tutoring students in STEM subjects at UC San Diego and working
            with K-12 students at the Multicultural Institute. Teaching has been a rewarding way to
            share knowledge and inspire others.
          </p>
          <Link href="/teaching" className="button">Teaching Experience</Link>
        </article>

        <article>
          <h3>Blog</h3>
          <p>
            Through my writing, I share personal stories about identity, family, and finding meaning
            in everyday experiences. Join me in exploring these narratives that shape who I am.
          </p>
          <Link href="/blog" className="button">Read Blog</Link>
        </article>
      </section>
    </PageLayout>
  );
}
