"use client"

import { urlFromParams } from "@/utils";
import { useRouter } from "next/navigation";
import { useState } from "react"
import { PiSortAscendingThin, PiSortDescendingThin } from "react-icons/pi"
const Order = () => {
    const router = useRouter();
    const [order, setOrder] = useState("");

    const handleClick = (val: string) => {
        let url;
        if (val === order) {
            setOrder("");
            url = urlFromParams("order", "")
        } else {
            setOrder(val);
            url = urlFromParams("order", val);
        }
        router.push(url, { scroll: false });
    }
    return (
        <div className='flex items-center gap-2'>
            <button className={`h-full w-12 flex items-center justify-center outline-none border-none hover:font-bold duration-200  bg-white/90 dark:bg-zinc-800/90 ring-1 rounded ring-zinc-900/5 dark:ring-white/10 dark:shadow-lg dark:shadow-zinc-800/90 ${order == "asc" && "font-bold"}`} onClick={() => handleClick("asc")} title="Sort Ascending Order">
                <PiSortAscendingThin size={25} className='text-zinc-950 dark:text-zinc-100 hover:text-teal-400 dark:hover:text-teal-600 duration-200' />
            </button>
            <button className={` h-full  w-12 flex items-center justify-center outline-none border-none hover:font-bold duration-200  bg-white/90 dark:bg-zinc-800/90 ring-1 rounded ring-zinc-900/5 dark:ring-white/10 dark:shadow-lg dark:shadow-zinc-800/90 ${order == "desc" && "font-bold"}`} onClick={() => handleClick("desc")} title="Sort Descending Order">
                <PiSortDescendingThin size={25} className='text-zinc-950 dark:text-zinc-100 hover:text-teal-400 dark:hover:text-teal-600 duration-200' />
            </button>
        </div>
    )
}

export default Order;