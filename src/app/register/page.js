import { Fragment } from 'react';
import { Pacifico } from 'next/font/google';

const inter = Pacifico({ weight: ['400'], subsets: ['latin'] });

export default function Register() {
    return (
        <Fragment>
            <h2
                className="text-center mt-5 text-primary text-4xl font-semibold"
                style={{ fontFamily: inter.style.fontFamily }}
            >
                Register
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
                <div className="flex items-center justify-center gap-5">
                    <label>Confirm Password :</label>
                    <input
                        type="password"
                        placeholder="password"
                        className="items-center"
                    />
                </div>
            </div>
        </Fragment>
    );
}
