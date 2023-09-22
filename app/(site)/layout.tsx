import { Footer, Header, ThemeProviderComponent } from '@/components'
import '../globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Manoj DEV blog",
  description: "Manoj's developer blog where I share my learning."
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <ThemeProviderComponent>
        <body className="flex w-full bg-zinc-50 dark:bg-black text-zinc-800 dark:text-zinc-200">
          <div>
            <div className="fixed inset-0 flex justify-center overflow-hidden overflow-y-scroll">
              <div className="flex w-full max-w-7xl">
                <div className="w-full h-fit min-h-screen backdrop-blur bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20">
                  <div className='relative w-full flex flex-col'>
                    <Header />
                    {children}
                    <Footer />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='absolute inset-0 -z-10 grid place-items-center'>
            <div className="moving-div"></div>
            <div className="moving-div"></div>
            <div className="moving-div"></div>
          </div>
        </body>
      </ThemeProviderComponent>
    </html>
  )
}
