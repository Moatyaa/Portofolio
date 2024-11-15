"use client";
import React, {useState, createContext, useContext} from 'react'; // Correct import for createContext
import { links } from "@/lib/data";

type SectionName = (typeof links[number]["name"]);

type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
    lastClickTime: number;
    setLastClickTime: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext =
    createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionProvider({ children }: { children: React.ReactNode }) {
    const [activeSection, setActiveSection] = useState<SectionName>('Home');
    const [lastClickTime, setLastClickTime] = useState(0);

    return (
        <ActiveSectionContext.Provider value={{ activeSection, setActiveSection , lastClickTime, setLastClickTime }}>
            {children}
        </ActiveSectionContext.Provider>
    );
}

export function useActiveSection() {
    const context = useContext(ActiveSectionContext);

    if (context === null) {
        throw new Error("useActiveSection must be used within an ActiveSectionProvider");
    }

    return context;
}