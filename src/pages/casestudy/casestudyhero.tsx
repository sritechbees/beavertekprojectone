import Image from "next/image";

export default function CaseStudiesSection() {
  return (
    <section className="work-section section-paper" id="work">
      <div className="container">
        <div className="section-heading section-heading-wide" data-reveal="up">
          <div>
            <p className="eyebrow">Case studies</p>
            <h2>Work that moves things forward.</h2>
          </div>
          <p className="section-aside">
            Real engineering challenges across payments, healthcare and data.
          </p>
        </div>
        <div className="case-grid">
          <article className="case-card case-payment" data-reveal="up" data-reveal-delay="0">
            <div className="case-visual payment-visual" aria-hidden="true">
              <Image className="case-photo" src="/digital-payments.jpg" alt="" fill sizes="(max-width: 760px) 90vw, 33vw" />
              <div className="case-photo-overlay" />
              <div className="payment-lines"><span /><span /><span /></div>
              <div className="payment-chip">PAYMENTS</div>
              <div className="payment-orbit" />
            </div>
            <div className="case-copy">
              <span className="case-category">PAYMENTS &amp; INTEGRATIONS</span>
              <h3>Payment platform</h3>
              <p>Building a platform to support high-volume payment transactions.</p>
              <a className="text-link" href="/contact">Discuss your project <span aria-hidden="true">↗</span></a>
            </div>
          </article>
          <article className="case-card case-health" data-reveal="up" data-reveal-delay="90">
            <div className="case-visual health-visual" aria-hidden="true">
              <Image className="case-photo" src="/healthcare-technology.jpg" alt="" fill sizes="(max-width: 760px) 90vw, 33vw" />
              <div className="case-photo-overlay" />
              <div className="health-cross">+</div>
              <div className="health-pulse"><span /><span /><span /><span /><span /></div>
              <div className="health-label">HEALTHCARE AI</div>
            </div>
            <div className="case-copy">
              <span className="case-category">HEALTHCARE &amp; AI</span>
              <h3>AI in real hospitals</h3>
              <p>Healthcare AI work that grew into the BeaverHealthAI product line.</p>
              <a className="text-link" href="#products">Explore BeaverHealthAI <span aria-hidden="true">↗</span></a>
            </div>
          </article>
          <article className="case-card case-data" data-reveal="up" data-reveal-delay="180">
            <div className="case-visual data-visual" aria-hidden="true">
              <Image className="case-photo" src="/data-analytics.jpg" alt="" fill sizes="(max-width: 760px) 90vw, 33vw" />
              <div className="case-photo-overlay" />
              <div className="data-bars"><span /><span /><span /><span /><span /><span /></div>
              <div className="data-board">TABLEAU</div>
              <div className="data-line"><span /><span /><span /><span /></div>
            </div>
            <div className="case-copy">
              <span className="case-category">DATA &amp; ANALYTICS</span>
              <h3>Data that drives decisions</h3>
              <p>Tableau dashboards that help teams make clearer decisions with their data.</p>
              <a className="text-link" href="/contact">Discuss your project <span aria-hidden="true">↗</span></a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}