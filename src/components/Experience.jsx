import { EXPERIENCES } from "../constants"

const Experience = () => {
    return (
        <section className="pt-20" id="work">
            <h2 className="text-center mb-2 text-4xl font-semibold tracking-tighter">Work Experience</h2>
            <div className="space-y-8 py-10">
                {EXPERIENCES.map((experience, index) => (
                    <div key={index} className="flex flex-col lg:flex-row gap-10 justify-end">
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
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Experience