"use client";

// import React, { Fragment } from "react";
import SearchBar from "../../components/SearchBar";
import MenuItem from "../../components/MenuItem";

// export default function page() {
//   return (
//     <Fragment>
//       <div className="grid grid-cols-5 grid-rows-5 gap-4 blackPaper">
//         <div className="col-span-5">
//           <SearchBar />
//         </div>

//       </div>
//     </Fragment>
//   );
// }

import dynamic from "next/dynamic";
import { Fragment } from "react";
const Carousel = dynamic(() => import("react-multi-carousel"), { ssr: false });
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function MyCarousel() {
  return (
    <Fragment>
      <div>
        <SearchBar />
      </div>
      <div className="max-w-4xl mx-auto">
        <Carousel responsive={responsive}>
          <div><MenuItem/></div>
          <div><MenuItem/></div>
          <div><MenuItem/></div>
          <div><MenuItem/></div>
        </Carousel>
      </div>
    </Fragment>
  );
}
