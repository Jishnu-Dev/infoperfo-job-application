import Image from "next/image";
import Button from "../ui/Button";
import { ArrowRight } from "lucide-react";

export default function HomeHero() {
  return (
    <section className="h-[calc(100vh-108px)] w-full bg-primary relative">
      <Image
        fill
        priority
        loading="eager"
        alt="infoperformance"
        src="/images/home-hero-banner.jpg"
        className="object-cover object-center"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        style={{
          transform: "scaleX(-1)",
        }}
      />
      <div
        className="absolute top-0 bottom-0 right-10 h-max my-auto w-1/2 bg-white/80 flex flex-col justify-center 
        gap-6 p-14 border-r-8 border-red-500 backdrop-filter backdrop-blur-sm bg-opacity-10"
      >
        <h2 className="font-light text-black text-5xl uppercase">
          {`Accelerate Your Company's`} <br />
          {`CX And Digital Transformation`}
        </h2>
        <p className="leading-relaxed">
          We make it easier for you to do what you do best. Purpose-built for
          the enterprise, our AI will transform business performance and
          automate complexity at scale, while paving the way for better
          experiences that impact the bottom-line.
        </p>
        <Button className="group">
          <div className="flex gap-6">
            Explore
            <ArrowRight className="group-hover:translate-x-2 transition-all duration-300 ease-in-out" />
          </div>
        </Button>
      </div>
    </section>
  );
}
