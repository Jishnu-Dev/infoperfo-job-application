import Clients from "@/components/sections/Clients";
import HomeHero from "@/components/sections/HomeHero";
import HomeLead from "@/components/sections/HomeLead";
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
      <HomeLead />
    </section>
  );
}
