import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";

function CoursesSlider() {
    return (
        <div className="slider-container">
            <Swiper
                spaceBetween={50} // Space between slides
                slidesPerView={1} // Number of slides shown at a time
                loop={true} // Enable infinite looping
                effect="coverflow" // Apply coverflow effect (you can also use 'slide' for a simpler transition)
                centeredSlides={true} // Center the active slide
                grabCursor={true} // Enable grab cursor for dragging
                className="swiper-container"
            >
                <SwiperSlide>
                    <div className="item">
                        <h1>Slide 1</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere magni magnam unde ipsam
                            repudiandae explicabo expedita labore.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="item">
                        <h1>Slide 2</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere magni magnam unde ipsam
                            repudiandae explicabo expedita labore.
                        </p>
                    </div>
                </SwiperSlide>
                {/* Add more slides here */}
            </Swiper>
        </div>
    );
}

export default CoursesSlider;