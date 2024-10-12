import React from 'react'

const Footer = () => {
    return (
        <div className='bg-[#f8f8f5]'>
            <div>
                <p className='font-serif text-[#11302b] text-center text-sm py-6 px-6'>
                    Sign up to receive the latest news, special
                    Offers and/or exclusive events relating to
                    Fervoro products and services, by e-mail or
                    Targeted social media ads. By signing up, you
                    Consent to the use of tracking technologies
                    For personalisation and analytics.
                </p>
                <form className="flex justify-center items-center py-5">
                    <input type="email" placeholder="Enter email" className="px-6 py-2 bg-[#f9f9f6] text-[#727272] outline outline-1 outline-[#11302b]" />
                    <button type="submit" className="px-6 py-2 bg-[#11302b] text-[#f9f9f6] outline outline-1 outline-[#11302b]">Submit</button>
                </form>
                <hr className='border-[#11302b]' />
            </div>
            <div>
                <div className="px-6 py-6 ">
                    <h3 className="text-4xl font-serif mb-5">FERVORO</h3>
                    <ul className="text-lg font-serif space-y-3 px-8">
                        <li><a href="#" className="hover:underline">Mens</a></li>
                        <li><a href="#" className="hover:underline">Kids</a></li>
                        <li><a href="#" className="hover:underline">Collections</a></li>
                        <li><a href="#" className="hover:underline">About Us</a></li>
                        <li><a href="#" className="hover:underline">Contact</a></li>
                    </ul>
                </div>
                <hr className='border-[#11302b]' />
            </div>
            <div className="text-center font-serif text-[#11302b] text-sm px-5 py-3">
                © Copyright 2024 All Rights Reserved Designed & Developed by Zeal Designing Studio
            </div>
        </div>
    )
}

export default Footer