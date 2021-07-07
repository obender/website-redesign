const HeaderWrapper = ({ heading }) => {
    return (
        <>
            <section className="relative overflow-hidden">
                <img
                    src="./images/path-1.png"
                    alt="path"
                    className="
                    absolute
                    right-0
                    top-0
                    z-[-1]
                    w-1/3
                    xl:w-3/5
                    h-full
                    xl:block
                    hidden
                    "
                />
                <img
                    src="./images/big-logo.png"
                    alt="big logo"
                    className="
                    absolute
                    top-0
                    -right-20
                    md:-right-48
                    max-w-[12rem]
                    md:max-w-md
                    xl:max-w-3xl
                    z-[-1]
                    xl:block
                    hidden
                    "
                />
                <header
                    className="
                    header
                    py-3
                    xl:py-5
                    sticky
                    top-0
                    left-0
                    right-0
                    w-full
                    z-10
                    px-4
                    bg-white
                    lg:bg-transparent
                    "
                >
                    <div className="lg:container mx-auto">
                    <div className="flex lg:flex-row flex-col items-center">
                        <div
                        className="logo w-full lg:w-auto flex justify-between items-center"
                        >
                        <a href="/" className="flex flex-nowrap items-center text-fourth">
                            <img src="./images/logo.png" alt="logo" className="w-16" />
                            <span className="font-bold text-2xl uppercase">{ heading }</span>
                        </a>
                        <button className="lg:hidden navBtn">
                            <img src="./images/bars-solid.svg" alt="Bar" className="w-8 h-8" />
                        </button>
                        </div>
                        <nav
                        className="w-full lg:w-auto lg:ml-auto nav bg-white lg:bg-transparent"
                        >
                        <ul
                            className="
                            lg:flex
                            text-fourth
                            lg:text-white
                            items-center
                            lg:pl-0
                            pl-4
                            lg:pb-0
                            pb-4
                            "
                        >
                            <li>
                                <a
                                    href="#"
                                    className="inline-block px-2 mr-4 xl:mr-8 text-lg nav-link"
                                    >Features
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="inline-block px-2 mr-4 xl:mr-8 text-lg nav-link"
                                    >Mission
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="inline-block px-2 mr-4 xl:mr-8 text-lg nav-link"
                                    >Blog
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="inline-block px-2 mr-4 xl:mr-8 text-lg nav-link"
                                    >Support
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="
                                    inline-block
                                    text-lg text-fourth
                                    bg-white
                                    rounded-xl
                                    px-6
                                    py-2
                                    add-to
                                    "
                                    >Add to Chromoe
                                </a>
                            </li>
                        </ul>
                        </nav>
                    </div>
                    </div>
                </header>
                <div className="container mx-auto px-3">
                    <div className="grid lg:grid-cols-2 mt-20 pb-40 xl:pb-60 items-center">
                    <div className="lg:order-1 order-2 smLpr-0 pr-12">
                        <h1 className="text-3xl md:text-5xl xl:text-7xl font-black text-black">
                        Shop Online with Confidence
                        </h1>
                        <p className="text-2xl md:text-4xl text-secondary my-6 lg:my-12">
                        Safe Deal protects you from online security issues.
                        </p>
                        <a
                        href="#"
                        className="
                            inline-block
                            text-white
                            bg-primary
                            rounded-xl
                            px-8
                            text-2xl
                            md:text-3xl
                            py-3
                            mt-0
                        "
                        >Add to Chromoe
                        </a>
                    </div>
                    <div className="lg:order-2 order-1">
                        <h2 className="text-4xl md:text-6xl xl:text-9xl lg:text-white">
                        <span className="text-xs block">Absolutely </span>
                        Free extention
                        </h2>
                        <img src="./images/icons.png" alt="icon" className="block" />
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeaderWrapper;