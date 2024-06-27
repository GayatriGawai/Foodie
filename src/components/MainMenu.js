import { Fragment } from 'react';
import MenuItem from './MenuItem';

import { Pacifico } from 'next/font/google';

const inter = Pacifico({ weight: ['400'], subsets: ['latin'] });
export default function MainMenu() {
    return (
        <Fragment>
            <div className="blackPaper">
                <p
                    style={{
                        fontFamily: inter.style.fontFamily,
                    }}
                >
                    What's your choice now?
                </p>
                <div className="grid grid-cols-6 grid-rows-5 gap-4 mt-5">
                    <div className="col-span-2 row-span-2">
                        <MenuItem />
                    </div>
                    <div className="col-span-2 row-span-2 col-start-3">
                        <MenuItem />
                    </div>
                    <div className="col-span-2 row-span-2 col-start-5">
                        <MenuItem />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
