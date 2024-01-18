import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function Clients() {
  const clients = [
    "airbus",
    "airbus-2",
    "ban",
    "bomag",
    "gemo",
    "guernesey",
    "pentel",
    "tohato",
    "universal",
    "vudu",
  ];

  return (
    <section className="section-spacing flex flex-col gap-12">
      <h2 className="text-4xl font-light text-center">
        Trusted by
        <span className="text-red-500">{` 1000+ customers `}</span>
        across the globe
      </h2>
      <Marquee>
        <ul className="flex items-center gap-12">
          {clients.map((client) => (
            <li key={client} className="first:ml-12">
              <Image
                src={`/images/clients/${client}.svg`}
                width={100}
                height={100}
                alt={client}
              />
            </li>
          ))}
        </ul>
      </Marquee>
    </section>
  );
}
