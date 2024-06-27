import Link from 'next/link';
import { Fragment } from 'react';
import HomeIcon from '@/icons/Home';
import SearchIcon from '@/icons/Search';

import { Pacifico } from 'next/font/google';
import OffersIcon from '@/icons/OffersIcon';
import HelpIcon from '@/icons/Help';
import ShoppingCart from '@/icons/ShoppingCart';

const inter = Pacifico({ weight: ['400'], subsets: ['latin'] });
export default function NavBar() {
    return (
        <Fragment>
            <div className="bg-gray-600 bg-opacity-10 shadow-2xl sticky top-0 w-full p-4">
                <header className="flex items-center justify-between">
                    <div class="flex gap-8 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <Link
                            href={'/login'}
                            className="flex items-center bg-primary py-2 px-8 rounded-full text-white hover:font-semibold  hover:shadow-black/25 hover:shadow-md transition-all"
                        >
                            Login
                        </Link>
                        <Link
                            href={'/register'}
                            className="py-2 px-8 rounded-full text-white hover:text-primary hover:font-semibold  hover:shadow-black/25 hover:shadow-md transition-all"
                        >
                            Register
                        </Link>
                    </div>
                    <nav className="flex items-center gap-10 font-semibold">
                        <Link
                            className="text-primary font-bold text-4xl"
                            href="/"
                            style={{ fontFamily: inter.style.fontFamily }}
                        >
                            Foodie
                        </Link>
                        <Link
                            href={'/'}
                            className="hover:text-primary flex items-center"
                        >
                            <HomeIcon /> Home
                        </Link>

                        <Link
                            href="/"
                            className="hover:text-primary flex items-center"
                        >
                            <SearchIcon /> Search
                        </Link>
                        <Link
                            className="hover:text-primary flex items-center"
                            href={'/offers'}
                        >
                            <OffersIcon /> Offers
                        </Link>
                        <Link
                            className="hover:text-primary flex items-center"
                            href={'/help'}
                        >
                            <HelpIcon /> Help
                        </Link>
                        <Link
                            className="hover:text-primary flex items-center"
                            href={'/cart'}
                        >
                            <ShoppingCart /> Cart
                        </Link>
                    </nav>
                </header>
            </div>
        </Fragment>
    );
}
