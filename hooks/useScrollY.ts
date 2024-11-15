import {useRef} from "react";
import {useScroll, useTransform} from "framer-motion";

function UseScrollY() {
    const reF = useRef<HTMLDivElement | null>(null)
    const { scrollYProgress } = useScroll({
        target: reF,
        offset: ["0 1", "1.2 1.5"],
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    return {
        reF,
        scaleProgress,
        opacityProgress
    }
}

export default UseScrollY;