"use client"
import React from 'react';
import {motion} from "framer-motion";
import SectionHeader from "@/components/section-header";
import useSectionInView from "@/hooks/useSectionInView";
import useScrollY from "@/hooks/useScrollY";

function About() {
    const {ref} = useSectionInView("About")
    const {reF, scaleProgress, opacityProgress} = useScrollY()

    return <>
        <motion.div
            ref={reF}
            style={{
                opacity: opacityProgress,
                scale: scaleProgress
            }}
        >
            <motion.section
                ref={ref}
                className="mb-24 w-[95%] scroll-mt-28  pt-5 lg:w-[50%] md:pt-8 ms-auto leading-9"
                id="about"
                initial={{opacity: 0, y: -100}}
                animate={{opacity: 1, y: 0}}
                transition={{delay:0.150}}
            >
                <SectionHeader>
                    About Me
                </SectionHeader>
                <motion.p
                    className="text-gray-500 text-[15px] dark:text-gray-200"
                    initial={{opacity: 0, x: 100}}
                    animate={{opacity: 1, x: 0}}
                    transition={{delay:0.178}}
                >
                    Hi, I’m Muhammad Atya, a passionate Front-End Developer based in Cairo, Egypt. I specialize in creating
                    web applications that provide a smooth user experience across all devices. With a
                    background in Electronics and Electrical Communications Engineering, I have a strong technical
                    foundation, but my real passion lies in web development and building dynamic, user-centered interfaces.
                </motion.p>
                <motion.p
                    className="text-gray-500 text-[15px] mt-5 dark:text-gray-200"
                    initial={{opacity: 0, x: -100}}
                    animate={{opacity: 1, x: 0}}
                    transition={{delay:0.8}}
                >
                    I have experience working with React, Next.js, and JavaScript, I’m always exploring new tools and
                    techniques to improve my skills. Enjoy solving complex problems, optimizing performance, and making
                    websites that not only look great but work seamlessly.
                </motion.p>
                <motion.p
                    className="text-gray-500 text-[15px] mt-5 dark:text-gray-200"
                    initial={{opacity: 0, x: 100}}
                    animate={{opacity: 1, x: 0}}
                    transition={{delay:0.83}}
                >
                    When I’m not coding, you’ll likely find me researching new trends in web development, refining my
                    skills, or working on personal projects.
                </motion.p>
                <motion.p
                    className="text-gray-500 text-[15px] mt-5 dark:text-gray-200"
                    initial={{opacity: 0, x: -100}}
                    animate={{opacity: 1, x: 0}}
                    transition={{delay:0.85}}
                >
                    If you’re looking for someone who’s dedicated, detail-oriented, and always striving to deliver the best, feel free to reach out. I’m not perfect, but I always give my best to everything I do.
                </motion.p>
            </motion.section>
        </motion.div>
    </>
}
export default About;