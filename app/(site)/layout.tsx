import { Footer, Header, ThemeProviderComponent } from "@/components";
import "../globals.css";
import type { Metadata } from "next";
import { Syne, Poppins } from "next/font/google";

const syne = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-syne",
});

const poopins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Manoj DEV blog",
  description: "Manoj's developer blog where I share my learning.",
  other: {
    "theme-color": "rgb(255,255,255),rgb(24,24,27,1)",
    "color-scheme": "light dark",
    "twitter:card": "summary_large_image",
    "twitter:image":
      "https://pbs.twimg.com/profile_images/1663775518427344897/x_E7ceTt_400x400.jpg",
    "og:image":
      "https://pbs.twimg.com/profile_images/1663775518427344897/x_E7ceTt_400x400.jpg",
    "og:type": "website",
    "og:url": "https://personal-dev-blog-nu.vercel.app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProviderComponent>
          <div
            className={`${syne.variable} font-syne ${poopins.variable} font-poppins flex w-full bg-zinc-50 dark:bg-black text-zinc-800 dark:text-zinc-200`}
          >
            <div className="fixed inset-0 flex justify-center overflow-hidden overflow-y-scroll">
              <div className="flex w-full max-w-7xl">
                <div className="w-full h-fit min-h-screen backdrop-blur bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20">
                  <div className="relative w-full flex flex-col">
                    <Header />
                    {children}
                    <Footer />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 -z-10 grid place-items-center">
            <div className="moving-div"></div>
            <div className="moving-div"></div>
            <div className="moving-div"></div>
          </div>
        </ThemeProviderComponent>
      </body>
    </html>
  );
}
