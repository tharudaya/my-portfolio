import { BIO } from "../constants";
import { motion } from "framer-motion";

const Bio = () => {
    return (
        <section className="flex flex-col gap-12 py-20" id="bio">
            <motion.h2 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center text-3xl lg:text-4xl font-semibold">About Me</motion.h2>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
                {BIO.map((bio, index) => (
                    <motion.p initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} key={index} className="mb-4 text-justify text-lg lg:text-xl">
                        {bio}
                    </motion.p>
                ))}
            </motion.div>
        </section>
    )
}

export default Bio