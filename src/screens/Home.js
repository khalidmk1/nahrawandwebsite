import React from "react";
import SliderComming from "../pages/slider/SliderComming";
import FormationSection from "../pages/formation/FormationSection";
import Eventsection from "../pages/event/Eventsection";
import ContentSection from "../pages/content/ContentSection";
import SpeakersSection from "../pages/speakers/SpeakersSection";
import CultureSection from "../pages/culture/CultureSection";

export default function Home() {
  return (
    <div>
      <SliderComming />
      <FormationSection />
      <Eventsection />
      <ContentSection />
      <SpeakersSection />
      {/* <CultureSection /> */}
    </div>
  );
}
