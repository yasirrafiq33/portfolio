"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import usePrefersReducedMotion from "@/hooks/usePrefersReducedMotion";


import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";

import { BiLogoJavascript } from "react-icons/bi";
import { SiNestjs } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs, FaReact, FaVuejs, FaAngular, FaNpm, FaGithub, FaFigma, FaJira, FaCode, FaJenkins, FaYarn, FaAws, FaDigitalOcean, FaGoogle } from 'react-icons/fa6'
import clsx from "clsx";

gsap.registerPlugin(ScrollTrigger);

type FrameworkProps = {
    heading: string;
    list: string[];
};

const Frameworks: React.FC<FrameworkProps> = ({ heading, list }): JSX.Element => {
    const container = useRef(null);
    const prefersReducedMotion = usePrefersReducedMotion();
    gsap.registerPlugin(useGSAP);

    const icons: any = {
        js: <BiLogoJavascript />,
        nodejs: <FaNodeJs />,
        nestjs: <SiNestjs />,
        nextjs: <TbBrandNextjs />,
        angular: <FaAngular />,
        react: <FaReact />,
        vue: <FaVuejs />,
        npm: <FaNpm />,
        github: <FaGithub />,
        figma: <FaFigma />,
        jira: <FaJira />,
        code: <FaCode />,
        jenkins: <FaJenkins />,
        yarn: <FaYarn />,
        aws: <FaAws />,
        digitalocean: <FaDigitalOcean />,
        google: <FaGoogle />,
    };

    useGSAP(
        () => {
            const tl = gsap.timeline({
                repeat: -1,
                defaults: { ease: "power2.inOut" },
            });

            tl.to(
                ".signal-line",
                {
                    keyframes: [
                        { backgroundPosition: "0% 0%" },
                        {
                            backgroundPosition: "100% 100%",
                            stagger: { from: "center", each: 0.3 },
                            duration: 1,
                        },
                    ],
                },
                "-=1.4",
            );

            tl.to(
                ".pulsing-icon",
                {
                    keyframes: [
                        {
                            opacity: 1,
                            stagger: {
                                from: "center",
                                each: 0.3,
                            },
                            duration: 1,
                        },
                        {
                            opacity: 0.4,
                            duration: 1,
                            stagger: {
                                from: "center",
                                each: 0.3,
                            },
                        },
                    ],
                },
                "-=2",
            );
        },
        { scope: container },
    );

    return (
        <section
            className="wrapper overflow-hidden bg-slate-800">
            <Bounded as="div">
                <Heading size="xl" className="mb-8 text-center" as="h2">
                    {heading}
                </Heading>
                <div ref={container} className="mt-20 flex flex-col items-center justify-center md:flex-row">
                    {list.map((item, index) => (
                        <React.Fragment key={item}>
                            <div className="pulsing-icon flex aspect-square shrink-0 items-center 
                            justify-center rounded-full border border-blue-50/300 bg-blue-50/25 p-3 text-3xl 
                            text-blue-100 opacity-90
                            md:text-4xl lg:text-5xl">
                                {icons && icons[item]}
                            </div>
                            {index > -1 && index < list.length - 1 && <div
                                className={clsx("signal-line", index >= Math.floor(list.length / 2) ? "rotate-180" : "rotate-0")}></div>}
                        </React.Fragment>
                    ))}
                </div>
            </Bounded>

        </section>
    );
};



export default Frameworks;