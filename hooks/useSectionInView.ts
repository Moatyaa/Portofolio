import {useEffect} from 'react';
import {useActiveSection} from "@/Context/ActiveSectionContext";
import {useInView} from "react-intersection-observer";
import {SectionName} from "@/types/sectionNameType";

function UseSectionInView(sectionName: SectionName ,threshold = 0.75) {
    const{setActiveSection, lastClickTime} = useActiveSection()
    const{ref, inView} = useInView({
            threshold
        }
    )
    useEffect(()=>{
        if (inView && Date.now() - lastClickTime > 1000) {
            setActiveSection(sectionName);
        }

    },[setActiveSection, inView , sectionName , lastClickTime])
    return{
        ref
    }
}

export default UseSectionInView;