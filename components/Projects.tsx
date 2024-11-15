'use client'
import { useState, useEffect, useRef } from 'react';
import { projectsData } from '../lib/data';
import Image from 'next/image';
import SectionHeader from "@/components/section-header";
import useSectionInView from "@/hooks/useSectionInView";
import { motion } from "framer-motion";
import useScrollY from "@/hooks/useScrollY";

export default function Projects() {
    const { ref } = useSectionInView("Projects");
    const { reF, scaleProgress, opacityProgress } = useScrollY();
    const [isNextDisabled, setIsNextDisabled] = useState<boolean>(false);
    const [isPrevDisabled, setIsPrevDisabled] = useState<boolean>(false);

    // Refs for carousel functionality
    const carouselRef = useRef<HTMLDivElement | null>(null);
    const listRef = useRef<HTMLDivElement | null>(null);
    const itemsRef = useRef<HTMLDivElement[]>([]); // array of items as div elements

    useEffect(() => {
        // When the component is mounted, we sync the itemsRef with the children of the listRef
        if (listRef.current) {
            itemsRef.current = Array.from(listRef.current.children) as HTMLDivElement[];
        }
    }, []);

    // Function to handle next and previous navigation
    const showSlider = (type: 'next' | 'prev') => {
        setIsNextDisabled(true);
        setIsPrevDisabled(true);

        const items = itemsRef.current; // Access the DOM elements from itemsRef

        if (type === 'next') {
            // Move the first element to the end
            if (items.length > 0 && listRef.current) {
                listRef.current.appendChild(items[0]);
                carouselRef.current?.classList.add('next');
            }
        } else {
            // Move the last element to the start
            if (items.length > 0 && listRef.current) {
                listRef.current.prepend(items[items.length - 1]);
                carouselRef.current?.classList.add('prev');
            }
        }

        // After the transition, resync itemsRef and enable buttons again
        setTimeout(() => {
            if (listRef.current) {
                itemsRef.current = Array.from(listRef.current.children) as HTMLDivElement[];
            }
            setIsNextDisabled(false);
            setIsPrevDisabled(false);
            // Clean up the transition classes
            carouselRef.current?.classList.remove('next', 'prev');
        }, 1000); // Adjust the timeout duration to match your transition duration
    };

    // Handle showing more details of an item
    const handleSeeMore = () => {
        if (carouselRef.current) {
            carouselRef.current.classList.remove('next', 'prev');
            carouselRef.current.classList.add('showDetail');
            document.getElementById('section-header')?.classList.add("opacity-0");
        }
    };

    // Handle going back to the carousel view
    const handleBack = () => {
        if (carouselRef.current) {
            carouselRef.current.classList.remove('showDetail');
            document.getElementById('section-header')?.classList.remove("opacity-0");
        }
    };

    return (
        <motion.div
            ref={reF}
            style={{
                opacity: opacityProgress,
                scale: scaleProgress
            }}
            transition={{ opacity: { duration: 0.5 }, scale: { duration: 0.5 } }} // Smooth transition for opacity & scale
        >
            <section ref={ref} id="projects" className="!scroll-mt-28">
                <div ref={carouselRef} className="carousel relative ">
                    <div
                        id="section-header"
                        className="absolute top-[10%] left-[50%] -translate-x-[50%] sm:left-[5%] sm:translate-x-[0]"
                    >
                        <SectionHeader>
                            Projects
                        </SectionHeader>
                    </div>
                    <div className="list" ref={listRef}>
                        {/* Render carousel items dynamically */}
                        {projectsData.map((item, index: number) => (
                            <div className="item" key={index}>
                                <Image src={item.imageUrl} alt="Carousel Item" width={400} height={400} />
                                <div className="introduce">
                                    <h2 className="title mb-5 text-3xl font-medium text-gray-950 dark:text-gray-300">{item.title}</h2>
                                    <div className="des text-gray-400 leading-6 ">{item.description}</div>
                                    <button className="seeMore text-nowrap" onClick={handleSeeMore}>
                                        MORE ABOUT PROJECT... &#8599;
                                    </button>
                                </div>
                                <div className="detail">
                                    <div className="title text-gray-900 dark:text-gray-300">{item.title}</div>
                                    <div className="des text-gray-500">{item.description}</div>
                                    <div className="specifications">
                                        {item.tags.map((spec, specIndex) => (
                                            <div key={specIndex}>
                                                <p>{spec}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="arrows w-[90%] sm:w-[60%]">
                        <button
                            id="prev"
                            disabled={isPrevDisabled}
                            onClick={() => showSlider('prev')}
                        >
                            &lt;
                        </button>
                        <button
                            id="next"
                            disabled={isNextDisabled}
                            onClick={() => showSlider('next')}
                        >
                            &gt;
                        </button>
                        <button className="text-nowrap" id="back" onClick={handleBack}>
                            See all projects &#8599;
                        </button>
                    </div>
                </div>
            </section>
        </motion.div>
    );
}
