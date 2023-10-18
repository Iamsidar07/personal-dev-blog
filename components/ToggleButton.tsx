"use client"
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
const ToggleButton = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    const toggleTheme = () => {
        setTheme(theme == 'dark' ? 'light' : 'dark');
    };
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }
    return (
        <button
            onClick={toggleTheme}
            className={`${theme == 'dark' ? 'bg-gray-800 dark:bg-zinc-800/90 ring-1 dark:ring-white/10 shadow-lg shadow-white/10 text-white' : 'bg-teal-200 text-black'
                } w-12 h-6 rounded-full relative transition-colors duration-300 focus:outline-none`}
        >
            <div
                className={`${theme == 'dark' ? 'translate-x-8' : 'translate-x-0'
                    } absolute left-0 top-0 w-6 h-6 bg-teal-500 dark:bg-white rounded-full shadow-md transform transition-transform duration-300`}
            ></div>

        </button>
    );
};

export default ToggleButton;
