const ChooseAlternative = () => {
    return (
        <>
            <section className="pt-32 px-4 relative overflow-hidden">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-2 items-center gap-8 lg:gap-20 mb-40">
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
                            <img src="./images/c.png" alt="fair" className="w-full" />
                        </div>
                        <div className="w-full xl:w-1/2 ml-auto md:order-2 order-1">
                            <p
                            className="font-bold text-3xl lg:text-5xl mb-6 xl:mb-12 text-primary"
                            >
                            03
                            </p>
                            <h2 className="text-4xl lg:text-6xl text-fourth mb-8">
                            Choose an alternative
                            </h2>
                            <p className="text-2xl md:text-3xl text-tirtiary mb-6">
                            For each product you can quickly find similar ones, even cheaper!
                            </p>
                            <a href="#" className="font-bold text-fourth text-xl inline-block"
                            >Learn more</a>
                        </div>
                    </div>
                </div>
                <img
                    src="./images/path-9.png"
                    alt="path"
                    className="
                    absolute
                    bottom-24
                    -left-32
                    max-w-[20rem]
                    md:max-w-[30rem]
                    xl:max-w-[42rem]
                    z-[-1]
                    "
                />
            </section>
        </>
    )
}

export default ChooseAlternative;