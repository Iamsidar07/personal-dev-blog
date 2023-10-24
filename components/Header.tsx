"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ToggleButton from "./ToggleButton";
import { BiMenuAltRight } from "react-icons/bi";
const Header = () => {
  const [isShown, setIsShown] = useState(false);
  return (
    <header className="px-5 h-14 z-50 border-b sticky top-0 bg-white dark:bg-zinc-900 dark:border-b-zinc-700 ">
      <nav className="flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center gap-1.5 w-full">
            <Image
              src={"/manoj.svg"}
              width={50}
              height={50}
              alt="Manoj Logo"
              className="rounded-full object-cover w-12 h-12"
            />
            <h2>DEV</h2>
          </div>
        </Link>
        <ul className="items-center gap-2 rounded-full text-zinc-800 dark:text-zinc-200 bg-white/90 dark:bg-zinc-800/90 ring-1 ring-zinc-900/5 dark:ring-white/10 shadow-lg shadow-zinc-800/5 px-3 hidden sm:flex">
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
          <ToggleButton />
          <BiMenuAltRight
            size={35}
            className="inline-block sm:hidden cursor-pointer"
            onClick={() => setIsShown((prev) => !prev)}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
