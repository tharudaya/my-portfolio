import { PROJECTS } from "../constants";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";

const Projects = () => {
	return (
		<section id="projects">
			<motion.h2 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-12 text-center text-3xl lg:text-4xl font-semibold">Projects</motion.h2>
			<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
				{
					PROJECTS.map((project) => (
						<motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} key={project.id} className="group relative overflow-hidden rounded-3xl">
							<img src={project.image} alt={project.name} className="h-[200px] lg:h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
							<div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100">
								<h3 className="mb-2 text-xl text-black font-semibold">{project.name}</h3>
								<a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="rounded-full bg-cyan-400 px-4 py-2 text-black hover:bg-cyan-700">
									<div className="flex items-center">
										<span>Go to live</span>
										<MdArrowOutward />
									</div>
								</a>
							</div>
						</motion.div>
					))
				}
			</div>
		</section>
	)
}

export default Projects