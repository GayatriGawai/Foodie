'use client';
import { Fragment } from 'react';
import { ArrowRightIcon } from '@heroicons/react/outline';
import { Pacifico } from 'next/font/google';
import { useRouter } from 'next/navigation';

const inter = Pacifico({ weight: ['400'], subsets: ['latin'] });


export default function () {
    const router= useRouter()

    function handleLearnMore() {
       router.push('/')
    }
    function handleOrderNow() {
      router.push('/search')
    }

    return (
        <Fragment>
            <section className="hero mb-8 mt-4 blackPaper">
                <div className="py-12 ">
                    <h1
                        className="text-4xl shadow"
                        style={{ fontFamily: inter.style.fontFamily }}
                    >
                        Where Every Sip and Bite Has a{' '}
                        <span className="font-semibold text-primary">
                            Story...
                        </span>
                    </h1>
                    <p className="my-4 indent-20 text-xl text-justify" style={{ fontFamily: inter.style.fontFamily }}>
                        As a devoted foodie, there's nothing more exhilarating
                        than the prospect of discovering new culinary delights.
                        Every dish tells a story, from the vibrant street food
                        of Bangkok to the intricate haute cuisine of Parisian
                        restaurants. The pursuit of unique flavors and textures
                        transforms each meal into an adventure, where the senses
                        are continuously awakened and satisfied. Whether it's
                        savoring the perfect umami in a bowl of ramen or
                        indulging in the delicate sweetness of a freshly baked
                        macaron, the world of food is an endless source of joy
                        and inspiration. For a true foodie, every bite is an
                        opportunity to explore and celebrate the rich tapestry
                        of global gastronomy.
                    </p>
                    <p className="my-4 indent-20 text-xl text-justify" style={{ fontFamily: inter.style.fontFamily }}>
                        As a devoted foodie, there's nothing more exhilarating
                        than the prospect of discovering new culinary delights.
                        Every dish tells a story, from the vibrant street food
                        of Bangkok to the intricate haute cuisine of Parisian
                        restaurants. The pursuit of unique flavors and textures
                        transforms each meal into an adventure, where the senses
                        are continuously awakened and satisfied. Whether it's
                        savoring the perfect umami in a bowl of ramen or
                        indulging in the delicate sweetness of a freshly baked
                        macaron, the world of food is an endless source of joy
                        and inspiration. For a true foodie, every bite is an
                        opportunity to explore and celebrate the rich tapestry
                        of global gastronomy.
                    </p>
                    <div className="flex gap-4 mt-10 text-sm">
                        <button
                            className="text-white hover:shadow-black/25 hover:shadow-md transition-all bg-primary uppercase flex items-center rounded-full gap-1 py-2 px-4"
                            onClick={(e) => handleOrderNow()}
                        >
                        Order now
                        <ArrowRightIcon className='h-4 w-4'/>
                          
                        </button>
                        <button
                            className="rounded-full hover:shadow-md transition-all flex justify-center gap-1 py-2 px-4 items-center font-semibold"
                            onClick={handleLearnMore}
                        >
                            Learn more
                            <ArrowRightIcon className='h-4 w-4'/>
                        </button>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}
