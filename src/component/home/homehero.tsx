
import BeaverHealthAI from "./BeaverHealthAI";
import BigCompanyThinking from "./BigCompanyThinking";
import OneTeam from "./OneTeam";
import ExperienceThat from "./ExperienceThat";
import BuiltAround from "./BuiltAround";
import CaseStudies from "./WorkThatMoves";
import DrivingSuccess from "./DrivingSuccess";
import TheRightShape from "./TheRightShape";
import GoodQuestions from "./GoodQuestions";
import NeedSenior from "./NeedSenior";



import App_layout from "@/component/layout/app_layout";
import Herosection from "./herosection";
import FooterCTA from "./footercta";
export default function Home() {
  return (
    <>
      <App_layout>
        <main>
          {/* HERO */}
           <Herosection/>
          {/* <SeniorEngineers /> */}
          {/* ABOUT */}

          <BigCompanyThinking />

          {/* SERVICES */}
          <OneTeam />

          {/* WHY BEAVERTEK */}
          <ExperienceThat />
          {/* INDUSTRIES */}
          <BuiltAround />

          {/* PRODUCTS */}

          <BeaverHealthAI />
          {/* CASE STUDIES */}
          <CaseStudies />

          {/* TESTIMONIALS */}
          <DrivingSuccess />

          {/* ENGAGEMENT */}
          <TheRightShape />

          {/* FAQ */}
          <GoodQuestions />

          {/* CONTACT CTA */}
        
          <FooterCTA/>
        </main>
      </App_layout>
    </>
  );
}
