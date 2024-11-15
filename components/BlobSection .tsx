import { motion } from "framer-motion";

const BlobSection = () => {
    return (
        <div className="relative bg-gray-100 dark:bg-gray-900 overflow-hidden">
            {/* Blob Background */}
            <motion.div
                className="absolute top-0 left-0 right-0 bottom-0 z-[-1]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 500 500"
                    fill="none"
                    className="absolute top-0 left-0 w-full h-full"
                >
                    <path
                        fill="#fbe2e3"
                        d="M137.3,-147.7C184.7,-129.3,229.9,-94.1,247.2,-52.5C264.5,-10.9,254.8,43.1,223.6,86.9C192.3,130.7,139.6,164.3,83.9,179.8C28.3,195.3,-31.5,192.7,-81.4,169.2C-131.3,145.7,-181.1,101.3,-201.7,51.9C-222.3,2.5,-213.6,-61.5,-179.9,-114.6C-146.3,-167.6,-88.6,-210.6,-27.8,-226.2C33,-242,68.1,-231.5,103.9,-196.5C139.8,-161.5,176.5,-102,137.3,-147.7Z"
                        transform="translate(200 200) scale(1)"
                    />
                </svg>
            </motion.div>

            {/* Content */}
            <div className="relative z-10 py-24 text-center">
                <motion.h1
                    className="text-4xl font-bold text-gray-800 dark:text-gray-200"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    Welcome to My Portfolio
                </motion.h1>
                <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
                    Explore my work and projects!
                </p>
            </div>
        </div>
    );
};

export default BlobSection;
