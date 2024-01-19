import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function Articles() {
  const articles = [
    {
      title: `What Can A Business Do To Improve Its Productivity?`,
      figure: "article-1-cover.jpg",
      tag: "Study",
      lead: "Enhancing productivity is a constant pursuit for businesses aiming to stay competitive and achieve their goals efficiently. In today’s dynamic and fast-paced business landscape, optimizing productivity has become a strategic imperative. This entails implementing a combination of strategies, processes.",
    },
    {
      title: `How Can Work From Home Burnout Be Avoided And Managed Effectively?`,
      figure: "article-2-cover.jpg",
      tag: "Info Research",
      lead: "The work landscape has undergone a significant transformation with the rise of work from home jobs. Remote work, including data entry and entry-level positions, has become increasingly popular due to its flexibility and convenience.",
    },
    {
      title: `The Significance Of Customer Service In Healthcare`,
      figure: "article-3-cover.jpg",
      tag: "Training",
      lead: "In the rapidly evolving landscape of healthcare, where technology and patient expectations are constantly changing, the significance of customer service has become more prominent than ever. Alongside medical advancements, patients now seek seamless and personalized experiences.",
    },
  ];

  return (
    <section className="container section-spacing grid grid-flow-row gap-8">
      <h5 className="text-3xl font-light">
        Top <span className="text-primary">Articles</span>
      </h5>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-1">
        {articles.map((article) => (
          <BlogCard article={article} />
        ))}
      </ul>
      <Button kind="secondary" className="mx-auto">
        Explore All Articles
      </Button>
    </section>
  );
}

const BlogCard = ({ article }) => {
  const { title, figure, lead, tag } = article;

  function createSlug(blogTitle) {
    const slug = blogTitle.toLowerCase().replace(/\s+/g, "-");
    const cleanSlug = slug.replace(/[^a-z0-9-]/g, "");
    return cleanSlug;
  }
  const slug = createSlug(title);

  return (
    <Link href={`/jishnu/${slug}`}>
      <article className="grid grid-flow-row gap-4 bg-gray-100 hover:bg-gray-200 group">
        <figure className="h-72 w-full relative">
          <Image
            fill
            alt={title}
            className="object-cover"
            src={`/images/${figure}`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </figure>
        <div className="grid grid-flow-row gap-20 p-3">
          <div className="grid grid-flow-row gap-4">
            <p className="text-black/50">{tag}</p>
            <p className="text-xl leading-normal line-clamp-3 font-light">
              {lead}
            </p>
          </div>
          <ArrowRight className="text-primary group-hover:translate-x-2 transition-all duration-300 ease-in-out" />
        </div>
      </article>
    </Link>
  );
};
