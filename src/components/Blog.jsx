import { BLOGS } from "../constants";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";

const Blog = () => {
    return (
        <section className="pb-16" id="blog">
            <motion.h2 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-12 text-center text-3xl lg:text-4xl font-semibold">My Blog</motion.h2>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {
                    BLOGS.map((blog, index) => (
                        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} key={index} className="flex flex-col border border-stone-50/30">
                            <img src={blog.image} alt="article image" className="w-full h-[220px] object-cover" />
                            <div className="flex flex-col justify-between h-full p-4">
                                <h4 className="mb-2 text-xl lg:text-2xl">{blog.title}</h4>
                                <p className="text-sm mb-3">{blog.description}</p>
                                <a href={blog.link} target="_blank" rel="noopener noreferrer" className="block w-[140px] px-4 py-2 rounded-md text-black bg-cyan-400 hover:bg-cyan-700">
                                    <div className="flex items-center justify-between">
                                        <span>Read more</span>
                                        <MdArrowOutward />
                                    </div>
                                </a>
                            </div>
                        </motion.div>
                    ))
                }
            </motion.div>
        </section>
    )
}

export default Blog