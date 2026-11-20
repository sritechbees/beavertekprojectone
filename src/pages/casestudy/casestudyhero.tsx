import App_layout from "@/component/layout/app_layout";
import CaseStudiesHero from "./CaseStudiesHero";
import PaymentPlatformCaseStudy from "./PaymentPlatformCaseStudy";
import HealthcareAiCaseStudy from "./HealthcareAiCaseStudy";
import DataReportingCaseStudy from "./DataReportingCaseStudy";

import Head from "next/head";


export default function CaseStudiesSection() {
  return (
    <App_layout>
   <Head>
      <title>Beavertek |  Case Studies</title>
      </Head>
   
    <CaseStudiesHero/>
    
    <PaymentPlatformCaseStudy/>
    <HealthcareAiCaseStudy/>
    <DataReportingCaseStudy/>
  
   

    </App_layout>
  );
}