"use client"
import { urlFromParams } from '@/utils'
import { useRouter } from 'next/navigation'
import React, { ChangeEvent, FormEvent, useState } from 'react'

const Search = () => {
    const router = useRouter();
    const [inputText, setInputText] = useState("")
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);
    }
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setInputText("")
        const url = urlFromParams("query", inputText);
        router.push(url, { scroll: false });
    }
    return (
        <form className='sm:flex-1' onSubmit={handleSubmit}>
            <input
                value={inputText}
                type="text"
                name="input"
                id="input"
                placeholder='Search keyword'
                className=' w-full px-3 py-3.5 outline-none border-none bg-white/90 dark:bg-zinc-800/90 ring-1 rounded-lg ring-zinc-900/5 dark:ring-white/10 dark:shadow-lg dark:shadow-zinc-800/90' onChange={handleChange} />
        </form>
    )
}

export default Search