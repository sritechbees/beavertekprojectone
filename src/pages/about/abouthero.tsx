import App_layout from "@/component/layout/app_layout";
import HowWeWork from "./HowWeWork";
import MissionVision from "./MissionVision";
import OurTeam from "./OurTeam";
import WhatWeBelieve from "./WhatWeBelieve";
import WhereWeAre from "./WhereWeAre";
import WhyWeExist from "./WhyWeExist";



import Beavertekhero from "./beavertekhero";
import Head from "next/head";

export default function AboutHero() {
  return (
    <App_layout>
      <Head>
      <title>Beavertek | About</title>
      </Head>
    <div>
    <Beavertekhero/>
     
    <HowWeWork/>
    <MissionVision/>
    <OurTeam/>
    <WhatWeBelieve/>
    <WhereWeAre/>
    <WhyWeExist/>
    
    </div>
    </App_layout>
  );
}
