import Hero from "@/app/_components/hero/hero";
import TrustedBy from "./_components/trustedby";
import WhatWeDo from "./_components/what-we-do/what-we-do";
import OurWork from "./_components/ourwork/our-work";
import WhyChooseUs from "./_components/why-choose-us/why-choose-us";
import Contact from "./_components/contact/contact";
import Footer from "./_components/footer/footer";
import CtaBanner from "./_components/our-cta-baner/our-cta-baner";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy/>
      <WhatWeDo/>
      <OurWork/>
      <WhyChooseUs/>
      <Contact />
      <CtaBanner/>
      <Footer />
    </>
  );
}