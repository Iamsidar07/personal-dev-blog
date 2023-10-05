import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
export const RichTextComponents = {
  types: {
    image: ({ value }: any) => (
      <Image
        alt="Blog featured image"
        src={urlForImage(value).url()}
        width={1920}
        height={1080}
        className="h-full w-full my-6 max-h-[420px]  rounded-2xl mx-auto object-cover aspect-[9/7]"
      />
    ),
    callToAction: ({ value, isInline }: any) =>
      isInline ? (
        <a href={value.url}>{value.text}</a>
      ) : (
        <div className="callToAction">{value.text}</div>
      ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-5xl font-bold py-10">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-4xl font-bold py-10">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-3xl font-bold py-10">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-2xl font-bold py-10">{children}</h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-purple-500 border-l-4 p-4 italic my-4">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="ml-10 py-10 space-y-5 list-disc">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="mt-10 list-decimal p-5">{children}</ol>
    ),
  },
  marks: {
    em: ({ children }: any) => (
      <em className="text-gray-600 font-semibold">{children}</em>
    ),
    link: ({ value, children }: any) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <Link
          href={value.href}
          rel={rel}
          target={target}
          className="underline decoration-blue-600 hover:decoration-blue-400 duration-200"
        >
          {children}
        </Link>
      );
    },
  },
};
