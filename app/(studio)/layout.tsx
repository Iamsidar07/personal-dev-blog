import { Metadata } from "next";
import "../globals.css";
export const metadata: Metadata = {
    title: "Studio| Manoj DEV blog",
    description: "Manoj's developer blog where I share my learning."
}
export default function StudioLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}