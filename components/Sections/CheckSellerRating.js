const CheckSellerRating = () => {
    return (
        <>
            <section className="py-20 md:py-32 px-4 relative overflow-hidden">
                <img
                    src="./images/path-8.png"
                    alt="path"
                    className="
                    absolute
                    bottom-0
                    md:bottom-auto md:top-0
                    max-w-[20rem]
                    md:max-w-[30rem]
                    xl:max-w-[42rem]
                    -right-20
                    z-[-1]
                    "
                />
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-2 items-center gap-8 lg:gap-20">
                    <div className="w-full xl:w-1/2 mx-auto">
                        <p
                        className="font-bold text-3xl lg:text-5xl mb-6 lg:mb-12 text-primary"
                        >
                        02
                        </p>
                        <h2 className="text-4xl lg:text-6xl text-fourth mb-8">
                        Check seller rating
                        </h2>
                        <p className="text-2xl lg:text-3xl text-tirtiary mb-6">
                        Seller reliability ratings will help you to buy safely
                        </p>
                        <a href="#" className="font-bold text-fourth text-xl inline-block"
                        >Learn more</a>
                    </div>
                    <div className="shadow-2xl px-6 py-10 bg-white rounded-3xl md:mb-0 mb-8">
                        <img src="./images/check-seller.png" alt="fair" className="w-full" />
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CheckSellerRating