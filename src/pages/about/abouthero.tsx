import Image from "next/image";


import App_layout from "@/component/layout/applayout";

export default function AboutUsPage() {
  return (
    <>
    <App_layout>
      
      <main id="main" className="legacy-page">
        <section className="legacy-page-hero legacy-about-hero">
          <Image
            className="legacy-hero-image"
            src="/office-background.jpg"
            alt="Bright modern office hallway"
            fill
            priority
            sizes="100vw"
          />
          <div className="legacy-hero-shade" />
          <div className="container legacy-hero-content" data-reveal="up">
            <p className="eyebrow eyebrow-light">About BeaverTek · Orange County, CA &amp; Chennai, India</p>
            <h1>Empowering innovation<br /><span>with purpose.</span></h1>
            <p>
              We deliver scalable, secure IT solutions with expertise and integrity.
              BeaverTek brings decades of consulting experience across Fortune 500
              companies and diverse industries.
            </p>
            <div className="legacy-hero-actions">
              <a className="button button-yellow" href="#our-story">Meet BeaverTek <span aria-hidden="true">↓</span></a>
              <a className="legacy-hero-link" href="/services">Explore our services <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <div className="legacy-hero-stats container" aria-label="BeaverTek experience and locations">
            <div><strong>80<span>+</span></strong><span>Years of collective consulting experience</span></div>
            <div><strong>2</strong><span>Delivery centers, one connected team</span></div>
            <div><strong>F500</strong><span>Experience across Fortune 500 disciplines</span></div>
          </div>
        </section>

        <section className="legacy-story-section section-light" id="our-story">
          <div className="container legacy-story-layout">
            <div className="legacy-story-image" data-reveal="scale">
              <Image
                src="/about-collaboration.jpg"
                alt="A team meeting to plan and collaborate on technology work"
                fill
                sizes="(max-width: 760px) 90vw, 48vw"
              />
              <span className="legacy-image-caption">TECHNOLOGY WITH PURPOSE</span>
            </div>
            <div className="legacy-story-copy" data-reveal="up">
              <p className="eyebrow">Who we are</p>
              <h2>Innovative IT services.<br /><span>A contagious drive to succeed.</span></h2>
              <p>
                BeaverTek is a passionate and forward-thinking IT services provider
                based in Orange County, California, with an extended presence in
                Chennai, India. We leverage decades of experience working with Fortune
                500 companies across multiple disciplines.
              </p>
              <p>
                What sets us apart is more than technical proficiency—technology is in
                our DNA. It fuels our energy, drives our culture, and inspires our
                relentless pursuit to deliver solutions that make a difference.
              </p>
              <p>
                Every solution is designed to be scalable, robust, and aligned with
                specific business needs. We use Agile methodologies and industry best
                practices to deliver timely, reliable, and impactful technology.
              </p>
              <a className="legacy-inline-link" href="/services">See how we can help <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>

        <section className="legacy-purpose-section">
          <div className="container">
            <div className="legacy-section-heading" data-reveal="up">
              <p className="eyebrow">Our purpose</p>
              <h2>Clear direction.<br /><span>Meaningful impact.</span></h2>
              <p>Our mission and vision guide how we work, what we build, and the way we serve.</p>
            </div>
            <div className="legacy-purpose-grid">
              <article className="legacy-purpose-card legacy-mission-card" data-reveal="up">
                <div className="legacy-purpose-icon" aria-hidden="true">↗</div>
                <h3>Accurate data. Smarter decisions.</h3>
                <p>
                  At BeaverTek, we focus on giving clients precise and reliable data.
                  We ensure this information is accessible whenever and wherever they
                  need it. Our goal is to enable smarter decisions and drive meaningful
                  growth. Ultimately, we help businesses succeed in an increasingly
                  data-driven world.
                </p>
                <strong>Empower our clients with accurate, actionable data anytime, anywhere so they can thrive in a data-driven world.</strong>
              </article>
              <article className="legacy-purpose-card legacy-vision-card" data-reveal="up" data-reveal-delay="100">
                <div className="legacy-purpose-icon" aria-hidden="true">◎</div>
                <h3>Technology partner for what comes next.</h3>
                <p>
                  To be the technology partner mid-size companies trust to build, run,
                  and continuously improve the systems their business depends on.
                </p>
                <div className="legacy-location-route">
                  <span>IRVINE, CALIFORNIA</span><i /><span>CHENNAI, INDIA</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="legacy-document-purpose-section">
          <div className="container">
            <div className="legacy-section-heading" data-reveal="up">
              <p className="eyebrow">The work we believe in</p>
              <h2>Built to help growing<br /><span>businesses move forward.</span></h2>
            </div>
            <div className="legacy-document-purpose-grid">
              <article data-reveal="up">
                <span>MISSION / GROWING BUSINESSES</span>
                <h3>Senior capabilities, within reach.</h3>
                <p>
                  Give growing businesses the senior engineering, data and AI
                  capabilities that used to be available only to the largest
                  enterprises.
                </p>
              </article>
              <article data-reveal="up" data-reveal-delay="90">
                <span>VISION / A TRUSTED PARTNER</span>
                <h3>Build, run, and continuously improve.</h3>
                <p>
                  To be the technology partner mid-size companies trust to build,
                  run, and continuously improve the systems their business depends on.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="legacy-service-promise section-paper">
          <div className="container legacy-promise-layout">
            <div className="legacy-promise-mark" data-reveal="scale">
              <span className="legacy-promise-orbit legacy-promise-orbit-one" />
              <span className="legacy-promise-orbit legacy-promise-orbit-two" />
              <span className="legacy-promise-center">BT</span>
              <span className="legacy-promise-caption">BUILT ON TRUST</span>
            </div>
            <div className="legacy-promise-copy" data-reveal="up">
              <p className="eyebrow">We exist to serve our clients</p>
              <h2>Robust solutions.<br /><span>Relationships that last.</span></h2>
              <p>
                At BeaverTek, our purpose is simple—but powerful. We believe we have a
                responsibility to deliver the right solutions that are robust,
                scalable, and built to last. Everything we do is driven by our
                commitment to quality, integrity, and outcomes that matter.
              </p>
              <p>
                From our clients to our partners and employees, our focus is unwavering:
                delivering excellence, consistently. When our clients succeed, we
                succeed. That&apos;s the BeaverTek way.
              </p>
            </div>
          </div>
        </section>

        <section className="legacy-impact-section">
          <div className="container legacy-impact-layout">
            <div data-reveal="up">
              <p className="eyebrow eyebrow-light">It makes sense</p>
              <h2>Aligning strategy with purpose for meaningful impact.</h2>
            </div>
            <div data-reveal="up" data-reveal-delay="100">
              <p>
                At BeaverTek, we&apos;re more than an IT services company—we&apos;re
                your strategic technology partner. We bring extensive experience, deep
                technical expertise, and a genuine passion for technology and business
                process transformation. Our focus remains clear: helping our clients
                achieve their business goals.
              </p>
              <p>
                We proudly partner with the ProPlus Open Layer framework to support and
                modernize legacy applications, ensuring a seamless transition into
                future-ready systems.
              </p>
              <h3>What sets us apart</h3>
              <p>
                Unlike traditional IT firms, technology doesn&apos;t just inspire us—it
                defines us. This passion has shaped a high-performance culture and
                fuels our people, our process, and our promise to deliver meaningful
                results. We align strategy with purpose—because that&apos;s what drives
                real impact.
              </p>
              <a className="button button-yellow" href="/contact">Start a conversation <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>
      </main>
    </App_layout>
    </>
  );
}