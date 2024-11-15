'use client'
import React from 'react';
import SectionHeader from "@/components/section-header";
import useSectionInView from "@/hooks/useSectionInView";
import Image from "next/image";
import sendIcon from "../public/sendIcon.png";
import {sendEmail} from "@/lib/sendEmail";
function Contact() {
    const {ref} = useSectionInView('Contact')
    return <>
        <section ref={ref} id='contact' className=' mt-20 flex items-center justify-center flex-col sm:mt-18 scroll-mt-24 mx-auto w-full sm:w-[70%] xl:w-[90%]'>
            <div>
                <SectionHeader>
                    Contact Me
                </SectionHeader>
            </div>
            <div className='flex mt-6 gap-x-28 items-center'>
                <div className='hidden xl:block w-[50%]'>
                    <Image className='relative left-[225px]' width={350} src={sendIcon} alt=""/>
                    <h4 className='font-extrabold text-gray-900 uppercase text-[4.5rem]'>
                        Want to Start a new Project
                    </h4>
                    <p className='italic text-end text-[22px] text-gray-600'>or just say Hello</p>
                </div>
                <div className='w-[100%] xl:w-[50%]'>
                    <h4 className='font-medium my-8  text-[20px]'>Get in touch</h4>

                    <p className="text-gray-600 -mt-6 dark:text-white/80">
                        Please contact me directly at{" "}
                        <a className="underline text-gray-900" href="mailto:muhammadatyaa66@gmail.com@gmail.com">
                            muhammadatyaa66@gmail.com
                        </a>{" "}
                        or through this form.
                    </p>
                    <form
                        className="mt-10 flex flex-col dark:text-black"
                        action={(formData)=>{
                            sendEmail(formData)
                        }}
                    >
                        <input
                            className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                            name="senderEmail"
                            type="email"
                            required
                            maxLength={500}
                            placeholder="Your email"
                        />
                        <textarea
                            className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                            name="message"
                            placeholder="Your message"
                            required
                            maxLength={5000}
                        />
                        <button type='submit' className='bg-gray-900 text-gray-300 mt-3 rounded-full py-3'>Submit</button>
                    </form>
                </div>
            </div>
        </section>
    </>
}

export default Contact;