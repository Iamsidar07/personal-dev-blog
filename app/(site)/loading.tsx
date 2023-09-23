const Loading = () => {
  return (
    <main className="flex flex-col lg:flex-row lg:flex-wrap items-center lg:items-stretch gap-1 lg:gap-2 justify-end  min-h-screen p-4 lg:p-6">
      <section className="lg:flex-[0.3]  w-full  h-44 lg:w-[211px] lg:h-[212px] bg-zinc-100 dark:bg-zinc-800 animate-pulse rounded-2xl"></section>
      <section className="w-full flex-1 h-72 lg:h-[75%] flex flex-col gap-2 ">
        <div className="w-full h-12 bg-zinc-100 dark:bg-zinc-800 animate-pulse lg:w-[704px] lg:h-[52px] rounded-2xl"></div>
        <div className="rounded-2xl w-full h-full bg-zinc-100 dark:bg-zinc-800 animate-pulse lg:w-[704px] lg:h-[474px]"></div>
      </section>
      <section className=" w-full lg:w-72 h-full flex flex-col gap-2  mt-12 sm:mt-0">
        <div className="w-full  bg-zinc-100 dark:bg-zinc-800 animate-pulse lg:w-[288px] h-[408px] rounded-2xl"></div>
        <div className="w-full h-40 bg-zinc-100 dark:bg-zinc-800 animate-pulse lg:w-[288px] lg:h-[173px] rounded-2xl"></div>
      </section>
    </main>
  )
}

export default Loading