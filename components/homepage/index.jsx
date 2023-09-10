import React from 'react'
import Header from '../Layout/Header';
import Image from 'next/image';


function HomeNav() {


    return (
        <div className='bg-primary min-h-screen'>
            <Header/>
            <div className='flex-col justify-center items-center text-center'>
                <div className='text-white w-7/12 mx-auto'>
                    <h1 className='font-bold text-6xl py-10 '>Create Amazing Digital Product For Your Business</h1>
                    <p>We are a professional digital agency that has been established since 2016, we present a variety of digital services that can help you solve problems in your business</p>
                </div>
                {/* Create a button to get started */}
                <div className='flex items-center justify-center mt-12'>
                    <button className='py-3 space-x-2 flex justify-center items-center font-bold bg-white px-3'>
                        <p>Get Started</p>
                        <span>
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.75 12.5H20.25" stroke="black" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round"/>
                                <path d="M13.5 5.75L20.25 12.5L13.5 19.25" stroke="black" strokeWidth="2" stroke-linecap="round" strokeLinecap="round"/>
                            </svg>
                        </span>
                    </button>

                </div>
                <div className='mx-auto flex items-center justify-center mt-[76px]'>
                    <Image src="/assets/hero/Rectangle-5.png"
                        width={1210}
                        height={631}/>
                </div>
                <div className='flex items-center justify-evenly mt-[50px] w-6/12 mx-auto'>
                    <div>
                        <h1 className='font-semibold text-xl'>1.2K+</h1>
                        <p className='text-gray text-sm'>Happy Clients</p>
                    </div>
                    <div>
                        <h1 className='font-semibold text-xl'>1.1K+</h1>
                        <p className='text-gray text-sm'>Worldwide Clients</p>
                    </div>
                    <div>
                        <h1 className='font-semibold text-xl'>6+</h1>
                        <p className='text-gray text-sm'>Years of Experience</p>
                    </div>
                    <div>
                        <h1 className='font-semibold text-xl'>12+</h1>
                        <p className='text-gray text-sm'>Awards Winners</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeNav;
