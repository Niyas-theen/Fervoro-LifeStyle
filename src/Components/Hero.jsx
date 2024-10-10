import React from 'react';

const Hero = () => {
    return (
        <section className="relative bg-[#f8f8f5]">
            <div className="w-full h-full">
                <img
                    src="MainBanner.jpg" // Replace with the actual image URL
                    alt="Men in Polo"
                    className="object-cover w-full h-screen md:h-scheen"
                />
            </div>
            <div className="absolute inset-0 flex items-end justify-center ">
                <div className="text-center text-[#11302b] px-4 font-serif">
                    <h1 className="text-5xl space-y-5 md:text-6xl  ">FERVORO
                        MEN IN POLO</h1>
                    <p className="mt-4 text-sm  md:text-xl ">
                        Fervoro was born out of a passion for the refined lifestyle that polo represents. We saw an opportunity to blend the classic elements of polo with modern design,
                        creating a brand that celebrates both heritage and contemporary fashion. What started as a focus on the iconic polo shirt has now evolved into a complete
                        collection of elegant clothing that captures the essence of this sport. Our brand is a tribute to this timeless game, where tradition meets sophistication,
                        and every piece of clothing we create reflects these values.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;