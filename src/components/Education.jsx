import { EDUCATION } from "../constants"

const Education = () => {
    return (
        <section className="py-8" id="education">
            <h2 className="mb-12 text-center text-3xl lg:text-4xl font-semibold">Education</h2>
            {EDUCATION.map((education, index) => (
                <div key={index} className="mb-6 p-10 border border-stone-50/30 bg-white/5">
                    <h3 className="text-xl font-semibold">{education.degree}</h3>
                    <p className="text-lg">{education.institution}</p>
                    <p className="text-sm text-stone-300">{education.duration}</p>
                    <p className="mt-2">{education.description}</p>
                </div>
            ))}
        </section>
    )
}

export default Education