"use client";
import { Fragment, useState } from "react";
import { Pacifico } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Pacifico({ weight: ["400"], subsets: ["latin"] });

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const result = await signIn("credentials", {
        email,
        password,
        callbackUrl: "/", // Set a specific path for the callback
      });
      if (result.error) {
        throw new Error(result.error);
      }
      setLogin(true);
    } catch (error) {
      toast.error("Error in login");
      setLogin(false);
      console.log("Error", error);
    }
  }

  return (
    <Fragment>
      <ToastContainer />
      <h2
        className="text-center mt-5 text-primary text-4xl font-semibold"
        style={{ fontFamily: inter.style.fontFamily }}
      >
        Login
      </h2>
      <form className="loginPaper" onSubmit={handleLogin}>
        <div className="flex items-center justify-center gap-5">
          <label className="font-semibold">Username : </label>
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="items-center"
          />
        </div>
        <div className="flex items-center justify-center gap-5">
          <label className="font-semibold">Password :</label>
          <input
            type="password"
            placeholder="password"
            className="items-center"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit" // Ensure the button is of type submit
          className="w-full rounded-full border-red-2 mt-2 py-2 text-white bg-primary hover:font-semibold hover:shadow-black/25 hover:shadow-md transition-all"
        >
          Login
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
          Don&apos;t have an account?{" "}
          <Link className="underline hover:text-primary" href={"/register"}>
            Register{">>"}
          </Link>
        </div>
      </form>
    </Fragment>
  );
}
