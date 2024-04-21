import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import Marquee from "@/components/marquee/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rattan Energy",
  description: "Rattan Energy",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Marquee/>
      <Hero />
      <Features />
      <Video />
      
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      
    
      <Contact />
    </>
  );
}
