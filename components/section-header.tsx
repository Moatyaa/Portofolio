import React from 'react';
import {motion} from "framer-motion";

function SectionHeader({children}: {children: React.ReactNode}) {
    return (
        <motion.h2
            className="capitalize section-header text-center  text-gray-800 dark:text-gray-200 text-4xl mb-7"
            initial={{opacity: 0, x: -100}}
            animate={{opacity: 1, x: 0}}
            transition={{delay: 0.175}}

        >
            {children}
        </motion.h2>
    );
}

export default SectionHeader;