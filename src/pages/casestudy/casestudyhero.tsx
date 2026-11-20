import App_layout from "@/component/layout/app_layout";
import CaseStudiesHero from "./CaseStudiesHero";
import CaseStudiesHeader from "./CaseStudiesHeader";
import CaseStudiesFooter from "./CaseStudiesFooter";
import PaymentPlatformCaseStudy from "./PaymentPlatformCaseStudy";
import HealthcareAiCaseStudy from "./HealthcareAiCaseStudy";
import DataReportingCaseStudy from "./DataReportingCaseStudy";
import CaseStudiesCta from "./CaseStudiesCta";

export default function CaseStudiesSection() {
  return (
    <App_layout>
   
   
    <CaseStudiesHero/>
     <CaseStudiesHeader/>
    <PaymentPlatformCaseStudy/>
    <HealthcareAiCaseStudy/>
    <DataReportingCaseStudy/>
     <CaseStudiesFooter/>
    <CaseStudiesCta/>

    </App_layout>
  );
}