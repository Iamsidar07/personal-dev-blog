import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import Code from "./Code";
export const RichTextComponents = {
  types: {
    image: ({ value }: any) => (
      <div className="-px-6 mt-12 mb-24">
        <div className="relative -mb-12">
          <svg aria-hidden="true" width="1032" height="548" className="w-full h-auto block pointer-events-none" ></svg>
          <Image src={urlForImage(value).url()} alt={"Blog Featured image"} width={1600} height={850} className="absolute top-0 left-0 w-full h-full object-cover rounded-lg" />
        </div>
      </div>
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
    h1: ({ children }: any) => <h1 className="py-4 text-xl sm:text-6xl font-bold hover:underline">{children}</h1>,
    h2: ({ children }: any) => <h2 className="py-4 text-lg sm:text-4xl font-bold hover:underline">{children}</h2>,
    h3: ({ children }: any) => <h3 className="py-4 text-base sm:text-2xl font-bold hover:underline">{children}</h3>,
    h4: ({ children }: any) => <h4 className="py-4 text-base sm:text-xl font-bold hover:underline">{children}</h4>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-blue-600 border-l-4 p-4 italic my-2">
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
          className=" font-bold italic px-1.5 underline decoration-blue-600 hover:decoration-blue-400 duration-200"
        >
          {children}
        </Link>
      );
    },
  },
};
