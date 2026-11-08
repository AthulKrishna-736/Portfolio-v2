import { useState } from "react"
import FeaturedProject from "./FeaturedProject"
import ProjectList from "./ProjectList"


function Project() {

    const [project, setProject] = useState({
        title: "Test1",
        description: "Test2",
        technologies: ["react", "node", "java"]

    })

    return (
        <div className="flex w-full h-full justify-center">
            {/* Left */}
            <div className="flex flex-col justify-center w-1/3 gap-30 pl-15">
                <div className="flex flex-col gap-8">
                    <h1 className="font-cmu text-7xl">
                        My <br />Projects
                    </h1>
                    <h6 className="font-codec text-xl uppercase tracking-widest">
                        Featured Projects
                    </h6>
                </div>

                <div className="font-codec font-bold text-xl">
                    Taking ownership of tasks, writing maintainable code, and delivering reliable solutions with a focus on quality and responsibility.
                </div>
            </div>

            {/* Center */}
            <div className="w-1/3 p-15">
                <FeaturedProject project={project} />
            </div>

            {/* Right */}
            <div className="bg-red-400 w-1/3 p-10">
                <ProjectList />
            </div>
        </div>
    )
}

export default Project