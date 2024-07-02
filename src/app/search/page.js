"use client";
import SearchBar from "../../components/SearchBar";
import MenuItem from "../../components/MenuItem";

import dynamic from "next/dynamic";
import { Fragment } from "react";
const Carousel = dynamic(() => import("react-multi-carousel"), { ssr: false });
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 15,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 10,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 7,
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
      <div>
        <Carousel responsive={responsive}>
          <div className="flex justify-center  gap-1 blackPaper">
            <MenuItem />
          </div>
          <div className="flex justify-center  gap-1 blackPaper">
            <MenuItem />
          </div>
          <div className="flex justify-center  gap-1 blackPaper">
            <MenuItem />
          </div>
          <div className="flex justify-center  gap-1 blackPaper">
            <MenuItem />
          </div>
          <div className="flex justify-center  gap-1 blackPaper">
            <MenuItem />
          </div>
          <div className="flex justify-center  gap-1 blackPaper">
            <MenuItem />
          </div>
          <div className="flex justify-center  gap-1 blackPaper">
            <MenuItem />
          </div>
          <div className="flex justify-center  gap-1 blackPaper">
            <MenuItem />
          </div>
          <div className="flex justify-center  gap-1 blackPaper">
            <MenuItem />
          </div>
          <div className="flex justify-center  gap-1 blackPaper">
            <MenuItem />
          </div>
          <div className="flex justify-center  gap-1 blackPaper">
            <MenuItem />
          </div>
          <div className="flex justify-center  gap-1 blackPaper">
            <MenuItem />
          </div>
          <div className="flex justify-center  gap-1 blackPaper">
            <MenuItem />
          </div>
          <div className="flex justify-center  gap-1 blackPaper">
            <MenuItem />
          </div>
        </Carousel>
      </div>
    </Fragment>
  );
}
