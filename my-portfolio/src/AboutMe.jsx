

function AboutMe() {
    return (
        <div className="flex w-full h-full justify-center">
            {/* Left */}
            <div className="flex flex-col justify-center items-start w-1/3 px-10 gap-30">
                <div className="flex flex-col gap-8">
                    <h1 className="font-cmu text-7xl">
                        Athul <br />Krishna K S
                    </h1>
                    <h6 className="font-codec text-xl uppercase tracking-widest">
                        Software Engineer
                    </h6>
                </div>

                <div className="font-codec font-bold">
                    <span className="text-4xl">1 Year 4 Months</span>
                    <br />
                    <span className="text-xl">
                        of Professional Experience Building & Shipping Software
                    </span>
                </div>
            </div>

            {/* Center */}
            <div className="bg-blue-300 w-1/3">
                <div>
                    image
                </div>

                <div>
                    logos and redirection
                </div>
            </div>

            {/* Right */}
            <div className="bg-green-300 w-1/3">
                <div>
                    minor contact details
                </div>

                <div>
                    image 2
                </div>
            </div>
        </div>
    )
}

export default AboutMe