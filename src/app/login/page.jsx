"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";

export default function Login() {
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
    });

    if (error) {
      toast.error(error.message);
    }

    if (data) {
      toast.success("User is Successfully Login Now!");
    }
  };

  const handleGooogleSignin = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="flex justify-center items-center my-36">
      <form
        onSubmit={handleFormSubmit}
        className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
      >
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input validator"
            placeholder="Email"
            required
          />
          <p className="validator-hint hidden">Required</p>
        </fieldset>

        <label className="fieldset">
          <span className="label">Password</span>
          <input
            type="password"
            name="password"
            className="input validator"
            placeholder="Password"
            required
          />
          <span className="validator-hint hidden">Required</span>
        </label>

        <button className="btn btn-neutral mt-4" type="submit">
          Login
        </button>
        <div className="divider">OR</div>
        <button onClick={handleGooogleSignin} className="btn btn-soft">
          <FaGoogle /> Login With Google
        </button>
        <p className="text-center text-[14px]">
          Don't have an account?
          <Link href={"/signup"} className="text-blue-700 cursor-pointer">
            <span> Register now</span>
          </Link>
        </p>
      </form>
    </div>
  );
}
