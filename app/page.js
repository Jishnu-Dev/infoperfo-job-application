import CallToAction from "@/components/sections/CallToAction";
import Clients from "@/components/sections/Clients";
import HomeHero from "@/components/sections/HomeHero";
import HomeLead from "@/components/sections/HomeLead";
import Services from "@/components/sections/Services";
import Testimony from "@/components/sections/Testimony";
import { tagline } from "@/lib/constants";

export const metadata = {
  title: `Home | ${tagline}`,
  description: tagline,
};

export default function Home() {
  return (
    <section>
      <HomeHero />
      <Clients />
      <Testimony />
      <HomeLead />
      <Services />
      <CallToAction />
    </section>
  );
}
