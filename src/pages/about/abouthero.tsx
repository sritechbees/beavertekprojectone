import App_layout from "@/component/layout/app_layout";
import HowWeWork from "./HowWeWork";
import MissionVision from "./MissionVision";
import OurTeam from "./OurTeam";
import WhatWeBelieve from "./WhatWeBelieve";
import WhereWeAre from "./WhereWeAre";
import WhyWeExist from "./WhyWeExist";


import FooterCTA from "@/component/home/footercta";
import Beavertekhero from "./beavertekhero";

export default function AboutHero() {
  return (
    <App_layout>
    <div>
    <Beavertekhero/>
     
    <HowWeWork/>
    <MissionVision/>
    <OurTeam/>
    <WhatWeBelieve/>
    <WhereWeAre/>
    <WhyWeExist/>
    <FooterCTA/>
    </div>
    </App_layout>
  );
}
