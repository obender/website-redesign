const Slider = () => {
    return (
        <>
            <section
                className="py-60 px-4 text-white bg-cover bg-no-repeat"
                style={{ backgroundImage: "url('./images/subtraction.png')" }}
                >
                <div className="container mx-auto">
                    <div className="text-censter mb-32">
                    <h2 className="text-3xl md:text-5xl text-center">
                        <span className="underborder relative"> What people say</span>
                    </h2>
                    </div>
                    <div className="slick-slider xl:w-1/2 mx-auto">
                    <div className="slider mb-12">
                        <div
                        className="grid md:grid-cols-4 items-center max-w-xl mx-auto gap-4"
                        >
                        <div className="col-span-1">
                            <img
                            src="./images/john.png"
                            alt="john"
                            className="block w-full mb-3"
                            />
                            <h5 className="font-bold text-2xl text-current">John Doe</h5>
                        </div>
                        <div className="col-span-3">
                            <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                            sint hic, sit nobis qui rem iure iste quod soluta debitis enim
                            repudiandae et, eligendi tempore? Inventore alias dolorem quam
                            sapiente! Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. IpsamLorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ipsam
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="slider mb-12">
                        <div
                        className="grid md:grid-cols-4 items-center max-w-xl mx-auto gap-4"
                        >
                        <div className="col-span-1">
                            <img
                            src="./images/john.png"
                            alt="john"
                            className="block w-full mb-3"
                            />
                            <h5 className="font-bold text-2xl text-current">Logan Paul</h5>
                        </div>
                        <div className="col-span-3">
                            <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                            sint hic, sit nobis qui rem iure iste quod soluta debitis enim
                            repudiandae et, eligendi tempore? Inventore alias dolorem quam
                            sapiente! Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. IpsamLorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ipsam
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="slider mb-12">
                        <div
                        className="grid md:grid-cols-4 items-center max-w-xl mx-auto gap-4"
                        >
                        <div className="col-span-1">
                            <img
                            src="./images/john.png"
                            alt="john"
                            className="block w-full mb-3"
                            />
                            <h5 className="font-bold text-2xl text-current">John Smith</h5>
                        </div>
                        <div className="col-span-3">
                            <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                            sint hic, sit nobis qui rem iure iste quod soluta debitis enim
                            repudiandae et, eligendi tempore? Inventore alias dolorem quam
                            sapiente! Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. IpsamLorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ipsam
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Slider