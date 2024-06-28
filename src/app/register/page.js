"use client";
import { Fragment, useState } from "react";
import { Pacifico } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import { redirect } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";
import { signIn } from "next-auth/react";

const inter = Pacifico({ weight: ["400"], subsets: ["latin"] });

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  async function handleSubmit(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const response = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      toast.success("User Created");
      console.log("User created");
    } else {
      toast.error("Error while creating the user");
      console.error()
    }
    
  }

  return (
    <Fragment>
      <ToastContainer />
      <h2
        className="text-center mt-5 text-primary text-4xl font-semibold"
        style={{ fontFamily: inter.style.fontFamily }}
      >
        Register
      </h2>
      <form className="loginPaper" onSubmit={handleSubmit}>
        <div className="flex justify-between items-center">
          <label className="font-semibold">Email : </label>
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex justify-between items-center">
          <label className="font-semibold">Password :</label>
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex justify-between items-center gap-2">
          <label className="font-semibold">Confirm Password:</label>
          <input
            type="password"
            placeholder="confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button className="w-full rounded-full border-red-2 mt-2 py-2 text-white bg-primary hover:font-semibold hover:shadow-black/25 hover:shadow-md transition-all">
          Register
        </button>
        <div className="text-black font-semibold text-xs p-2 text-center">
          or login with provider
        </div>
        <button
          type="button"
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="flex gap-2 justify-center w-full bg-gray-300 rounded-full py-2 hover:text-primary hover:font-semibold hover:shadow-black/25 hover:shadow-md transition-all"
        >
          <Image src={"/google.png"} width={24} height={24} alt=""></Image>
          Login with Google
        </button>
        <div className="text-sm text-center text-black font-semibold border-t my-4 py-5">
          Already have an account?{" "}
          <Link className="underline hover:text-primary" href={"/login"}>
            Login{">>"}
          </Link>
        </div>
      </form>
    </Fragment>
  );
}
