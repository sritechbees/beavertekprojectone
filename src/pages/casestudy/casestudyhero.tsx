import App_layout from "@/component/layout/app_layout";
import CaseStudiesHero from "./CaseStudiesHero";
import PaymentPlatformCaseStudy from "./PaymentPlatformCaseStudy";
import HealthcareAiCaseStudy from "./HealthcareAiCaseStudy";
import DataReportingCaseStudy from "./DataReportingCaseStudy";
import FooterCTA from "@/component/home/footercta";


export default function CaseStudiesSection() {
  return (
    <App_layout>
   
   
    <CaseStudiesHero/>
    
    <PaymentPlatformCaseStudy/>
    <HealthcareAiCaseStudy/>
    <DataReportingCaseStudy/>
   <FooterCTA/>
   

    </App_layout>
  );
}