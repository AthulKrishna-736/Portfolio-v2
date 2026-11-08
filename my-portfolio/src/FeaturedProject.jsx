

function FeaturedProject({ project }) {
    return (
        <div className="flex flex-col h-full justify-between rounded-2xl p-5 bg-linear-to-br from-[#DCCFC3] via-[#C9ADA0] to-[#BD9F91]">
            {/* Image section */}
            <div className="bg-[#efede5] h-1/2 rounded-2xl p-5">
                image section
            </div>

            {/* Project details */}
            <div className="text-[#efede5]">
                <div className="font-cmu">
                    <h1 className="text-5xl">{project.title}</h1>
                    <p className="text-lg">{project.description}</p>
                </div>

                {/* Tech Stacks */}
                <div className="font-codec tracking-wide uppercase">
                    {project?.technologies?.map((tech, index) => (
                        <span key={index}>
                            {tech}
                            {index !== project?.technologies.length - 1 && " · "}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FeaturedProject