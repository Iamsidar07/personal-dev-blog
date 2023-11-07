import { Footer, Header, ThemeProviderComponent } from "@/components";
import "../globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manoj Kumar",
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
          <div className="dark:bg-dark">
            {" "}
            <Header />
            {children}
            <Footer />
          </div>
        </ThemeProviderComponent>
      </body>
    </html>
  );
}
