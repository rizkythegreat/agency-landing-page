import Link from 'next/link'
import React from 'react'

function Header() {
    const NavMenu = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'Our Services',
            link: '/ourservice'
        },
        {
            name: 'Portfolio',
            link: '/portfolio'
        },
        {
            name: 'Testimonial',
            link: '/testimoni'
        }, {
            name: 'Contact Us',
            link: '/contact'
        }
    ]

    return (
        <div className=' text-white'>
            <nav className='py-10'>
                <div className="container mx-auto">
                    <div className="flex">
                        <div className="w-2/12 md:w-4/12 flex justify-center 2xl:justify-start items-center space-x-2 flex-grow">
                            <svg width="41" height="43" viewBox="0 0 41 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M39.2885 13.2619C38.5328 11.48 37.5328 9.81951 36.3188 8.33124C34.5243 6.06551 32.2849 4.21737 29.7479 2.90847C27.2109 1.59959 24.4338 0.859611 21.5995 0.737248C18.7652 0.614886 15.9379 1.11291 13.3036 2.19857C10.6695 3.28421 8.28806 4.93286 6.31622 7.036C4.34437 9.13912 2.82678 11.6491 1.86334 14.4007C0.899896 17.1522 0.512424 20.083 0.72645 23C0.940491 25.9172 1.75114 28.7544 3.10509 31.3251C4.45903 33.8959 6.32556 36.1418 8.58182 37.915C10.0295 39.0755 11.6292 40.0189 13.3333 40.7172C15.7224 41.7269 18.2795 42.2469 20.8615 42.2484C26.1912 42.2363 31.2988 40.0454 35.0648 36.156C38.8307 32.2667 40.9476 26.9963 40.9515 21.5C40.9554 18.6649 40.3892 15.8598 39.2885 13.2619ZM20.8467 4.94716C23.1654 4.94692 25.4561 5.46953 27.5582 6.47841C27.0456 6.70683 26.5066 6.86637 25.9545 6.95311C24.138 7.22428 22.4552 8.094 21.1573 9.43247C19.8594 10.7709 19.016 12.5063 18.753 14.3797C18.6376 15.4303 18.1742 16.4077 17.4412 17.1469C16.7081 17.8862 15.7502 18.3419 14.7291 18.4375C12.9125 18.7087 11.2297 19.5784 9.9318 20.9169C8.63391 22.2554 7.79053 23.9907 7.52758 25.8641C7.43854 26.863 7.02524 27.8018 6.35455 28.5284C5.19733 26.0069 4.67748 23.2243 4.84337 20.4399C5.00926 17.6555 5.85549 14.9596 7.30332 12.603C8.75114 10.2465 10.7535 8.30599 13.1241 6.96205C15.4947 5.61812 18.1564 4.91447 20.8615 4.91654L20.8467 4.94716ZM8.56697 32.2187C8.74515 32.0503 8.92333 31.8972 9.10152 31.7134C10.4225 30.3927 11.2704 28.6492 11.507 26.7675C11.6029 25.7097 12.0608 24.7217 12.7988 23.9806C13.509 23.2184 14.4648 22.7499 15.4864 22.6637C17.3029 22.3926 18.9857 21.5228 20.2836 20.1843C21.5815 18.8459 22.4249 17.1105 22.6879 15.2372C22.7522 14.1308 23.2125 13.0885 23.9797 12.3125C24.7074 11.565 25.6723 11.1137 26.697 11.0415C28.3658 10.8048 29.9222 10.0397 31.1515 8.85186C32.5513 10.0494 33.7371 11.49 34.6557 13.1087C34.5993 13.1873 34.5346 13.2593 34.4627 13.3231C33.754 14.0921 32.7994 14.5708 31.7751 14.6706C29.9566 14.937 28.2713 15.8053 26.9725 17.1445C25.6739 18.4839 24.832 20.2219 24.5736 22.0972C24.4689 23.1513 24.0141 24.1357 23.2863 24.8836C22.5582 25.6316 21.602 26.097 20.5794 26.2009C18.7575 26.47 17.0685 27.338 15.763 28.6759C14.4576 30.0139 13.6055 31.7503 13.3333 33.6275C13.2534 34.3758 13.0041 35.0944 12.6057 35.7253C11.0823 34.7925 9.71786 33.6079 8.56697 32.2187ZM20.8467 38.1294C19.34 38.1311 17.8404 37.9145 16.3921 37.4862C16.8876 36.5338 17.2097 35.4958 17.3424 34.4237C17.4465 33.3719 17.8992 32.3893 18.6241 31.6418C19.349 30.8942 20.3019 30.4273 21.3218 30.32C23.141 30.0519 24.8272 29.1835 26.1281 27.8447C27.4288 26.5061 28.2745 24.7689 28.5382 22.8934C28.6423 21.8416 29.095 20.859 29.8199 20.1115C30.5448 19.3639 31.4976 18.897 32.5176 18.7897C33.8866 18.6061 35.1915 18.0804 36.3188 17.2584C36.9448 19.7052 37.0189 22.2673 36.5356 24.7482C36.0522 27.2292 35.0241 29.5631 33.5304 31.5707C32.0366 33.5782 30.1169 35.2064 27.9181 36.33C25.7195 37.4536 23.3005 38.043 20.8467 38.0528V38.1294Z" fill="#60D59D"/>
                            </svg>
                            <p>Bubble Bash</p>
                        </div>
                        <div className="w-full md:flex list-none space-x-4 items-center justify-end hidden">
                            {
                            NavMenu.map((menu, i) => (
                                <Link key={i}
                                    href={
                                        menu.link
                                }>
                                    <li className='font-sans text-xs md:text-base px-2 py-2 hover:shadow-sm'
                                        key={i}>
                                        {
                                        menu.name
                                    }</li>
                                </Link>
                            ))
                        } </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
