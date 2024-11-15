"use client";
import React from "react";
import {coursesData, projectsData} from "@/lib/data";
import useSectionInView from "@/hooks/useSectionInView";
import Course from "@/components/course";
import SectionHeader from "@/components/section-header";

export default function Courses() {
    const { ref } = useSectionInView("Courses", 0.5);

    return (
        <section ref={ref} id="courses" className="mt-12 sm:mt-18 scroll-mt-48 mx-auto w-full sm:w-[90%] md:w-[80%] lg:w-[70%]">
            <SectionHeader>My Courses</SectionHeader>
            <div>
                {coursesData.map((course, index) => (
                    <React.Fragment key={index}>
                        <Course {...course} />
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
}