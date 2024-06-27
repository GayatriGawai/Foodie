'use client';
import { Fragment } from 'react';
import { Pacifico } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const inter = Pacifico({ weight: ['400'], subsets: ['latin'] });
export default function Login() {
    return (
        <Fragment>
            <h2
                className="text-center mt-5 text-primary text-4xl font-semibold"
                style={{ fontFamily: inter.style.fontFamily }}
            >
                Login
            </h2>
            <div className="loginPaper">
                <div className="flex items-center justify-center gap-5">
                    <label>Username : </label>
                    <input
                        type="text"
                        placeholder="username"
                        className="items-center"
                    />
                </div>
                <div className="flex items-center justify-center gap-5">
                    <label>Password :</label>
                    <input
                        type="password"
                        placeholder="password"
                        className="items-center"
                    />
                </div>
                <button className="w-full rounded-full border-red-2 mt-2 py-1 text-white bg-primary ">
                    Login
                </button>
                <div className="text-black font-semibold text-xs p-2 text-center">
                    or login with provider
                </div>
                <button
                    type="button"
                    onClick={() => signIn('google', { callbackUrl: '/' })}
                    className="w-full rounded-full border-red-2 mt-2 py-1 text-white bg-primary"
                >
                    <Image
                        src={'/google.png'}
                        width={24}
                        height={24}
                        alt=""
                    ></Image>
                    Login with Google
                </button>
                <div className="text-sm text-center text-black font-semibold border-t my-4 p-2">
                    Don&apos;t have an account?{' '}
                    <Link
                        className="underline hover:text-blue-500"
                        href={'/register'}
                    >
                        Register &gt;&gt;
                    </Link>
                </div>
            </div>
        </Fragment>
    );
}
