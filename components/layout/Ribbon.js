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
    <section className="bg-gray-200 text-black">
      <div className="container py-2 flex justify-end gap-4">
        {socialLinks.map(({ label, url }) => (
          <Link key={url} href={url} className="text-sm hover:underline">
            {label}
          </Link>
        ))}
      </div>
    </section>
  );
}
