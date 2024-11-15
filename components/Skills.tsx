'use client'
import React from 'react';
import SectionHeader from "@/components/section-header";
import {skillsData} from "@/lib/data";
import Image from "next/image";
import {motion} from "framer-motion";
import useSectionInView from "@/hooks/useSectionInView";
import useScrollY from "@/hooks/useScrollY";


function Skills() {
    const {ref} = useSectionInView("Skills")
    const fadeIn = {
        initial: {
            opacity:0,
            y: 100
        },
        animate: (index: number)=>{
            return {
                opacity: 1,
                y: 0,
                transition: {
                    delay: 0.05 * index,
                }
            }
        }
    }
    return <>

            <motion.section
                ref={ref}
                className='text-center  mt-12 sm:mt-18 scroll-mt-48 mx-auto w-full sm:w-[90%] md:w-[80%] lg:w-[70%]'
                id="skills"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{delay:0.150}}
            >
                <div className='!text-center mb-14'>
                    <SectionHeader>
                        My Skills
                    </SectionHeader>
                </div>
                <ul className="flex flex-wrap gap-y-10"
                >
                    {skillsData?.map((skill, index) =>
                        <motion.li
                            className="w-[20%] flex flex-col items-center gap-y-3 !text-center" key={index}
                            variants={fadeIn}
                            initial="initial"
                            whileInView="animate"
                            custom={index}
                        >
                            <div className='holder flex justify-center items-center !w-[32px] !h-[32px] text-center'>
                                <Image width={32} height={32} className="!w-[100%] " src={skill.imageUrl}
                                       alt={`An image for ${skill.skill} that is one of my skills`}/>
                            </div>
                            <p className="font-medium dark:text-gray-400 text-gray-700 text-[13px]">{skill.skill}</p>
                        </motion.li>
                    )}
                </ul>
            </motion.section>
    </>
}

export default Skills;