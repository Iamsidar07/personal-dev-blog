"use client"
import { Category } from '@/types'
import { urlFromParams } from '@/utils'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { BiCategoryAlt } from "react-icons/bi"
interface CategoryListProps {
    categories: Category[]
}
const CategoryList = ({ categories }: CategoryListProps) => {
    const router = useRouter();
    const [selectedCategory, setSelectedCategory] = useState("");

    const handleClick = (val: string) => {
        let url;
        if (val === selectedCategory) {
            setSelectedCategory("");
            url = urlFromParams("category", "");
        } else {
            setSelectedCategory(val);
            url = urlFromParams("category", val);
        }
        router.push(url, { scroll: false })
    }
    return (
        <div className='flex flex-col gap-4 lg:flex-[0.3] w-full h-full lg:sticky  lg:top-[109px]'>
            <h2 className='px-4 flex items-center gap-2 group hover:text-teal-400 duration-200'>Categories
                <BiCategoryAlt size={25} className='text-zinc-950 dark:text-zinc-100 group-hover:text-teal-400 duration-200' /></h2>
            <ul className='flex flex-col gap-2'>
                <li className={`py-3 px-4 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800/90 duration-200 cursor-pointer ${selectedCategory === "all" && "bg-teal-500"}`} onClick={() => handleClick("all")} >
                    All
                </li>
                {
                    categories.map((category) => <li className={`hover:bg-zinc-100 dark:hover:bg-zinc-800/90 py-3 px-4 rounded-full duration-200 cursor-pointer ${selectedCategory === category.title && "bg-teal-500"}`} onClick={() => handleClick(category.title)} key={category._id}>
                        {category.title}
                    </li>)
                }
            </ul>
        </div>
    )
}

export default CategoryList