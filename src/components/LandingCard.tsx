import React from 'react'
import { motion } from 'framer-motion'
const LandingCard: React.FC = () => {
  return (
    <div className="flex py-[30px] flex-col justify-center items-start gap-[10%] text-4xl h-full w-full font-bold bg-image bg-blackboard-black dark:bg-white">
        <div className="w-full flex flex-col justify-center items-start gap-[16px] text-white dark:text-blackboard-black text-[clamp(2.2rem,11vw,20rem)] md:text-[clamp(2rem,6vw,7rem)] font-[300] transition-all duration-300 relative">
          <div className="px-[30px] leading-[1] flex gap-4 flex-wrap">
            <motion.span
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: .8 }}
            >
              I
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: .8, delay: 0.2 }}
            >
              {" "}believe in{" "}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: .8, delay: 0.4 }}
              className="text-sun font-['Montaga']"
            >
              change
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: .8, delay: 0.6 }}
            >
              ,
            </motion.span>
          </div>
          <div className="h-[.5px] mt-2 w-full bg-slate opacity-50 hidden md:block"></div>
          <div className="px-[30px] leading-[1] flex gap-4 flex-wrap">
            <motion.span
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: .8, delay: 0.3 }}
              className="text-sun font-['Montaga']"
            >
              Change
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: .8, delay: 0.5 }}
            >
              {" "}that
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: .8, delay: 0.6 }}
            >
              {" "} drives
            </motion.span>
          </div>
          <div className="h-[.5px] mt-2 w-full bg-slate opacity-50 hidden md:block"></div>
          <div className="px-[30px] leading-[.8] flex flex-wrap">
            <motion.span
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: .8, delay: 0.4 }}
            >
              innovation.
            </motion.span>
          </div>
        </div>
        <div className="px-[30px] text-slate text-[clamp(.9rem,1.3vw,1.3rem)] font-[300] transition-all duration-300">
          <motion.span
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: .8, delay: 0.4 }}
          >
            Developer | Designer | Photographer
          </motion.span>
        </div>
      </div>
  )
}

export default LandingCard