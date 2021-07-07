const FindFair = () => {
    return (
        <>
            <section className="py-20 lg:py-40 px-4 relative">
                <img
                    src="./images/path-3.png"
                    alt="path"
                    className="
                    absolute
                    left-0
                    bottom-0
                    md:bottom-auto md:top-0
                    xl:max-w-[30rem]
                    z-[-1]
                    xl:block
                    hidden
                    "
                />
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-2 items-center gap-8 lg:gap-20">
                    <div
                        className="
                        shadow-2xl
                        px-6
                        py-10
                        bg-white
                        rounded-3xl
                        md:mb-0
                        mb-8
                        md:order-1
                        order-2
                        "
                    >
                        <img src="./images/fair.png" alt="fair" className="w-full" />
                    </div>
                    <div className="w-full xl:w-1/2 mx-auto order-1 md:order-2">
                        <p className="font-bold text-3xl lg:text-5xl mb-12 text-primary">01</p>
                        <h2 className="text-4xl lg:text-6xl text-fourth mb-8">
                        Find fair price
                        </h2>
                        <p className="text-2xl lg:text-3xl text-tirtiary mb-6">
                        Avoid fake discount - buy best price
                        </p>
                        <a href="#" className="font-bold text-fourth text-xl inline-block"
                        >Learn more</a>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FindFair