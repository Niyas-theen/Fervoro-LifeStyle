import React, { useState } from 'react';

const Navbar = () => {
    // State to track whether the mobile menu is open or closed
    const [menuOpen, setMenuOpen] = useState(false);

    // Function to toggle the menu visibility
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="bg-[#f8f8f5] border-b px-4 py-4 lg:px-16 flex items-center justify-between">
            <div className="text-5xl font-serif text-[#11302b]">FERVORO</div>

            {/* Desktop Menu - Hidden on small screens */}
            <div className="hidden font-serif text-2xl md:flex space-x-8 ">
                <a href="#" className="text-gray-600">Mens</a>
                <a href="#" className="text-gray-600">Kids</a>
                <a href="#" className="text-gray-600">Collections</a>
                <a href="#" className="text-gray-600">About Us</a>
                <a href="#" className="text-gray-600">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden flex flex-col items-center justify-center space-y-1 focus:outline-none"
                onClick={toggleMenu}
            >

                <div className={`h-1 w-6 bg-[#11302b] transform transition-transform duration-300 ease-in-out ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <div className={`h-1 w-6 bg-[#11302b] transition-opacity duration-300 ease-in-out ${menuOpen ? 'opacity-0' : 'opacity-100'}`} />
                <div className={`h-1 w-6 bg-[#11302b] transform transition-transform duration-300 ease-in-out ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>



            {/* Mobile Menu - Visible only when menuOpen is true */}
            <div
                className={`${menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden transition-all duration-500 ease-in-out absolute top-16 left-0 w-full h-screen pl-6 pt-5 space-y-4 bg-[#f8f8f5] z-10 border-t`}
            >
                <a href="#" className="block font-serif text-xl px-4 py-2 text-[#text-[#11302b]">Mens</a>
                <a href="#" className="block font-serif text-xl px-4 py-2 text-[#text-[#11302b]">Kids</a>
                <a href="#" className="block font-serif text-xl px-4 py-2 text-[#text-[#11302b]">Collections</a>
                <a href="#" className="block font-serif text-xl px-4 py-2 text-[#text-[#11302b]">About Us</a>
                <a href="#" className="block font-serif text-xl px-4 py-2 text-[#text-[#11302b]">Contact</a>
                <a href="#"> <img src="./logo pngAsset 4@500x.png" alt="" className='w-32 pt-20 ' /> </a>
            </div>
        </nav>
    );
};

export default Navbar;