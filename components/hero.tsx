"use client";
import { useState, useEffect } from "react";
import avatar from "../public/avatar.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { HiDownload } from "react-icons/hi";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { GrContactInfo } from "react-icons/gr";
import useWindowSize from "../hooks/useWindowSize";
import useSectionInView from "@/hooks/useSectionInView"

const Hero = () => {
    const {ref} = useSectionInView("Home")
    const [scrollPosition, setScrollPosition] = useState(0);
    const [aboutSectionTop, setAboutSectionTop] = useState(0); // Track the position of the About section
    const [imagePosition, setImagePosition] = useState("hero"); // Control the position of the image
    const { width } = useWindowSize(); // Use custom hook to track window size


    // Track scroll position and About section position
    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY ); // Track vertical scroll position
        };

        // Get the position of the "About" section
        const aboutSection = document.getElementById("about");
        if (aboutSection) {
            
            const rect  = document.getElementById("hero")?.getBoundingClientRect();
            setAboutSectionTop(window.scrollY + (rect ? rect.top : 0 )); // Get the top position of the About section
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Determine if the "About" section has reached the top of the viewport
    useEffect(() => {
        if (scrollPosition >= aboutSectionTop) {
            setImagePosition("about"); // Move the image when scrolled to About section
        } else {
            setImagePosition("hero"); // Return image to Hero section when scrolling back up
        }
    }, [scrollPosition, aboutSectionTop]);

    return (
        <section
            ref={ref}
            id="hero"
            className="mb-24 flex gap-5 w-full md:h-[100vh] flex-col-reverse pt-32 md:pt-0 justify-center items-center text-center sm:mb-0 md:flex-row scroll-mt-[100rem]"
        >
            <div className="flex w-full text-[12px] justify-center items-center flex-col md:text-start md:w-[50%] lg:w-[50%]">
                <motion.div
                    className="hidden sm:flex w-full text-start gap-x-2 items-center"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <span className="inline-block w-[7px] h-[7px] bg-green-600 rounded-full"></span>
                    <span className="inline-block">Available for work</span>
                </motion.div>
                <motion.h1
                    className="mb-10 w-full px-3 sm:px-0 mt-4 text-2xl font-medium !leading-[1.5] lg:text-4xl"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <span className="font-[500]">Hello,</span>
                    <span className="font-[900] md:text-gray-950"> I'm Muhammad Atya.</span>
                    <br />
                    <span className="font-[500]"> a Front-End developer</span> with{" "}
                    <span className="font-[500]">a love for building </span> cool{" "}
                    <span className="italic">websites</span>. My focus is{" "}
                    <span className="font-[500]">React &gt; Next.js .</span>
                    <br />
                    <span className="mt-6 sm:mt-0 block">
                        <span className="font-[500] text-[30px]">I'm not the </span>
                        <span className="italic font-[600] md:text-gray-950 text-[32px]">best,</span>{" "}
                        <span className="font-[500] text-[30px]">But I really do my </span>
                        <span className="text-[32px]">best.</span>
                    </span>
                </motion.h1>

                <motion.div
                    className="flex items-center justify-center gap-x-3 text-[14px] w-full text-start text-lg font-medium"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.1,
                    }}
                >
                    <div className="wrapper">
                        <a href="/CV.pdf" download className="button">
                            <div className="icon text-gray-950 dark:text-gray-300 inline-block flex text-gray-950 justify-center items-center">
                                <HiDownload />
                            </div>
                            <span className="ml-2 text-gray-950 dark:text-gray-300 text-nowrap text-gray-950">
                                Download CV
                            </span>
                        </a>
                    </div>
                    <div className="wrapper">
                        <a href="#contact"
                        className="button">
                            <div className="icon text-gray-950 dark:text-gray-300 inline-block flex justify-center items-center">
                                <GrContactInfo />
                            </div>
                            <span className="ml-1 text-gray-950 dark:text-gray-300 text-nowrap">
                                Contact Me
                            </span>
                        </a>
                    </div>
                    <div className="wrapper">
                        <a
                            href="https://www.linkedin.com/in/muhammadatya"
                            target="_blank"
                            className="button"
                        >
                            <div className="icon text-gray-950 dark:text-gray-300 inline-block flex justify-center items-center">
                                <BsLinkedin />
                            </div>
                            <span className="text-gray-950 dark:text-gray-300 ml-7">LinkedIn</span>
                        </a>
                    </div>
                    <div className="wrapper">
                        <a
                            href="https://github.com/Moatyaa"
                            target="_blank"
                            className="button"
                        >
                            <div className="icon text-gray-950 dark:text-gray-300 inline-block flex justify-center items-center">
                                <FaGithubSquare />
                            </div>
                            <span className="ml-7 text-gray-950 dark:text-gray-300">Github</span>
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Apply motion scroll animation only on large screen */}
            {width? width >= 1024 ? (
                <motion.div
                    className="flex w-full transition-all duration-[0.855s] md:w-[40%] lg:w-[50%] items-center justify-center"
                    style={{
                        transform:
                            imagePosition === "about"
                                ? `translateX(-120%) translateY(130%)` // Move image to the left when About section is reached
                                : "translateX(0) translateY(0)", // Return image to original position when scrolling up
                    }}
                >
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                type: "tween",
                                duration: 0.2,
                            }}
                        >
                            <Image
                                src={avatar}
                                alt="Muhammad Atya Avatar"
                                width={450}
                                height={450}
                                quality="95"
                                priority={true}
                                className="rounded-3xl object-cover border-white custom-shadow"
                            />
                        </motion.div>
                    </div>
                </motion.div>
            ) : (
                <div className="flex w-full md:w-[40%] lg:w-[50%] items-center justify-center">
                    <div className="relative">
                        <Image
                            src={avatar}
                            alt="Muhammad Atya Avatar"
                            width={450}
                            height={450}
                            quality="95"
                            priority={true}
                            className="rounded-3xl object-cover border-white"
                        />
                    </div>
                </div>
            ):''}
        </section>
    );
};

export default Hero;
