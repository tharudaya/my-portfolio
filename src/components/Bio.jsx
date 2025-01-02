import { BIO } from "../constants"

const Bio = () => {
    return (
        <section className="flex flex-col gap-12 py-20" id="bio">
            <h2 className="text-center text-3xl lg:text-4xl font-semibold">About Me</h2>
            <div>
                {BIO.map((bio, index) => (
                    <p key={index} className="mb-4 text-justify text-lg lg:text-xl">
                        {bio}
                    </p>
                ))}
            </div>
        </section>
    )
}

export default Bio