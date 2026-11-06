import AboutPoint from "./AboutPoint";


function AboutMe() {
    const aboutPoints = [
        {
            title: "AI-ASSISTED ENGINEERING",
            description: "Using AI tools to accelerate workflows, explore ideas and solve problems efficiently."
        },
        {
            title: "ALWAYS LEARNING",
            description: "Exploring emerging technologies and continuously improving my skills."
        },
        {
            title: "PROBLEM FIRST",
            description: "Understanding the problem before choosing the tools and building practical solutions."
        }
    ];

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
            <div className="flex flex-col w-1/3 justify-center gap-10 items-center px-15">
                <div>
                    <img
                        className="rounded-3xl"
                        src="/athul_1.png"
                        alt="image_1"
                    />
                </div>

                <div className="flex justify-start w-full gap-8">
                    <img
                        onClick={() => {
                            window.open(
                                "https://www.linkedin.com/in/athul-krishna-ks-573a55317/",
                                "_blank",
                                "noopener,noreferrer"
                            )
                        }}
                        className="w-10 h-14 cursor-pointer"
                        src="/linkedin_logo.svg"
                        alt="linkedin_logo"
                    />

                    <img
                        onClick={() => {
                            window.open(
                                "https://x.com/athulkrishna736",
                                "_blank",
                                "noopener,noreferrer"
                            )
                        }}
                        className="w-11 h-14 cursor-pointer"
                        src="/twitter_logo.svg"
                        alt="twitter_logo"
                    />

                    <img
                        onClick={() => {
                            window.location.href = "mailto:athulkrishna736@gmail.com";
                        }}
                        className="w-14 h-14 cursor-pointer"
                        src="/gmail_logo.svg"
                        a lt="gmail_logo"
                    />

                    <img
                        onClick={() => {
                            window.open(
                                "https://github.com/AthulKrishna-736",
                                "_blank",
                                "noopener,noreferrer"
                            )
                        }}
                        className="w-10 h-14 cursor-pointer"
                        src="/github_logo.svg"
                        alt="github_logo"
                    />
                </div>
            </div>

            {/* Right */}
            <div className="flex flex-col w-1/3 justify-center items-start gap-15 px-10">
                <div className="flex flex-col gap-5">
                    {aboutPoints.map((point) => (
                        <AboutPoint
                            key={point.number}
                            {...point}
                        />
                    ))}
                </div>

                <div>
                    <img 
                    className="h-70 w-70 rounded-3xl"
                    src="/athul_2.JPG"
                     alt="image_2" 
                     />
                </div>
            </div>
        </div>
    )
}

export default AboutMe