

function Project() {
    return (
        <div className="flex w-full h-full justify-center">
            {/* Left */}
            <div className="bg-blue-400 w-1/3">
                <div className="flex flex-col gap-8">
                    <h1 className="font-cmu text-7xl">
                        My <br />Projects
                    </h1>
                    <h6 className="font-codec text-xl uppercase tracking-widest">
                        Selected Work
                    </h6>
                </div>

                <div className="font-codec font-bold text-xl">
                    Taking ownership of tasks, writing maintainable code, and delivering reliable solutions with a focus on quality and responsibility.
                </div>
            </div>

            {/* Center */}
            <div className="bg-green-400 w-1/3">
                center
            </div>

            {/* Right */}
            <div className="bg-red-400 w-1/3">
                right
            </div>
        </div>
    )
}

export default Project