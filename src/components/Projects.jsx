import { PROJECTS } from "../constants"
import { MdArrowOutward } from "react-icons/md"

const Projects = () => {
	return (
		<section id="projects">
			<h2 className="mb-12 text-center text-3xl lg:text-4xl font-semibold">Projects</h2>
			<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
				{
					PROJECTS.map((project) => (
						<div key={project.id} className="group relative overflow-hidden rounded-3xl">
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
						</div>
					))
				}
			</div>
		</section>
	)
}

export default Projects