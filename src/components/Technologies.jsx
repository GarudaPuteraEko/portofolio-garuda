import { FaLaravel } from "react-icons/fa"
import { motion } from "framer-motion"
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaJava } from "react-icons/fa";
import { SiXampp } from "react-icons/si";
import gdeveloplogo from '../assets/gdev.jpeg';
import { TbBrandNextjs } from "react-icons/tb";

const iconVariants = (duration) => ({
    initial: { y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        } 
    }
})

const Technologies = () => {
  return (
    <div className="pb-24">
        <motion.h2 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1.5 }}
            className="my-20 text-center text-4xl">Technologies
        </motion.h2>
        <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
                initial="initial"
                animate="animate"
                variants={iconVariants(3)}
                className="p-4">
                <FaHtml5 className="text-7xl text-orange-600"/>
            </motion.div>
            <motion.div 
                initial="initial"
                animate="animate"
                variants={iconVariants(4.5)}
                className="p-4">
                <FaCss3Alt className="text-7xl text-blue-600"/>
            </motion.div>
            <motion.div 
                initial="initial"
                animate="animate"
                variants={iconVariants(5)}
                className="p-4">
                <IoLogoJavascript className="text-7xl text-yellow-500"/>
            </motion.div>
            <motion.div 
                initial="initial"
                animate="animate"
                variants={iconVariants(4)}
                className="p-4">
                <FaJava className="text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div 
                initial="initial"
                animate="animate"
                variants={iconVariants(6)}
                className="p-4">
                <FaLaravel className="text-7xl text-red-600"/>
            </motion.div>
            <motion.div 
                initial="initial"
                animate="animate"
                variants={iconVariants(2.5)}
                className="p-4">
                <TbBrandNextjs className="text-7xl text-white-400"/>
            </motion.div>
            <motion.div 
                initial="initial"
                animate="animate"
                variants={iconVariants(5.5)}
                className="p-4">
                <SiXampp className="text-7xl text-orange-500"/>
            </motion.div>
            <motion.div 
                initial="initial"
                animate="animate"
                variants={iconVariants(3.5)}
                className="p-4">
                <img 
                    src={gdeveloplogo}
                    alt="GDevelop"
                    className="w-16 h-16 object-contain rounded"
                />
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies
