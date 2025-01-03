import { EDUCATION } from "../constants";
import { motion } from "framer-motion";

const Education = () => {
    return (
        <section className="py-8" id="education">
            <motion.h2 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-12 text-center text-3xl lg:text-4xl font-semibold">Education</motion.h2>
            {EDUCATION.map((education, index) => (
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }} key={index} className="mb-6 p-10 border border-stone-50/30 bg-white/5">
                    <h3 className="text-xl font-semibold">{education.degree}</h3>
                    <p className="text-lg">{education.institution}</p>
                    <p className="text-sm text-stone-300">{education.duration}</p>
                    <p className="mt-2">{education.description}</p>
                </motion.div>
            ))}
        </section>
    )
}

export default Education