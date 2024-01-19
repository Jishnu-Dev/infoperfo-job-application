import Link from "next/link";

export default function NotificationRibbon() {
  const socialLinks = [
    {
      label: "Help Center",
      url: "www.facebook.com",
    },
    {
      label: "Privacy",
      url: "www.linkedin.com",
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
          {socialLinks.map(({ label, url }) => (
            <li key={url}>
              <Link href={url} className="text-sm hover:underline">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
