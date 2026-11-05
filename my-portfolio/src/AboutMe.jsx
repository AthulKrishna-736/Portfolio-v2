

function AboutMe() {
    return (
        <div className="flex w-full h-full justify-center">
            {/* Left */}
            <div className="bg-red-300 flex flex-col justify-center items-center w-1/3">
                <div>
                    <h1>name</h1>
                    <h6>
                        role
                    </h6>
                </div>

                <div>
                    current exp
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