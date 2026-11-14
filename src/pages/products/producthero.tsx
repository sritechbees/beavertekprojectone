function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path
        d="M4.2 15.8 15.5 4.5m0 0H6m9.5-0v9.5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ProductsSection() {
  return (
    <section className="products-section section-blue" id="products">
      <div className="products-photo" aria-hidden="true" />
      <div className="container beaverhealthai-layout">
        <header className="beaverhealthai-header" data-reveal="up">
          <div className="beaverhealthai-brand">
            <p className="eyebrow eyebrow-light">Built by BeaverTek</p>
            <h2>BeaverHealth<span>AI</span></h2>
          </div>
          <div className="beaverhealthai-intro">
            <p>
              Healthcare AI products, built and operated by the team that
              engineers them.
            </p>
            <div className="beaverhealthai-actions">
              <a className="button button-yellow" href="/contact">
                Request a product demo <ArrowIcon />
              </a>
            </div>
          </div>
        </header>
        <div className="beaverhealthai-features" id="beaverhealthai-features">
          <article className="beaverhealthai-card" data-reveal="up" data-reveal-delay="0">
            <div className="beaverhealthai-card-top">
              <span className="beaverhealthai-mark" aria-hidden="true">C<span>360</span></span>
            </div>
            <div>
              <h3>Beaver Care360 AI</h3>
              <p>Healthcare AI workspace.</p>
            </div>
            <a className="beaverhealthai-card-link" href="/contact">
              Ask about Care360 <span aria-hidden="true">↗</span>
            </a>
          </article>
          <article className="beaverhealthai-card beaverhealthai-card-intake" data-reveal="up" data-reveal-delay="100">
            <div className="beaverhealthai-card-top">
              <span className="beaverhealthai-mark beaverhealthai-mark-intake" aria-hidden="true">IQ</span>
            </div>
            <div>
              <h3>IntakeIQ</h3>
              <p>Patient intake module.</p>
            </div>
            <a className="beaverhealthai-card-link" href="/contact">
              Ask about IntakeIQ <span aria-hidden="true">↗</span>
            </a>
          </article>
        </div>
        <aside className="beavertek-other-product" id="blazeguard" data-reveal="up">
          <span className="beavertek-other-label">Also built by BeaverTek · Network security</span>
          <div className="beavertek-other-copy">
            <div>
              <h3>BlazeGuard Pro Firewall</h3>
              <p className="product-card-tagline">Next-Gen Security for Modern Networks</p>
              <p className="product-card-detail">
                BlazeGuard Pro is our flagship enterprise-grade firewall designed
                to protect your digital infrastructure with AI-powered threat
                detection, real-time analytics, and seamless cloud integration.
                Trusted by Fortune 500 companies for unmatched reliability and
                speed.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}