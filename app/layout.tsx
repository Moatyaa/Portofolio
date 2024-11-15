import type { Metadata } from "next";
import {Poppins} from "next/font/google";
import "./globals.css";
import {ReactNode} from "react";
import ActiveSectionProvider from "@/Context/ActiveSectionContext";

const popins = Poppins({
    subsets: ["latin"],
    style: ["normal","italic"],
    weight:["100","200","400","500","600","700","800","900"]
})

export const metadata: Metadata = {
    title: "M.Atya | Front-End Developer",
    description: "Muhammad Atya is a front-end developer with 2 years of experience.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="!scroll-smooth">
    <body className={`${popins.className} h-[10000px] bg-gray-50 text-gray-950 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
        <ActiveSectionProvider>
            <div className=" w-[98%] lg:w-[90%] mx-auto">
                {children}
            </div>
        </ActiveSectionProvider>
    </body>
    </html>
  );
}


