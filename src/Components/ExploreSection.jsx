import React from 'react';

const ExploreSection = () => {
    return (
        <div className="bg-url(./MainBanner.jpg.jpg) py-12 px-6 ">
            {/* Main Container */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {/* Left Section (Text + Single Image for Mobile/Tablet) */}
                <div className=" text-[#11302b] p-2 flex flex-col justify-center items-center md:col-span-2 md:items-start lg:col-span-1">
                    <p className="text-xl font-serif mb-4 lg:text-left lg:text-2xl"> More to </p>
                    <h2 className="text-7xl md:text-8xl  font-serif mb-4 lg:text-left">Explore</h2>
                    <p className="text-xl text-center font-serif mb-8 lg:text-left">
                        Discover curated edit and seasonal collections
                    </p>
                </div>

                {/* Middle Section (Model Image 1) */}
                <div>
                    <img
                        src="./men.jpg" // replace with real image URL
                        alt="Model 1"
                        className="object-cover h-full w-full cursor-pointer"
                    />
                </div>

                {/* Right Section (Model Image 2) */}
                <div>
                    <img
                        src="./boy.jpg" // replace with real image URL
                        alt="Model 2"
                        className="object-cover h-full w-full cursor-pointer"
                    />
                </div>
            </div>
        </div>
    );
};

export default ExploreSection;
