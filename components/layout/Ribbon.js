import Link from "next/link";

export default function NotificationRibbon() {
  const socialLinks = [
    {
      label: "Help Center",
      url: "https://nextjs.org/",
    },
    {
      label: "Privacy",
      url: "https://nextjs.org/",
    },
    {
      label: "Connect",
      url: "tel: 9710123456",
    },
  ];
  return (
    <section className="bg-primary text-white">
      <div className="container py-2 flex justify-between">
        <p className="text-sm">
          {"Made by, "}
          <Link
            className="underline"
            href="https://jishnu-raj.vercel.app"
            target="_blank"
          >
            Jishnu Raj
          </Link>
        </p>
        <ul className="flex gap-4">
          {socialLinks.map(({ label, url }, i) => (
            <li key={i}>
              <Link
                href={url}
                className="text-sm hover:underline"
                target="_blank"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
