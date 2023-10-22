export default function Loading() {
  return (
    <main className="flex flex-col min-h-screen">
      <article>
        <div className="w-full h-72 bg-zinc-100 dark:bg-zinc-800 animate-pulse"></div>
        <div className="p-2 md:p-6">
          <div className=" bg-zinc-100 dark:bg-zinc-800 animate-pulse w-32 h-7 px-6 py-1.5 text-sm"></div>
          <section className="flex flex-col gap-2 my-4">
            <h1 className=" bg-zinc-100 dark:bg-zinc-800 animate-pulse text-2xl w-full h-7 lg:text-6xl font-bold"></h1>
            <div className="flex items-center gap-1.5">
              <div className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 animate-pulse "></div>
              <span className="w-36 h-5 text-slate-800 text-sm dark:text-zinc-500 pr-3 border-r-2 dark:border-r-zinc-600 bg-zinc-100 dark:bg-zinc-800 animate-pulse "></span>
              <span className="w-28 h-5 text-slate-800 text-sm dark:text-zinc-500 bg-zinc-100 dark:bg-zinc-800 animate-pulse "></span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-28 h-5 bg-zinc-100 dark:bg-zinc-800 animate-pulse "></div>

              <div className="w-28 h-5 bg-zinc-100 dark:bg-zinc-800 animate-pulse "></div>

              <div className="w-28 h-5 bg-zinc-100 dark:bg-zinc-800 animate-pulse "></div>
            </div>
          </section>
          <section className="mt-12 max-w-4xl mx-auto flex flex-col gap-2">
            {Array(25)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className={`bg-zinc-100 dark:bg-zinc-800 animate-pulse w-full h-7 `}
                ></div>
              ))}
          </section>
        </div>
      </article>
    </main>
  );
}
