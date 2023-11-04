"use client";
import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";
import ToggleButton from "./ToggleButton";
import { BiMenuAltRight } from "react-icons/bi";
import { useRouter } from "next/navigation";
import { urlFromParams } from "@/utils";
const Header = () => {
  const [isShown, setIsShown] = useState(false);
  const router = useRouter();
  const [inputText, setInputText] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
    setTimeout(() => {
      const url = urlFromParams("query", e.target.value);
      router.push(url, { scroll: false });
    }, 700);
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInputText("");
    const url = urlFromParams("query", inputText);
    router.push(url, { scroll: false });
  };
  return (
    <header className="z-50 border-b sticky top-0 bg-white dark:bg-zinc-900 dark:border-zinc-800 ">
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-6 py-3">
        <Link href="/">
          <div className="flex items-center w-full">
            <Image
              src={"/manoj.svg"}
              width={50}
              height={50}
              alt="Manoj Logo"
              className="rounded-full object-cover w-12 h-12"
            />
          </div>
        </Link>
        <form
          className="w-full max-w-lg hidden md:flex"
          onSubmit={handleSubmit}
        >
          <input
            value={inputText}
            type="text"
            name="input"
            id="input"
            placeholder="Search keyword"
            spellCheck={false}
            className=" w-full px-3 py-3.5 outline-none border-none bg-white/90 dark:bg-zinc-800/90 ring-1 rounded-lg ring-zinc-900/5 dark:ring-white/10 dark:shadow-lg dark:shadow-zinc-800/90"
            onChange={handleChange}
          />
        </form>
        <ul className="items-center gap-2 rounded-full text-zinc-800 dark:text-zinc-200 bg-white/90 dark:bg-zinc-800/90 ring-1 ring-zinc-900/5 dark:ring-white/10 shadow-lg shadow-zinc-800/5 px-6 py-3 hidden sm:flex">
          <Link href="https://github.com/iamsidar07" target="_blank">
            <li className=" text-zinc-900 dark:text-zinc-200 hover:text-teal-600 dark:hover:text-teal-400 duration-200 cursor-pointer">
              Github
            </li>
          </Link>
          <Link href="https://www.linkedin.com/in/iamsidar/" target="_blank">
            <li className=" text-zinc-900 dark:text-zinc-200 hover:text-teal-600 dark:hover:text-teal-400 duration-200 cursor-pointer">
              LinkedIn
            </li>
          </Link>
          <li>
            <ToggleButton />
          </li>
        </ul>

        {isShown && (
          <ul className="flex flex-col absolute top-14 right-4 min-w-[50%] min-h-[150px] h-fit p-4 rounded-2xl items-center gap-2  text-zinc-800 dark:text-zinc-200 bg-white/90 dark:bg-zinc-800/90 ring-1 ring-zinc-900/5 dark:ring-white/10 shadow-lg shadow-zinc-800/5 px-3">
            <Link href="https://github.com/iamsidar07" target="_blank">
              <li className="px-3 py-1 text-zinc-900 dark:text-zinc-200 hover:text-teal-600 dark:hover:text-teal-400 duration-200 cursor-pointer">
                Github
              </li>
            </Link>
            <Link href="https://www.linkedin.com/in/iamsidar/" target="_blank">
              <li className="px-3 py-1 text-zinc-900 dark:text-zinc-200 hover:text-teal-600 dark:hover:text-teal-400 duration-200 cursor-pointer">
                LinkedIn
              </li>
            </Link>
          </ul>
        )}
        <div className="flex items-center gap-2">
          <div className="inline-block sm:hidden">
            <ToggleButton />
          </div>
          <BiMenuAltRight
            size={25}
            className="inline-block sm:hidden cursor-pointer"
            onClick={() => setIsShown((prev) => !prev)}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
