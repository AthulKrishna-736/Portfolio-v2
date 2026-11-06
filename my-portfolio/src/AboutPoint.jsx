
function AboutPoint({ title, description }) {
    return (
        <div className="flex items-start gap-3">
            <img
                src="/right_arrow.svg"
                alt="arrow"
                className="w-8 h-8"
            />

            <div className="flex flex-col gap-1 py-1">
                <h2 className="font-codec text-lg font-bold">
                    {title}
                </h2>

                <p className="font-codec text-base">
                    {description}
                </p>
            </div>
        </div>
    );
}

export default AboutPoint;
