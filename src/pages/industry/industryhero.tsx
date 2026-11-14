import Image from "next/image";

export default function IndustriesSection() {
  return (
    <section className="industries-section section-light" id="industries">
      <div className="container">
        <div className="section-heading section-heading-wide" data-reveal="up">
          <div>
            <p className="eyebrow">Industries</p>
            <h2>Built around your world.</h2>
          </div>
          <p className="section-aside">
            Practical technology experience across the industries and teams we serve.
          </p>
        </div>
        <div className="industry-grid">
          <article className="industry-card industry-health" data-reveal="up" data-reveal-delay="0">
            <Image
              className="industry-photo"
              src="/healthcare-team.jpg"
              alt=""
              fill
              sizes="(max-width: 760px) 90vw, 33vw"
            />
            <div className="industry-symbol" aria-hidden="true">+</div>
            <h3>Healthcare</h3>
            <p>Healthcare software engineering, BeaverHealthAI products, intake and triage.</p>
            <a className="text-link" href="#products">Explore BeaverHealthAI <span aria-hidden="true">↗</span></a>
          </article>
          <article className="industry-card industry-payments" data-reveal="up" data-reveal-delay="90">
            <Image
              className="industry-photo"
              src="/financial-services.jpg"
              alt=""
              fill
              sizes="(max-width: 760px) 90vw, 33vw"
            />
            <div className="industry-symbol" aria-hidden="true">↗</div>
            <h3>Financial services &amp; payments</h3>
            <p>Payment platforms, integrations and data systems built for day-to-day operations.</p>
            <a className="text-link" href="#work">See case studies <span aria-hidden="true">↗</span></a>
          </article>
          <article className="industry-card industry-professional" data-reveal="up" data-reveal-delay="180">
            <Image
              className="industry-photo"
              src="/office-background.jpg"
              alt=""
              fill
              sizes="(max-width: 760px) 90vw, 33vw"
            />
            <div className="industry-symbol" aria-hidden="true">⌘</div>
            <h3>Professional services</h3>
            <p>CRM and lead automation for legal, medical and dental practices.</p>
            <a className="text-link" href="#services">Explore services <span aria-hidden="true">↗</span></a>
          </article>
        </div>
      </div>
    </section>
  );
}