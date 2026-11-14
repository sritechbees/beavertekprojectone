import App_layout from "@/component/layout/applayout";
import Image from "next/image";

const serviceAreas = [
  {
    title: "Advanced Analytics",
    description: "Unlock powerful insights with predictive models and data-driven decision-making tools.",
    icon: "⌁",
  },
  {
    title: "AI & AI Agents",
    description: "Automate tasks and enhance productivity with next-gen artificial intelligence solutions.",
    icon: "✳",
  },
  {
    title: "Business Intelligence & Reporting",
    description: "Transform raw data into clear, actionable dashboards and reports for smarter decisions.",
    icon: "▥",
  },
  {
    title: "Data Integration",
    description: "Seamlessly connect multiple systems and sources into a unified, consistent data pipeline.",
    icon: "⌘",
  },
  {
    title: "Application Development",
    description: "Build scalable, secure, high-performing applications tailored to business needs.",
    icon: "↗",
  },
  {
    title: "Mobile Applications",
    description: "Deliver intuitive, cross-platform mobile apps with modern design and smooth performance.",
    icon: "▣",
  },
  {
    title: "Database Design & Performance Tuning",
    description: "Design optimized databases for high performance, scalability, and secure architecture.",
    icon: "◉",
  },
  {
    title: "Maintenance & Support Services",
    description: "Ensure system stability, security, and performance with round-the-clock support.",
    icon: "⟳",
  },
  {
    title: "Quality Assurance",
    description: "Deliver quality software with automated testing, bug prevention, and QA best practices.",
    icon: "✓",
  },
];

const serviceDetails = [
  {
    number: "01",
    title: "Advance Analytics & BI",
    image: "/data-analytics.jpg",
    alt: "Data analytics and business intelligence visualization",
    paragraphs: [
      "A positive experience with an application builds loyalty, enhances your company’s reputation, and makes your team happier and more productive.",
      "At BeaverTek, we specialize in applications that build and transform relationships between people and technology. We deliver applications that empower employees and engage customers, with a relentless focus on design and user experience.",
    ],
  },
  {
    number: "02",
    title: "Application Development",
    image: "/software-engineering.jpg",
    alt: "Developers working on laptops during application planning",
    paragraphs: [
      "At the moment many businesses want to develop and manage applications themselves, thus minimizing the dependency on outside IT teams.",
      "At BeaverTek, Inc. we help companies launch and manage all connected smart applications, which in turn provides greater user experience, while reducing cost for Application Development.",
    ],
  },
  {
    number: "03",
    title: "Quality Assurance",
    image: "/office-background.jpg",
    alt: "Team reviewing software quality and product experience",
    paragraphs: [
      "A positive experience with an application builds loyalty, enhances your company’s reputation, and makes your team happier and more productive.",
      "At BeaverTek, we specialize in applications that build and transform relationships between people and technology. We deliver applications that empower employees and engage customers, through a relentless focus on design and user experience.",
    ],
  },
  {
    number: "04",
    title: "Maintenance & Support",
    image: "/healthcare-team.jpg",
    alt: "Technology team supporting a live application",
    paragraphs: [
      "A positive experience with an application builds loyalty, enhances your company’s reputation, and makes your team happier and more productive.",
      "At BeaverTek, we specialize in applications that build and transform relationships between people and technology. We deliver applications that empower employees and engage customers, with a relentless focus on design and user experience.",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <App_layout>
      
      <main id="main" className="legacy-page">
        <section className="legacy-page-hero legacy-services-hero">
          <Image
            className="legacy-hero-image"
            src="/services-data.jpg"
            alt="Business analytics dashboards displayed on a screen"
            fill
            priority
            sizes="100vw"
          />
          <div className="legacy-hero-shade" />
          <div className="container legacy-hero-content" data-reveal="up">
            <p className="eyebrow eyebrow-light">BeaverTek IT Services · Managed IT Services</p>
            <h1>Your Digital<br /><span>Transformation Partner.</span></h1>
            <p>
              Smart IT solutions. Exceptional digital experiences. Proven business
              value. We bring the right people and capabilities together to help your
              technology move forward.
            </p>
            <div className="legacy-hero-actions">
              <a className="button button-yellow" href="#service-catalog">Explore services <span aria-hidden="true">↓</span></a>
              <a className="legacy-hero-link" href="/contact">Talk to our team <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <div className="legacy-hero-stats container" aria-label="Service delivery locations">
            <div><span>Understand your business</span></div>
            <div><span>Build for real-world needs</span></div>
            <div><span>Support what comes next</span></div>
          </div>
        </section>

        <section className="legacy-services-section" id="service-catalog">
          <div className="container">
            <div className="legacy-section-heading" data-reveal="up">
              <p className="eyebrow">What we offer</p>
              <h2>Capabilities for every<br /><span>stage of your technology.</span></h2>
              <p>
                From analytics and applications to quality assurance and support,
                BeaverTek provides services designed to work together.
              </p>
            </div>
            <div className="legacy-service-grid">
              {serviceAreas.map((service, index) => (
                <article className="legacy-service-card" data-reveal="up" data-reveal-delay={(index % 3) * 70} key={service.title}>
                  <span className="legacy-service-icon" aria-hidden="true">{service.icon}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <span className="legacy-service-card-line" aria-hidden="true" />
                </article>
              ))}
            </div>
            <div className="legacy-analytics-callout" data-reveal="up">
              <span className="legacy-callout-mark" aria-hidden="true">BT</span>
              <div>
                <p className="eyebrow">Data Analytics and Application Development</p>
                <p>
                  BeaverTek IT Services provides data analytics by collecting, cleaning,
                  transforming, and analyzing data to extract useful insights and
                  support decision-making. Our IT Team develops applications to meet
                  user needs by designing, building, testing, and deploying with
                  approaches like Waterfall, Agile, and DevOps.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="legacy-service-details">
          <div className="container">
            <div className="legacy-section-heading legacy-service-detail-heading" data-reveal="up">
              <p className="eyebrow eyebrow-light">Managed IT Services</p>
              <h2>Built around the<br /><span>experience you deliver.</span></h2>
              <p>
                Thoughtful applications help build relationships between people and
                technology. These are some of the ways we help.
              </p>
            </div>
            <div className="legacy-detail-grid">
              {serviceDetails.map((service) => (
                <article className="legacy-detail-card" data-reveal="up" key={service.title}>
                  <div className="legacy-detail-image">
                    <Image src={service.image} alt={service.alt} fill sizes="(max-width: 760px) 90vw, 42vw" />
                  </div>
                  <div className="legacy-detail-copy">
                    <h3>{service.title}</h3>
                    {service.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="legacy-services-cta">
          <div className="container legacy-services-cta-inner" data-reveal="up">
            <div>
              <p className="eyebrow eyebrow-light">Let&apos;s make it make sense</p>
              <h2>Have a challenge in mind?</h2>
              <p>Talk directly with our team about the right next step for your business.</p>
            </div>
            <a className="button button-yellow" href="/contact">Start a conversation <span aria-hidden="true">↗</span></a>
          </div>
        </section>
      </main>
      </App_layout>
    </>
  );
}