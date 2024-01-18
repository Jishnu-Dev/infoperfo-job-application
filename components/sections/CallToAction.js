import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function CallToAction() {
  return (
    <section className="container section-spacing grid grid-flow-row gap-2">
      <SectionTitle />
      <SectionBody />
    </section>
  );
}

const SectionTitle = () => (
  <div className="w-full h-max bg-primary flex justify-between items-center p-8">
    <h4 className="text-white text-2xl">The Intelligent Enterprise</h4>
    <Button
      kind="secondary"
      className="border-white text-white hover:bg-white hover:text-red-600 flex gap-6 items-center"
    >
      Contact Us
      <ArrowRight />
    </Button>
  </div>
);

const SectionBody = () => (
  <div className="bg-gray-200 grid grid-cols-1 md:grid-cols-2">
    <div className="p-5 grid grid-flow-row gap-3">
      <h6 className="text-primary">Exceptional CX</h6>
      <h5 className="text-3xl font-light">
        Do You Want To Lead Your Industry From The Front With Exceptional CX?
      </h5>
      <p>
        Customers from all around the globe visit your business every day to
        meet their needs — eliciting real-world experience, sentiments, and
        perceptions. Achieving the ideal customer experience is your job, but
        complying with every individual customer’s unique expectations is a
        complex process. There is no universal customer experience approach.
      </p>
    </div>
    {/* Right cover */}
    <div className="relative">
      <Image
        fill
        loading="eager"
        className="object-cover"
        src="/images/cta-cover.jpg"
      />
    </div>
  </div>
);
