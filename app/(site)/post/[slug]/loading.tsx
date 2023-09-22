export default function Loading() {
    return (
        <article className="p-2 lg:p-12">
            <span className="px-6 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 animate-pulse w-32 h-4"></span>
            <section className="flex flex-col gap-2 my-4">
                <div className="w-full h-8 bg-zinc-100 dark:bg-zinc-800 animate-pulse"></div>
                <div className="w-1/3 h-8 bg-zinc-100 dark:bg-zinc-800 animate-pulse mt-1"></div>
                <div className="flex items-center gap-2 py-2">
                    <div className="w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-800 animate-pulse"></div>
                    <span className="w-32 h-4 bg-zinc-100 dark:bg-zinc-800 animate-pulse"></span>
                    <span className="w-44 h-4  bg-zinc-100 dark:bg-zinc-800 animate-pulse"></span>
                </div>
                <div className="flex items-center gap-2">
                    {
                        Array(8).fill(0).map((_, index) => <div key={index} className="w-10 h-4 rounded-full bg-zinc-100 dark:bg-zinc-800 animate-pulse"></div>)
                    }
                </div>

                <div className="w-full h-1/3 max-h-96 rounded-2xl my-4 aspect-video bg-zinc-100 dark:bg-zinc-800 animate-pulse"></div>
            </section>
            <section>
                {
                    Array(8).fill(0).map((_, index) => <div key={index} className="w-full mb-2 h-4 rounded-full bg-zinc-100 dark:bg-zinc-800 animate-pulse"></div>)
                }
            </section>
        </article>
    );
}