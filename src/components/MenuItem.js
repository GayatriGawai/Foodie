'use client';
import { Fragment } from 'react';

export default function MenuItem() {
    return (
        <section className='flex'>
            <div className="bg-gray-200 opacity-70 text-center p-4 rounded-lg hover:bg-white hover:shadow-black/25 hover:shadow-md transition-all">
                <div className="text-center rounded-full">
                    <>Image</>
                </div>
                <h2 className="font-semibold text-xl my-3">Item name</h2>
            </div>
        </section>
    );
}
