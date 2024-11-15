"use client";
import { motion } from "framer-motion";
import React, { useContext } from 'react';
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import {ActiveSectionContext, useActiveSection} from "@/Context/ActiveSectionContext";
import useSectionInView from "@/hooks/useSectionInView";

function Navbar() {
    const { activeSection, setActiveSection, setLastClickTime } = useActiveSection();
    return (
        <header className="z-[8888] relative">
            <motion.div
                className="fixed bg-white top-0 left-1/2 w-full h-[4.5rem] border rounded-none border-white border-opacity-40 backdrop-blur-80 bg-opacity-80 shadow-lg shadow-black/[0.03] sm:w-[36rem] sm:top-6 sm:h-[3.25rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
                initial={{ x: "-50%", y: -100, opacity: 0 }}
                animate={{ x: "-50%", y: 0, opacity: 1 }}
            ></motion.div>
            <motion.nav
                className="fixed flex h-12 left-1/2 sm:top-[1.7rem] sm:h-[initial] sm:py-0"
                initial={{ x: "-50%", y: -100, opacity: 0 }}
                animate={{ x: "-50%", y: 0, opacity: 1 }}
            >
                <ul className="flex w-[22rem] text-[0.9rem] font-medium text-gray-500 flex-wrap justify-center items-center gap-y-1 sm:flex-nowrap sm:w-[initial] sm:gap-[5] ">
                    {links.map((link) => (
                        <li className="flex justify-center items-center relative h-3/4" key={link.hash}>
                            <Link
                                onClick={() => {
                                    setActiveSection(link.name);
                                    setLastClickTime(Date.now());
                                }
                            }
                                className={clsx(
                                    "flex w-full items-center justify-center px-3 dark:text-white py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                                    {
                                        "text-gray-950 sm:text-gray-950": activeSection === link.name,
                                    }
                                )}
                                href={link.hash}
                            >
                                {link.name}
                            </Link>
                            {activeSection === link.name && (
                                <motion.span
                                    className="absolute bg-gray-200 bg-opacity-70 dark:bg-gray-100 dark:bg-opacity-20 -z-[8888] w-full h-full top-0 left-0 sm:rounded-full"
                                    layoutId="activeSection"
                                    transition={{
                                        type: "spring",
                                        stiffness: 380,
                                        damping: 30,
                                    }}
                                ></motion.span>
                            )}
                        </li>
                    ))}
                </ul>
            </motion.nav>
        </header>
    );
}


export default Navbar;
