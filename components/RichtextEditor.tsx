import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import Code from "./Code";
export const RichTextComponents = {
  types: {
    image: ({ value }: any) => (
      <Image
        alt="Blog featured image"
        src={urlForImage(value).url()}
        width={1920}
        height={1080}
        className="h-full w-full my-6 max-h-[320px] mx-auto object-cover aspect-[9/7]"
      />
    ),
    code: ({ value }: any) => <Code value={value} />,
    callToAction: ({ value, isInline }: any) =>
      isInline ? (
        <a href={value.url}>{value.text}</a>
      ) : (
        <div className="callToAction">{value.text}</div>
      ),
  },
  block: {
    h1: ({ children }: any) => <h1 className="py-4">{children}</h1>,
    h2: ({ children }: any) => <h2 className="py-4">{children}</h2>,
    h3: ({ children }: any) => <h3 className="py-4">{children}</h3>,
    h4: ({ children }: any) => <h4 className="py-4">{children}</h4>,
    blockquote: ({ children }: any) => (
      <blockquote className="rounded-lg border-l-teal-600 border-l-4 p-4 italic my-2">
        {children}
      </blockquote>
    ),
  },

  list: {
    bullet: ({ children }: any) => (
      <ul className="ml-10 p-2 space-y-1.5 list-disc ">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="ml-10 p-2 list-decimal">{children}</ol>
    ),
  },
  marks: {
    em: ({ children }: any) => (
      <em className="text-gray-600 font-semibold ">{children}</em>
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
          className=" font-bold italic px-1.5 underline decoration-yellow-600 hover:decoration-yellow-400 duration-200"
        >
          {children}
        </Link>
      );
    },
  },
};
