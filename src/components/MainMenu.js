"use client";
import { Fragment } from "react";
import MenuItem from "./MenuItem";
import { useRouter } from "next/navigation";

import { Pacifico } from "next/font/google";

const inter = Pacifico({ weight: ["400"], subsets: ["latin"] });
export default function MainMenu() {
  const router = useRouter();

  function onClick() {
    router.push("/itemname");
  }

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
        <div className="flex gap-5 mt-5">
          <button onClick={onClick}>
            <MenuItem />
          </button>
          <button onClick={onClick}>
            <MenuItem />
          </button>
          <button onClick={onClick}>
            <MenuItem />
          </button>
          <button onClick={onClick}>
            <MenuItem />
          </button>
          <button onClick={onClick}>
            <MenuItem />
          </button>
          <button onClick={onClick}>
            <MenuItem />
          </button>
        </div>
      </div>
    </Fragment>
  );
}
