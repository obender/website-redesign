const HowTo = () => {
    return (
        <>
            <section className="xl:pb-80 md:pb-60 pb-20 px-4">
                <div className="container mx-auto">
                    <div className="p">
                    <h2 className="text-3xl md:text-5xl font-bold text-black">How to Use</h2>
                    <span className="w-20 h-1 bg-primary inline-block"></span>
                    <div className="grid lg:grid-cols-3 gap-6 mt-32">
                        <div className="relative self-start">
                        <img src="./images/group-1.png" alt="group" className="w-full" />
                        <div
                            className="
                            w-full
                            absolute
                            top-16
                            sm:top-24
                            lg:top-10
                            xl:top-20
                            lg:left-4
                            "
                        >
                            <p className="font-bold text-five text-xl">
                            <img
                                src="./images/unnamed.png"
                                alt="safe deal"
                                className="w-8 inline-block"
                            />
                            Safe-Deal: Your Online Shopping Advisor
                            </p>
                            <div className="text-right mt-6">
                                <a
                                    href="#"
                                    className="
                                    inline-block
                                    bg-[#1972E7]
                                    px-8
                                    py-4
                                    rounded-xl
                                    text-white
                                    "
                                    >Add to Chrome
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center mt-10 xl:ml-20">
                            <span
                            className="
                                text-3xl
                                lg:text-6xl
                                text-primary
                                w-24
                                px-12
                                bg-contain bg-no-repeat
                                h-24
                                flex
                                items-center
                                justify-center
                                mr-8
                                border-2 border-dashed border-primary
                                rounded-full
                            "
                            >1</span>
                            <p className="text-2xl">Add extension to your browser</p>
                        </div>
                        <img
                            src="./images/path-5.png"
                            alt="path"
                            className="absolute -bottom-8 -right-12 lg:block hidden"
                        />
                        </div>
                        <div className="relative">
                        <img src="./images/group-2.png" alt="group" className="w-full" />
                        <div className="flex items-center mt-4 lg:ml-6">
                            <span
                            className="
                                text-3xl
                                lg:text-6xl
                                text-primary
                                w-24
                                bg-contain bg-no-repeat
                                h-24
                                px-12
                                flex
                                items-center
                                justify-center
                                mr-8
                                rounded-full
                                border-2 border-dashed border-primary
                            "
                            >2
                            </span>
                            <p className="text-2xl">Visit ebay, Amazon or AliExpress</p>
                        </div>
                        <img
                            src="./images/path-5.png"
                            alt="path"
                            className="absolute bottom-0 -right-10 lg:block hidden"
                        />
                        </div>
                        <div className="w">
                        <div className="relative">
                            <img src="./images/group-5.png" alt="group" className="w-full" />
                            <p
                            className="
                                text-fourth text-xs
                                absolute
                                right-0
                                w-full
                                text-right
                                pr-[5%]
                                sm:pr-[10%]
                                top-[51%]
                            "
                            >
                            <img
                                src="./images/unnamed.png"
                                alt="safe deal"
                                className="w-6 inline-block"
                            />
                            100% safe to buy
                            </p>
                        </div>

                        <div className="flex items-center mt-12 xl:mt-24 lg:ml-4">
                            <span
                            className="
                                text-3xl
                                lg:text-6xl
                                text-primary
                                w-24
                                bg-contain bg-no-repeat
                                h-24
                                flex
                                px-12
                                items-center
                                justify-center
                                mr-8
                                border-2 border-dashed border-primary
                                rounded-full
                            "
                            >3
                            </span>
                            <p className="text-2xl">Chose the best with Safe deal</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HowTo;