"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navber() {
  const pathName = usePathname();
  const userData = authClient.useSession();
  const user = userData?.data?.user;

  const handleLogout = async () => {
    await authClient.signOut();
  };

  const link = (
    <>
      <li>
        <Link
          className={`font-bold ${pathName === "/" && "text-blue-600"}`}
          href="/"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          className={`font-bold ${pathName === "/products" && "text-blue-600"}`}
          href="/products"
        >
          Products
        </Link>
      </li>
      <li>
        <Link
          className={`font-bold ${pathName === "/profile" && "text-blue-600"}`}
          href="/profile"
        >
          My Profile
        </Link>
      </li>
    </>
  );

  return (
    <div className="bg-base-100 shadow-sm sticky top-0 z-10">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
          <h1 className="text-3xl font-bold">
            Sun<span className="text-[#FFA02E]">Cart</span>
          </h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>
        <div className="navbar-end flex gap-2">
          {!user ? (
            <>
              <Link
                href={"/login"}
                className="btn btn-outline rounded-3xl border-[#FFA02E] text-[#FFA02E] font-bold"
              >
                Login
              </Link>
              <Link
                href={"/signup"}
                className="btn btn-outline rounded-3xl border-[#FFA02E] text-[#FFA02E] font-bold"
              >
                SignUp
              </Link>
            </>
          ) : (
            <div>
              <div className="avatar">
                <div className="ring-primary ring-offset-base-100 w-9 rounded-full ring-2 ring-offset-2">
                  <Image
                    src={user.image}
                    alt={user.name}
                    height={100}
                    width={100}
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="btn btn-outline rounded-3xl border-[#FFA02E] text-[#FFA02E] font-bold ml-3"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
