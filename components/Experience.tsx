"use client"
import React from 'react';
import {experiencesData} from "@/lib/data";
import SectionHeader from "@/components/section-header";
import {motion} from "framer-motion";
import useSectionInView from "@/hooks/useSectionInView";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import useScrollY from "@/hooks/useScrollY";

function Experiences() {
    const {ref} = useSectionInView("Experience")
    const {reF, scaleProgress, opacityProgress} = useScrollY()
    return <>
        <motion.div
            ref={reF}
            style={{
                opacity: opacityProgress,
                scale: scaleProgress
            }}
            transition={{ opacity: { duration: 0.5 }, scale: { duration: 0.5 } }} // Smooth transition for opacity & scale
        >
            <motion.section
                ref={ref}
                className='text-center  mt-12 sm:mt-18 scroll-mt-48 mx-auto w-full sm:w-[90%] md:w-[80%] lg:w-[70%]'
                id="experience"
                initial={{opacity: 0, y: 100}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.150}}
            >
                <div className='!text-center mb-14'>
                    <SectionHeader>
                        Experiences
                    </SectionHeader>
                </div>
                <VerticalTimeline>
                    {experiencesData.map((job, index) =>
                        <VerticalTimelineElement
                            contentStyle={{
                                background: "#f3f4f6",
                                boxShadow: "0px 0px 30px rgba(255, 255, 255, 0.2))",
                                border: "1px solid rgba(0, 0, 0, 0.05)",
                                textAlign: "left",
                                padding: "10px 15px",
                            }}
                            contentArrowStyle={{
                                borderRight:
                                    "0.4rem solid #9ca3af"
                            }}
                            date={job.date}
                            icon={job.icon}
                            iconStyle={{
                                background: "white",
                                fontSize: "12px",
                                marginTop: '5px',
                                boxShadow: "0 0 0 2px #fff,inset 0 2px 0 rgba(0,0,0,.08),0 3px 0 4px rgba(0,0,0,.05)"
                            }}
                        >
                            <div>
                                <h3 className="font-semibold text-[15px] text-gray-800  capitalize">{job.title}</h3>
                                <p className="font-normal italic !text-[13px] text-gray-500  !mt-0">{job.location}</p>
                                <p className="!mt-1 !text-[12px] !leading-5 !font-normal text-gray-600 dark:text-white/75">
                                    {job.description}
                                </p>
                            </div>
                        </VerticalTimelineElement>
                    )}
                </VerticalTimeline>
            </motion.section>
        </motion.div>
    </>
}

export default Experiences;