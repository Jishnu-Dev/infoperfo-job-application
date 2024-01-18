import Button from "@/components/ui/Button";

export default function FooterLead() {
  return (
    <section className="w-full bg-gray-200 relative overflow-hidden">
      <p className="text-[12rem] font-black text-primary opacity-10">
        INFORPERFORMANCE
      </p>
      <div className="container h-full absolute left-0 right-0 top-0 bottom-0 flex justify-between items-center">
        <h6 className="text-4xl font-light">
          Your One-Stop Contact Center and
          <br /> Technology Solution!
        </h6>
        <div className="flex gap-4">
          <Button>Schedule a demo</Button>
          <Button kind="secondary">Get in touch</Button>
        </div>
      </div>
    </section>
  );
}
