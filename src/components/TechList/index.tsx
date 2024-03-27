"use client";

import React, { useLayoutEffect, useRef } from "react";
import { MdCircle } from "react-icons/md";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";

gsap.registerPlugin(ScrollTrigger);

type TechListProps = {
    heading: string;
    list: string[];
};

const TechList: React.FC<TechListProps> = ({ heading, list }): JSX.Element => {
    const component = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // create as many GSAP animations and/or ScrollTriggers here as you want...
            const tl = gsap.timeline({
                scrollTrigger: {
                    pin: true, // pin the trigger element while active
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 4,
                },
            });

            tl.fromTo(
                ".tech-row",
                {
                    x: (index) => {
                        return index % 2 === 0
                            ? gsap.utils.random(600, 400)
                            : gsap.utils.random(-600, -400);
                    },
                },
                {
                    x: (index) => {
                        return index % 2 === 0
                            ? gsap.utils.random(-600, -400)
                            : gsap.utils.random(600, 400);
                    },
                    ease: "power1.inOut",
                },
            );
        }, component);
        return () => ctx.revert(); // cleanup!
    }, []);

    const generateRandomHashColor = (): string => {
        // Generate random RGB values
        const r = Math.floor(Math.random() * 156) + 100; // Range: 100-255
        const g = Math.floor(Math.random() * 156) + 100; // Range: 100-255
        const b = Math.floor(Math.random() * 156) + 100; // Range: 100-255

        // Convert RGB values to hex format
        const hexColor = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;

        return hexColor;
    }


    return (
        <section
            className="wrapper overflow-hidden bg-slate-900"
            ref={component}>
            <Bounded as="div">
                <Heading size="xl" className="mb-8 text-center" as="h2">
                    {heading}
                </Heading>
            </Bounded>

            {list.map((tech_name, index) => (
                <div
                    key={index}
                    className="tech-row mb-8 flex items-center justify-center gap-4 text-slate-700"
                    aria-label={tech_name || ""}
                >
                    {Array.from({ length: 15 }, (_, index) => (
                        <React.Fragment key={index}>
                            <span
                                className={
                                    "tech-item text-8xl font-extrabold uppercase tracking-tighter"
                                }
                                style={{
                                    color: index === 7 && generateRandomHashColor() ? generateRandomHashColor() : "inherit",
                                }}
                            >
                                {tech_name}
                            </span>
                            <span className="text-3xl">
                                <MdCircle />
                            </span>
                        </React.Fragment>
                    ))}
                </div>
            ))}
        </section>
    );
};

export default TechList;