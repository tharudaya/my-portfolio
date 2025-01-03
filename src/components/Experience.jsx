import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
    return (
        <section className="pt-20" id="work">
            <motion.h2 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-2 text-4xl font-semibold tracking-tighter">Work Experience</motion.h2>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} className="space-y-8 py-10">
                {EXPERIENCES.map((experience, index) => (
                    <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: index * 0.1 }} key={index} className="flex flex-col lg:flex-row gap-10 justify-end">
                        <div className="w-full lg:w-[20%]">
                            <h3 className="text-2xl font-semibold">
                                {experience.title}
                            </h3>
                            <p className="text-sm text-stone-300">{experience.duration}</p>
                        </div>
                        <div className="w-full lg:w-[70%] border-l-2 border-stone-50/30 pl-12">
                            <p className="text-xl">{experience.company}</p>
                            <p className="mt-2 text-base">{experience.description}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}

export default Experience