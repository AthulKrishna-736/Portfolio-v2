

function TechStack() {

    const techStack = [
        { path: "/c.svg", alt: "c" },
        { path: "/cpp.svg", alt: "cpp" },
        { path: "/java.svg", alt: "java" },
        { path: "/js.svg", alt: "js" },
        { path: "/ts.svg", alt: "ts" },
        { path: "/go.svg", alt: "go" },
        { path: "/html5.svg", alt: "html" },
        { path: "/css3.svg", alt: "css" },
        { path: "/react.svg", alt: "react" },
        { path: "/angular.svg", alt: "angular" },
        { path: "/nodejs.svg", alt: "nodejs" },
        { path: "/express.svg", alt: "express" },
        { path: "/mongodb.svg", alt: "mongodb" },
        { path: "/postgres.svg", alt: "postgres" },
        { path: "/redis.svg", alt: "redis" },
        { path: "/docker.svg", alt: "docker" },
        { path: "/nginx.svg", alt: "nginx" },
        { path: "/vercel.svg", alt: "vercel" },
        { path: "/aws.svg", alt: "aws" },
        { path: "/git.svg", alt: "git" },
        { path: "/linux.svg", alt: "linux" },
    ]

    return (
        <div className="flex w-full h-full">
            {/* Left */}
            <div className="flex flex-col justify-center w-1/3 gap-30 pl-15">
                <div className="flex flex-col gap-8">
                    <h1 className="font-cmu text-7xl">
                        Tech <br />Stack
                    </h1>
                    <h6 className="font-codec text-xl uppercase tracking-widest">
                        Tools I Built With
                    </h6>
                </div>

                <div className="font-codec font-bold text-xl">
                    Learn. Build. Evolve.
                </div>
            </div>

            {/* Right */}
            <div className="flex flex-wrap gap-8 justify-center items-center w-2/3 py-20">
                {techStack.map((t, index) => {
                    return (
                        <img
                            title={t.alt}
                            className="h-30 w-30 cursor-pointer"
                            key={index}
                            src={t.path}
                            alt={t.alt}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default TechStack