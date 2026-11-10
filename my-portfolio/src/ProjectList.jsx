

function ProjectList({ project }) {
    return (
        <div className="flex gap-3 cursor-pointer">
            {/* Image */}
            <div className="h-30 w-30 shrink-0 rounded-2xl bg-linear-to-br from-[#DCCFC3] via-[#C9ADA0] to-[#BD9F91]">
                <img src="/sss.jpg" alt="image_3" />
            </div>

            {/* Project details */}
            <div className="flex flex-col justify-between py-1">
                <div className="flex flex-col gap-1">
                    <h1 className="font-codec font-bold text-xl">
                        {project.title}
                    </h1>
                    <p className="font-codec tracking-tight leading-tight">
                        {project.description}
                    </p>
                </div>

                {/* Tech stacks */}
                <div className="font-codec tracking-wide uppercase text-sm">
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

export default ProjectList