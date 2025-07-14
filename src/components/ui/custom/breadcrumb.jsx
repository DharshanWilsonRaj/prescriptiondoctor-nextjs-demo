"use client";

import { HomeIcon, ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";

export default function CustomBreadCrumb() {
    const pathname = usePathname();

    // Split the pathname into segments
    const segments = pathname.split("/").filter((seg) => seg !== "");

    const buildHref = (index) =>
        "/" + segments.slice(0, index + 1).join("/");

    return (
        <nav className=" py-3 bg-secondary">
            <div className="container  px-3 flex items-center space-x-2 text-sm text-muted-foreground">
                <Link href="/" className="text-primary hover:underline flex items-center gap-1">
                    <span>Home</span>
                </Link>

                {segments.map((seg, idx) => (
                    <React.Fragment key={idx}>
                        <ChevronRight className="w-4 h-4" />
                        {idx === segments.length - 1 ? (
                            <span className="capitalize text-foreground">{decodeURIComponent(seg)}</span>
                        ) : (
                            <Link
                                href={buildHref(idx)}
                                className="hover:underline capitalize text-primary"
                            >
                                {decodeURIComponent(seg)}
                            </Link>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </nav>
    );
}
