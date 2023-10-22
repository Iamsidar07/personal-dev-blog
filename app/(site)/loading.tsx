const Loading = () => {
  return (
    <main className="flex flex-col lg:flex-row lg:flex-wrap items-center lg:items-stretch gap-1 lg:gap-2 justify-end  min-h-screen p-4 lg:p-6">
      <section className="lg:flex-[0.3]  w-full flex flex-col gap-2  h-44 lg:w-[211px] lg:h-[212px] rounded-2xl">
        <div className="w-full h-12 rounded-full bg-zinc-100 dark:bg-zinc-800 animate-pulse "></div>
        <div className="w-full h-12 rounded-full bg-zinc-100 dark:bg-zinc-800 animate-pulse "></div>
        <div className="w-full h-12 rounded-full bg-zinc-100 dark:bg-zinc-800 animate-pulse "></div>
      </section>
      <section className="w-full flex-1 h-72 lg:h-[75%] flex flex-col gap-8 ">
        <div className="w-full h-12 bg-zinc-100 dark:bg-zinc-800 animate-pulse lg:w-[704px] lg:h-[52px] rounded flex flex-col gap-2"></div>
        <div className="w-full h-full lg:w-[704px] lg:h-[474px] space-y-2">
          <div className="h-[85%] full bg-zinc-100 dark:bg-zinc-800 animate-pulse "></div>
          <div className="w-full h-7 bg-zinc-100 dark:bg-zinc-800 animate-pulse "></div>
          <div className="w-[80%] h-7 bg-zinc-100 dark:bg-zinc-800 animate-pulse "></div>
        </div>
      </section>
      <section className=" w-full lg:w-72 h-full flex flex-col gap-2  mt-12 sm:mt-0">
        <div className="w-full flex flex-col gap-2 items-center lg:w-[288px] h-[408px] rounded-2xl">
          <div className="w-48 h-48 rounded-full bg-zinc-100 dark:bg-zinc-800 animate-pulse "></div>
          <div className="w-[80%] h-6 bg-zinc-100 dark:bg-zinc-800 animate-pulse "></div>
          <div className="w-full h-6 bg-zinc-100 dark:bg-zinc-800 animate-pulse "></div>
        </div>

        <div className="w-full  h-40 lg:w-[288px] lg:h-[173px] flex flex-col items-start gap-2 rounded-2xl">
          <div className="w-3/4 h-8  bg-zinc-100 dark:bg-zinc-800 animate-pulse "></div>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded bg-zinc-100 dark:bg-zinc-800 animate-pulse "></div>
            <div className="w-12 h-12 rounded bg-zinc-100 dark:bg-zinc-800 animate-pulse "></div>
            <div className="w-12 h-12 rounded bg-zinc-100 dark:bg-zinc-800 animate-pulse "></div>
            <div className="w-12 h-12 rounded bg-zinc-100 dark:bg-zinc-800 animate-pulse "></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Loading;
