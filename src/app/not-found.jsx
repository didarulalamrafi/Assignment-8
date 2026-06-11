"use client";
import "animate.css";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center text-white px-4">
      <div className="text-center">
        <h1 className="text-8xl md:text-9xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text animate__animated animate__fadeInDown">
          404
        </h1>

        <p className="mt-4 font-bold text-lg md:text-xl text-gray-700 animate__animated animate__fadeIn animate__delay-1s">
          Oops! The page you are looking for does not exist.
        </p>

        <div className="mt-8 animate__animated animate__zoomIn animate__delay-2s">
          <Link href="/">
            <button className="px-6 py-3 cursor-pointer bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold shadow-lg hover:scale-105 hover:shadow-pink-500/50 transition-all duration-300">
              Go Back Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
