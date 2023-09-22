"use client"
import { ThemeProvider } from "next-themes"
import { ReactNode, useEffect, useState } from "react"

interface ThemeProviderComponentProps {
    children: ReactNode
 }
const ThemeProviderComponent = ({ children }: ThemeProviderComponentProps) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <>{children}</>
    }
  return <ThemeProvider attribute="class">{ children }</ThemeProvider>
}

export default ThemeProviderComponent