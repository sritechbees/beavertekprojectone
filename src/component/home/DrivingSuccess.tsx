
"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    name: "Brent",
    image: "/home/two2.webp",
    role: "Senior Vice President",
    project: "Tablu Reporting",
    quote:
      "I wanted to take a moment to personally thank you for the exceptional work you have done on Tablu Reporting. Your dedication, attention to details, and willingness to go beyond expectations truly stood out.",
  },
  {
    name: "Cooraez",
    image: "/home/one1.webp",
    role: "CEO",
    quote:
      "BeaverTek efforts not only contributed to the success of the project but also set a high standard for excellence with the team. It's rare to see such initiatives and commitment, and I want you to know that it has not gone unnoticed.",
  },
  {
    name: "Ravi Rajagopal",
    image: "/home/three3.webp",
    role: "CEO",
    project: "Campus solutions",
    quote:
      "I just wanted to give a big shoutout for the incredible work BeaverTek did on campus solutions. BeaverTek didn't just check the boxes they went all in, and it made a huge difference.",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
}) {
  return (
    <div
      className="mx-auto mb-16 max-w-3xl text-center"
      data-aos="fade-up"
      data-aos-duration="850"
    >
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#3E7BD6]">
        {eyebrow}
      </p>

      <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#101828] sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#596579]">
        {description}
      </p>
    </div>
  );
}

export default function DrivingSuccess() {
  useEffect(() => {
    AOS.init({
      duration: 850,
      once: true,
      offset: 60,
      easing: "ease-out-cubic",
      mirror: false,
      anchorPlacement: "top-bottom",
    });

    AOS.refresh();

    return () => {
      AOS.refreshHard();
    };
  }, []);

  return (
    <section id="customer-testimonials" className="bg-brand-paper py-28">
      <div className="container mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Our customers"
          title={
            <>
              Driving success through{" "}
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                partnership.
              </span>
            </>
          }
          description="Our customers are at the heart of everything we do. From Fortune 500 companies to fast-growing startups, BeaverTek empowers organizations with scalable IT solutions, deep technical expertise and a commitment to long-term success."
        />

        {/* TRUST STATISTICS */}
        <div
          className="mb-12 flex flex-wrap items-center justify-between gap-5 border-y border-[#DDE3EA] py-6"
          data-aos="fade-up"
          data-aos-duration="850"
        >
          <p className="text-sm font-semibold text-[#475569]">
            Trusted by global enterprises · Customer stories
          </p>

          <div className="flex flex-wrap gap-8">
            <div>
              <strong className="block bg-brand-gradient bg-clip-text text-2xl font-bold text-transparent">
                2K+
              </strong>
              <span className="text-xs text-[#64748B]">Reviews</span>
            </div>

            <div>
              <strong className="block bg-gradient-to-r from-[#3E7BD6] to-[#7A4FD1] bg-clip-text text-2xl font-bold text-transparent">
                4.8
              </strong>
              <span className="text-xs text-[#64748B]">Satisfaction</span>
            </div>

            <div>
              <strong className="block bg-gradient-to-r from-[#7A4FD1] to-[#B93FC9] bg-clip-text text-2xl font-bold text-transparent">
                ◎
              </strong>
              <span className="text-xs text-[#64748B]">Worldwide users</span>
            </div>
          </div>
        </div>

        {/* TESTIMONIAL CARDS */}
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <figure
              key={testimonial.name}
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay={index * 150}
              className="group flex flex-col rounded-3xl border border-brand-border bg-brand-card p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#3E7BD6]/50 hover:bg-brand-panel hover:shadow-2xl hover:shadow-[#3E7BD6]/10"
            >
              <div className="flex items-center justify-between">
                <span className="bg-brand-gradient bg-clip-text text-6xl leading-none text-transparent transition-transform duration-300 group-hover:-translate-y-1">
                  “
                </span>

                {testimonial.project && (
                  <span className="rounded-full border border-[#29B6F0]/20 bg-gradient-to-r from-[#29B6F0]/10 to-[#7A4FD1]/10 px-3 py-2 text-[10px] font-bold text-[#3E7BD6]">
                    {testimonial.project}
                  </span>
                )}
              </div>

              <blockquote className="my-7 flex-1 text-sm leading-8 text-brand-copy">
                {testimonial.quote}
              </blockquote>

              <figcaption className="flex items-center gap-4 border-t border-brand-border pt-6">
                <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-brand-border bg-brand-panel shadow-md shadow-[#3E7BD6]/20">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </span>

                <div>
                  <strong className="block text-sm text-white">
                    {testimonial.name}
                  </strong>

                  <span className="mt-1 block text-xs text-brand-muted">
                    {testimonial.role}
                  </span>
                </div>

                <span className="ml-auto text-xs font-bold text-[#3E7BD6]">
                  0{index + 1}
                </span>
              </figcaption>

              {/* BOTTOM GRADIENT HOVER */}
              <div className="mt-6 h-1 w-0 rounded-full bg-brand-gradient transition-all duration-500 group-hover:w-full" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
