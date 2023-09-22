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
            <button className={`bg-transparent outline-none border-none hover:font-bold duration-200 ${order == "asc" && "font-bold font-mono"}`} onClick={() => handleClick("asc")} title="Sort Ascending Order">
                <PiSortAscendingThin size={25} className='text-zinc-950 dark:text-zinc-100 hover:text-teal-400 dark:hover:text-teal-600 duration-200' />
            </button>
            <button className={`bg-transparent outline-none border-none hover:font-bold duration-200 ${order == "desc" && "font-bold font-mono"}`} onClick={() => handleClick("desc")} title="Sort Descending Order">
                <PiSortDescendingThin size={25} className='text-zinc-950 dark:text-zinc-100 hover:text-teal-400 dark:hover:text-teal-600 duration-200' />
            </button>
        </div>
    )
}

export default Order;