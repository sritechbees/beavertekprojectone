
"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Activity,
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Clapperboard,
  ClipboardList,
  GraduationCap,
  HeartPulse,
  Image as ImageIcon,
  Pill,
  Stethoscope,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import App_layout from "@/component/layout/app_layout";

const gradient =
  "linear-gradient(135deg,#29B6F0 0%,#3E7BD6 35%,#7A4FD1 65%,#B93FC9 100%)";

const products = [
  {
    id: "triora",
    name: "Triora",
    category: "Symptom Triage",
    short: "Intelligent symptom assessment and healthcare guidance.",
    image: "/product/triora.png",
    description:
      "Support symptom assessment, AI-driven triage, and guidance to help identify potential red flags.",
    icon: Stethoscope,
    features: [
      "Mobile-based symptom assessment",
      "AI-driven triage support",
      "Instant symptom guidance",
      "Potential red flag detection",
    ],
    workflow: [
      {
        title: "Enter Symptoms",
        description:
          "The user shares symptoms through the mobile experience.",
      },
      {
        title: "Assess & Triage",
        description:
          "Submitted information is evaluated to support triage.",
      },
      {
        title: "Receive Guidance",
        description:
          "The user receives guidance and red-flag awareness.",
      },
    ],
  },
  {
    id: "care360",
    name: "Care360 AI",
    category: "Preventive Care",
    short: "Personalized health insights and proactive care planning.",
    image: "/product/Care360 AI.png",
    description:
      "Support preventive healthcare through AI-powered risk triage, personalized health scores, and smart care plans.",
    icon: HeartPulse,
    features: [
      "AI-powered risk triage",
      "Personalized health score",
      "Smart care plans",
      "Preventive care support",
    ],
    workflow: [
      {
        title: "Understand Health",
        description:
          "Relevant health information is considered for assessment.",
      },
      {
        title: "Evaluate Risk",
        description:
          "Risk triage and health scoring support risk awareness.",
      },
      {
        title: "Plan Preventive Care",
        description:
          "Health insights help guide appropriate care planning.",
      },
    ],
  },
  {
    id: "clipcraft",
    name: "Clip Craft AI",
    category: "Medical Video Creation",
    short: "Turn long videos into engaging medical shorts.",
    image: "/product/Clip craft AI.png",
    description:
      "Create short-form healthcare content for medical education, awareness, and hospital marketing.",
    icon: Clapperboard,
    features: [
      "AI-assisted video editing",
      "Automatic captions",
      "Short-form medical content",
      "Healthcare education and awareness",
    ],
    workflow: [
      {
        title: "Upload Video",
        description: "Start with an existing long-form video.",
      },
      {
        title: "Create Short Clips",
        description:
          "AI-assisted editing helps prepare short-form content.",
      },
      {
        title: "Review & Share",
        description:
          "Review clips for education or marketing use.",
      },
    ],
  },
  {
    id: "intakeplus",
    name: "IntakePlus",
    category: "Patient Intake",
    short: "Simplify digital patient registration and admission.",
    image: "/product/IntakePlus.png",
    description:
      "Make patient intake more convenient with digital registration and document uploads.",
    icon: ClipboardList,
    features: [
      "Digital patient registration",
      "Document uploads",
      "Organized intake information",
      "Smoother admission workflows",
    ],
    workflow: [
      {
        title: "Register Patient",
        description:
          "Capture patient registration information digitally.",
      },
      {
        title: "Upload Documents",
        description:
          "Submit the required documents through the intake flow.",
      },
      {
        title: "Support Admission",
        description:
          "Keep intake information organized for admission.",
      },
    ],
  },
  {
    id: "medlens",
    name: "MedLens",
    category: "Image Processing",
    short: "AI-powered medical image analysis and decision support.",
    image: "/product/Medlens Image Processing.png",
    description:
      "Support imaging workflows involving X-rays, CT, MRI, and ultrasound with AI-powered image analysis.",
    icon: ImageIcon,
    features: [
      "AI-powered image analysis",
      "X-ray image workflows",
      "CT and MRI imaging support",
      "Ultrasound imaging support",
      "Clinical decision support",
    ],
    workflow: [
      {
        title: "Provide Medical Image",
        description:
          "Start with an image from a supported imaging workflow.",
      },
      {
        title: "Process Image",
        description:
          "AI-powered processing supports image review.",
      },
      {
        title: "Review Insights",
        description:
          "Insights support qualified clinical review and decisions.",
      },
    ],
  },
  {
    id: "tractor",
    name: "Tractor",
    category: "Healthcare Training",
    short: "Structured clinical learning, practice, and development.",
    image: "/product/Tractor.png",
    description:
      "A healthcare training platform featuring clinical videos, case studies, learning paths, and assessments.",
    icon: GraduationCap,
    features: [
      "Clinical videos and cases",
      "Structured learning paths",
      "Learning assessments",
      "Certifications",
    ],
    workflow: [
      {
        title: "Choose Learning Path",
        description:
          "Start with a structured healthcare learning pathway.",
      },
      {
        title: "Learn & Practice",
        description:
          "Explore clinical videos and case studies.",
      },
      {
        title: "Assess Progress",
        description:
          "Use assessments to review learning progress.",
      },
    ],
  },
  {
    id: "medisync",
    name: "MediSync",
    category: "Doctor Appointments",
    short: "Simplified appointment booking and patient reminders.",
    image: "/product/MediSync.png",
    description:
      "Help patients book appointments and receive reminders while supporting clinic efficiency.",
    icon: Activity,
    features: [
      "Online appointment booking",
      "Appointment reminders",
      "Notifications",
      "Support for reducing missed appointments",
    ],
    workflow: [
      {
        title: "Book Appointment",
        description:
          "Make an appointment through the booking experience.",
      },
      {
        title: "Receive Reminder",
        description:
          "Reminders help patients keep track of visits.",
      },
      {
        title: "Manage Visit",
        description:
          "Organized appointment information supports clinic operations.",
      },
    ],
  },
  {
    id: "easymedi",
    name: "EasyMedi",
    category: "Pharmacy Management",
    short: "Manage pharmacy stock, prescriptions, billing, and expiry alerts.",
    image: "/product/EasyMedi Pharmacy Management.png",
    description:
      "Bring essential pharmacy management activities together in one organized workflow.",
    icon: Pill,
    features: [
      "Inventory and stock control",
      "Prescription management",
      "Sales and billing",
      "Medicine expiry alerts",
    ],
    workflow: [
      {
        title: "Manage Inventory",
        description:
          "Track pharmacy stock and inventory information.",
      },
      {
        title: "Process Prescriptions",
        description:
          "Manage prescription information in the workflow.",
      },
      {
        title: "Handle Billing & Expiry",
        description:
          "Support billing and medicine expiry monitoring.",
      },
    ],
  },
  {
    id: "medflow",
    name: "MedFlow AI",
    category: "End-to-End Care",
    short: "Connected care management across healthcare specialties.",
    image: "/product/End-to-End Digital Transformation.jpg",
    description:
      "Support care management workflows across gynecology, cardiology, diabetic care, and general care.",
    icon: BrainCircuit,
    features: [
      "End-to-end care management",
      "Gynecology care workflows",
      "Cardiology care workflows",
      "Diabetic and general care workflows",
    ],
    workflow: [
      {
        title: "Identify Care Needs",
        description:
          "Start with the relevant patient care requirements.",
      },
      {
        title: "Coordinate Care",
        description:
          "Organize the appropriate specialty care workflow.",
      },
      {
        title: "Support Follow-up",
        description:
          "Support connected care activities and follow-up.",
      },
    ],
  },
];


export default function Product() {
  const [selectedId, setSelectedId] = useState("triora");

  const productsRef = useRef<HTMLElement>(null);
  const detailsRef = useRef<HTMLElement>(null);
  const shouldScrollAfterNavigation = useRef(false);

  const selectedProduct =
    products.find((product) => product.id === selectedId) ?? products[0];

  const SelectedIcon = selectedProduct.icon;

  useEffect(() => {
    AOS.init({
      duration: 850,
      once: true,
      offset: 50,
      easing: "ease-out-cubic",
      mirror: false,
    });

    AOS.refresh();

    return () => {
      AOS.refreshHard();
    };
  }, []);

  useEffect(() => {
    const syncProductFromHash = () => {
      const productId = window.location.hash.replace("#", "");

      const matchedProduct = products.find(
        (product) => product.id === productId
      );

      if (!matchedProduct) return;

      shouldScrollAfterNavigation.current = true;
      setSelectedId(matchedProduct.id);
    };

    syncProductFromHash();

    window.addEventListener("hashchange", syncProductFromHash);

    return () => {
      window.removeEventListener("hashchange", syncProductFromHash);
    };
  }, []);

  useEffect(() => {
    AOS.refresh();

    if (shouldScrollAfterNavigation.current) {
      shouldScrollAfterNavigation.current = false;

      requestAnimationFrame(() => {
        const element = detailsRef.current;

        if (!element) return;

        const top =
          element.getBoundingClientRect().top +
          window.scrollY -
          85;

        window.scrollTo({
          top,
          behavior: "smooth",
        });
      });
    }
  }, [selectedId]);

  const selectProduct = (id: string) => {
    setSelectedId(id);
    window.history.replaceState(null, "", `#${id}`);
  };

  const navigateProduct = (direction: "previous" | "next") => {
    const currentIndex = products.findIndex(
      (product) => product.id === selectedId
    );

    const nextIndex =
      direction === "next"
        ? (currentIndex + 1) % products.length
        : (currentIndex - 1 + products.length) % products.length;

    const nextProduct = products[nextIndex];

    shouldScrollAfterNavigation.current = true;

    setSelectedId(nextProduct.id);

    window.history.replaceState(null, "", `#${nextProduct.id}`);
  };

  return (
    <App_layout>
    <main className="relative isolate w-full overflow-hidden bg-[#000000] text-white mt-16">

      {/* ================= PRODUCTS INTRO ================= */}

      <section
        ref={productsRef}
        id="productcard"
        className="relative isolate overflow-hidden bg-[#000000] px-4 pb-10 pt-12 text-white sm:px-6 sm:pb-12 sm:pt-16 lg:px-8 lg:pb-14 lg:pt-20"
      >
        {/* Subtle Background Glow */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 -z-0 h-80 w-[80%] -translate-x-1/2 rounded-full opacity-[0.09] blur-[130px]"
          style={{ background: gradient }}
        />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div
            data-aos="fade-up"
            className="mx-auto w-full max-w-4xl px-1 text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-md sm:px-5">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4D4D8] sm:text-xs sm:tracking-[0.24em]">
                Explore Our Products
              </span>

              <span
                className="h-1.5 w-1.5 shrink-0 rounded-full"
                style={{ background: gradient }}
              />
            </div>

            <h2 className="mx-auto mt-5 max-w-3xl text-[28px] font-extrabold leading-[1.18] tracking-[-0.045em] text-white sm:mt-6 sm:text-4xl md:text-5xl lg:text-[3.4rem]">
              Technology built around{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: gradient }}
              >
                healthcare needs.
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[13px] leading-6 text-gray-400 sm:text-sm sm:leading-7 md:text-base md:leading-8">
              From patient intake to preventive care, discover solutions
              designed to support healthcare teams and patient experiences.
              Select a product to learn more.
            </p>

            <div
              className="mx-auto mt-6 h-[3px] w-16 rounded-full sm:w-20"
              style={{ background: gradient }}
            />
          </div>
        </div>
      </section>

      {/* ================= PRODUCT SHOWCASE ================= */}

      <section
        className="relative isolate overflow-hidden bg-[#000000] px-4 pb-14 pt-6 text-white sm:px-6 sm:pb-16 sm:pt-8 lg:px-8 lg:pb-20 lg:pt-10"
        aria-label="Healthcare product showcase"
      >
        {/* Background Accents */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-48 top-40 -z-0 h-96 w-96 rounded-full opacity-[0.07] blur-[140px]"
          style={{ background: gradient }}
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-48 bottom-20 -z-0 h-96 w-96 rounded-full opacity-[0.06] blur-[140px]"
          style={{ background: gradient }}
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl">

          <div className="grid grid-cols-1 items-start gap-9 lg:grid-cols-[0.78fr_1.22fr] lg:gap-12 xl:gap-16">

            {/* ================= LEFT: PRODUCT LIST ================= */}

            <aside
              data-aos="fade-up"
              className="min-w-0 lg:sticky lg:top-24"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="shrink-0 text-[10px] font-bold uppercase tracking-[0.22em] text-[#A1A1AA] sm:text-xs">
                  Our Products
                </span>

                <span className="h-px flex-1 bg-gradient-to-r from-[#29B6F0]/50 via-[#7A4FD1]/30 to-transparent" />
              </div>

              <h2 className="mb-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Explore Solutions
              </h2>

              <p className="mb-6 max-w-md text-sm leading-6 text-gray-400 sm:leading-7">
                Choose a product to explore its features and workflow.
              </p>

              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-1">
                {products.map((product) => {
                  const ProductIcon = product.icon;
                  const isSelected = selectedId === product.id;

                  return (
                    <button
                      key={product.id}
                      type="button"
                      onClick={() => selectProduct(product.id)}
                      aria-pressed={isSelected}
                      className={`group flex w-full min-w-0 items-center gap-3 rounded-xl px-3 py-3 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#29B6F0]/70 sm:px-4 ${
                        isSelected
                          ? "bg-white/[0.07]"
                          : "bg-transparent hover:bg-white/[0.035]"
                      }`}
                    >
                      {/* Active Indicator */}

                      <span
                        aria-hidden="true"
                        className={`h-9 w-[3px] shrink-0 rounded-full transition-opacity duration-300 ${
                          isSelected ? "opacity-100" : "opacity-0"
                        }`}
                        style={{ background: gradient }}
                      />

                      {/* Product Icon */}

                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                          isSelected
                            ? "text-white"
                            : "bg-white/[0.055] text-gray-400 group-hover:text-white"
                        }`}
                        style={
                          isSelected
                            ? { background: gradient }
                            : undefined
                        }
                      >
                        <ProductIcon size={19} strokeWidth={1.8} />
                      </span>

                      {/* Product Information */}

                      <span className="min-w-0 flex-1">
                        <span
                          className={`block break-words text-sm font-semibold leading-5 transition-colors duration-300 sm:text-[15px] ${
                            isSelected
                              ? "text-white"
                              : "text-gray-300 group-hover:text-white"
                          }`}
                          style={
                            isSelected
                              ? {
                                  backgroundImage: gradient,
                                  backgroundClip: "text",
                                  WebkitBackgroundClip: "text",
                                  color: "transparent",
                                }
                              : undefined
                          }
                        >
                          {product.name}
                        </span>

                        <span className="mt-1 block break-words text-xs leading-4 text-gray-500">
                          {product.category}
                        </span>
                      </span>

                      <ArrowRight
                        size={17}
                        className={`shrink-0 transition-all duration-300 ${
                          isSelected
                            ? "translate-x-0 text-[#29B6F0] opacity-100"
                            : "-translate-x-1 text-gray-600 opacity-50 group-hover:translate-x-0 group-hover:text-[#29B6F0] group-hover:opacity-100"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </aside>

            {/* ================= RIGHT: PRODUCT DETAILS ================= */}

            <section
              ref={detailsRef}
              id="product-information"
              key={selectedProduct.id}
              className="mx-auto w-full min-w-0 max-w-[700px] scroll-mt-24 lg:max-w-none"
            >
              {/* PRODUCT IMAGE */}

              <div
                data-aos="fade-up"
                className="group relative overflow-hidden rounded-2xl border border-white/[0.10] bg-[#080808] p-1.5 shadow-[0_20px_65px_rgba(0,0,0,0.45)] sm:rounded-3xl sm:p-2"
              >
                <div className="relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-xl bg-[#080808] sm:aspect-[16/9] sm:rounded-2xl">
                  <img
                    src={selectedProduct.image}
                    alt={`${selectedProduct.name} healthcare product`}
                    loading="lazy"
                    className="h-full w-full object-center transition-transform duration-500 group-hover:scale-[1.015]"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/[0.04]" />

                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute left-3 top-3 h-7 w-7 rounded-tl-lg border-l-2 border-t-2 border-[#29B6F0]/70 sm:left-4 sm:top-4 sm:h-9 sm:w-9"
                  />

                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute bottom-3 right-3 h-7 w-7 rounded-br-lg border-b-2 border-r-2 border-[#B93FC9]/70 sm:bottom-4 sm:right-4 sm:h-9 sm:w-9"
                  />
                </div>
              </div>

              {/* PRODUCT TITLE AND DESCRIPTION */}

              <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="px-1 pb-1 pt-5 sm:pt-6"
              >
                <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#8BE0FF] sm:text-xs sm:tracking-[0.18em]">
                  <SelectedIcon size={15} className="shrink-0" />
                  <span>{selectedProduct.category}</span>
                </div>

                <h1
                  className="mt-4 break-words text-2xl font-extrabold leading-tight tracking-[-0.035em] text-white sm:text-3xl md:text-4xl"
                  style={{
                    backgroundImage: gradient,
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  {selectedProduct.name}
                </h1>

                <p className="mt-3 text-sm font-medium leading-6 text-gray-200 sm:text-base sm:leading-7">
                  {selectedProduct.short}
                </p>

                <p className="mt-3 max-w-3xl text-[13px] leading-6 text-gray-400 sm:text-sm sm:leading-7">
                  {selectedProduct.description}
                </p>

                <div
                  className="mt-5 h-[2px] w-14 rounded-full"
                  style={{ background: gradient }}
                />
              </div>

              {/* KEY FEATURES + WORKFLOW */}

              <div className="mt-7 border-t border-white/[0.09] pt-7 sm:mt-9 sm:pt-9">
                <div className="grid min-w-0 grid-cols-1 gap-9 md:grid-cols-2 md:gap-7 xl:gap-10">

                  {/* KEY FEATURES */}

                  <div className="min-w-0" data-aos="fade-up">
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#29B6F0] sm:text-xs">
                      What You Get
                    </p>

                    <h2 className="mt-2 text-xl font-bold tracking-tight text-white sm:text-2xl">
                      Key Features
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-gray-400 sm:leading-7">
                      Discover how {selectedProduct.name} supports healthcare
                      operations with practical, purpose-built capabilities.
                    </p>

                    <div className="mt-5 space-y-4">
                      {selectedProduct.features.map((feature) => (
                        <div
                          key={feature}
                          className="group flex min-w-0 items-start gap-3"
                        >
                          <CheckCircle2
                            size={19}
                            strokeWidth={1.8}
                            className="mt-1 shrink-0 text-[#63D5FF] transition-transform duration-300 group-hover:scale-110"
                          />

                          <p className="min-w-0 break-words text-sm leading-6 text-gray-300 transition-colors duration-300 group-hover:text-white sm:leading-7">
                            {feature}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* WORKFLOW */}

                  <div
                    className="min-w-0"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#29B6F0] sm:text-xs">
                      How It Works
                    </p>

                    <h2 className="mt-2 text-xl font-bold tracking-tight text-white sm:text-2xl">
                      Workflow
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-gray-400 sm:leading-7">
                      Follow the process behind {selectedProduct.name} from
                      one step to the next.
                    </p>

                    <div className="mt-5 space-y-5 sm:space-y-6">
                      {selectedProduct.workflow.map((step) => (
                        <div
                          key={step.title}
                          className="group relative min-w-0 pl-5"
                        >
                          <span
                            className="absolute left-0 top-[9px] h-2.5 w-2.5 rounded-full"
                            style={{ background: gradient }}
                          />

                          <h3 className="break-words text-sm font-semibold leading-6 text-white transition-colors duration-300 group-hover:text-[#63D5FF] sm:text-base sm:leading-7">
                            {step.title}
                          </h3>

                          <p className="mt-1.5 break-words text-sm leading-6 text-gray-400 sm:leading-7">
                            {step.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* PREVIOUS / NEXT */}

                <div className="mt-9 flex flex-col gap-4 border-t border-white/[0.09] pt-6 sm:mt-10 sm:flex-row sm:items-center sm:justify-between sm:pt-7">
                  <p className="text-sm text-gray-400">
                    Explore another healthcare solution
                  </p>

                  <div className="grid grid-cols-2 gap-2.5 sm:flex sm:gap-3">
                    <button
                      type="button"
                      onClick={() => navigateProduct("previous")}
                      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2.5 text-xs font-semibold text-gray-200 transition-all duration-300 hover:border-[#29B6F0]/50 hover:bg-white/[0.08] hover:text-white sm:text-sm"
                    >
                      <ArrowRight
                        className="rotate-180"
                        size={15}
                      />
                      Previous
                    </button>

                    <button
                      type="button"
                      onClick={() => navigateProduct("next")}
                      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-4 py-2.5 text-xs font-semibold text-white transition-all duration-300 hover:opacity-90 sm:text-sm"
                      style={{ background: gradient }}
                    >
                      Next Product
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
    </App_layout>
  );
}

