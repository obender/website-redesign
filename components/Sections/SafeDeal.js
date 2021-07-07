const SafeDeal = () => {
    return (
        <>
            <section
                className="pt-60 pb-40 md:pb-60 xl:pb-96 text-center -mb-40 px-4"
                style={{ backgroundImage: "url('./images/path-2.png')" }}
                >
                <div className="container mx-auto">
                    <div className="max-w-2xl mx-auto pt-20 lg:pt-60">
                    <h2 className="text-2xl sm:text-3xl text-fourth">
                        Add
                        <img
                        src="./images/unnamed.png"
                        alt="logo"
                        className="w-10 sm:w-12 inline-block"
                        />
                        <span className="font-bold">Safe Deal</span> to your brower now to
                        choose the best products on
                    </h2>
                    <div
                        className="
                        flex
                        sm:flex-row
                        flex-col
                        justify-between
                        items-center
                        mt-6
                        mb-12
                        "
                    >
                        <img
                        src="./images/AliExpress-Logo.png"
                        alt="AliExpress"
                        className="block w-48"
                        />
                        <img src="./images/aa.png" alt="amazon" className="block w-40 h-12" />
                        <img src="./images/ebay.png" alt="ebay" className="block w-36" />
                    </div>
                    <a
                        href="#"
                        className="inline-block px-8 py-3 text-white bg-primary rounded-xl"
                        >Add to Chrome</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SafeDeal
