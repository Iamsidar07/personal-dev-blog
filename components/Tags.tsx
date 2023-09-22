"use client"
import { Tag } from '@/types';
import { urlFromParams } from '@/utils';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
interface TagsProps {
    options: Tag[]
}
const Tags = ({ options }: TagsProps) => {
    const router = useRouter();
    const [selectedOption, setSelectedOption] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionSelect = (option: string) => {
        let url;
        if (option === selectedOption) {
            setSelectedOption("");
            url = urlFromParams("tag", "");
        } else {
            setSelectedOption(option);
            url = urlFromParams("tag", option);
        }
        setIsOpen(false);
        router.push(url, { scroll: false })
    };

    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    onClick={toggleDropdown}
                    type="button"
                    className="inline-flex justify-between sm:min-w-32 px-4 py-3.5 text-sm font-medium border border-transparent rounded-md hover:bg-teal-500 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-indigo-500 transition-all duration-300 bg-zinc-50 dark:bg-zinc-800/90 ring-1 ring-zinc-900/5 dark:ring-white/10 dark:shadow-lg dark:shadow-zinc-800/90"
                    id="options-menu"
                    aria-haspopup="listbox"
                    aria-expanded={isOpen}
                >
                    {selectedOption || 'All'}
                    <svg
                        className={`-mr-1 ml-2 h-5 w-5 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
                            }`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </button>
            </div>
            {isOpen && (
                <ul
                    className="origin-top-right absolute right-0 mt-2 w-32 rounded-lg shadow-lg bg-white dark:bg-zinc-900 ring-1 dark:ring-white/10 ring-opacity-5 transition-opacity duration-300 transform scale-100 z-10 py-3 gap-2"
                    role="listbox"
                    aria-labelledby="options-menu"
                >
                    <li>
                        <button
                            type="button"
                            className="block w-full px-4 py-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800/90"
                            role="option"
                            onClick={() => handleOptionSelect("all")}
                        >
                            All
                        </button>
                    </li>
                    {options.map((option) => (
                        <li key={option._id}>
                            <button
                                type="button"
                                className="block w-full px-4 py-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800/90"
                                role="option"
                                onClick={() => handleOptionSelect(option.title)}
                            >
                                {option.title}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Tags;
