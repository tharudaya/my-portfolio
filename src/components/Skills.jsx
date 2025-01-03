import { SKILLS1, SKILLS2 } from "../constants";
import { motion } from "framer-motion";

const Skills = () => {
    return (
        <div className="container mx-auto" id="skills">
            <motion.h2 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-12 mt-2 text-center text-4xl font-semibold">Skills</motion.h2>
            <div className="flex flex-col md:flex-row justify-between gap-5">
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} className="mx-2 flex flex-col grow rounded-3xl px-4 py-2 lg:px-10 border border-stone-50/30">
                    {
                        SKILLS1.map((skill, index) => (
                            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: index * 0.1 }} key={index} className={`py-6 flex items-center justify-between ${index !== SKILLS1.length - 1 ? "border-b border-stone-50/30" : ""}`}>
                                <div className="flex items-center">
                                    {skill.icon}
                                    <h3 className="px-6 text-lg lg:text-2xl">{skill.name}</h3>
                                </div>
                                <div className="text-md font-semibold lg:text-xl">
                                    <span>
                                        {skill.experience}
                                    </span>
                                </div>
                            </motion.div>
                        ))
                    }
                </motion.div>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} className="mx-2 flex flex-col grow rounded-3xl px-4 py-2 lg:px-10 border border-stone-50/30">
                    {
                        SKILLS2.map((skill, index) => (
                            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: index * 0.1 }} div key={index} className={`py-6 flex items-center justify-between ${index !== SKILLS2.length - 1 ? "border-b border-stone-50/30" : ""}`}>
                                <div className="flex items-center">
                                    {skill.icon}
                                    <h3 className="px-6 text-lg lg:text-2xl">{skill.name}</h3>
                                </div>
                                <div className="text-md font-semibold lg:text-xl">
                                    <span>
                                        {skill.experience}
                                    </span>
                                </div>
                            </motion.div>
                        ))
                    }
                </motion.div>
            </div>
        </div >
    )
}

export default Skills