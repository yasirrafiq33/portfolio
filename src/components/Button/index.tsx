import React from "react";
import { MdArrowOutward } from "react-icons/md";
import clsx from "clsx";
import Link from 'next/link';

type ButtonProps = {
    link: string
    label: string;
    download: string;
    target: string;
    showIcon?: boolean;
    className?: string;
};

export default function Button({
    link,
    label,
    download,
    target,
    showIcon = true,
    className,
}: ButtonProps) {
    return (
        <Link
            href={link}
            download={download || null}
            target={target || '_self'}
            className={clsx(
                "group relative flex w-fit text-slate-800 items-center justify-center overflow-hidden rounded-md border-2 border-slate-900 bg-slate-50  px-4 py-2 font-bold transition-transform ease-out  hover:scale-105",
                className,
            )}
        >
            <span
                className={clsx(
                    "absolute inset-0 z-0 h-full translate-y-9 bg-yellow-300 transition-transform  duration-300 ease-in-out group-hover:translate-y-0",
                )}
            />
            <span className="relative flex items-center justify-center gap-2">
                {label} {showIcon && <MdArrowOutward className="inline-block" />}
            </span>
        </Link>
    );
}