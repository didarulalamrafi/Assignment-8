"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function Signup() {
  const router = useRouter();
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const image = e.target.image.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signUp.email({
      name,
      email,
      image,
      password,
    });

    if (error) {
      toast.error(error.message);
      return;
    }

    if (data) {
      toast.success("User is Successfully Signup Now!");
      router.push("/login");
    }
  };

  return (
    <div className="flex justify-center items-center my-20">
      <form
        onSubmit={handleFormSubmit}
        className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
      >
        <fieldset className="fieldset">
          <label className="label">Name</label>
          <input
            type="text"
            name="name"
            className="input validator"
            placeholder="Name"
            required
          />
          <p className="validator-hint hidden">Required</p>
        </fieldset>

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
          <span className="label">Photo-url</span>
          <input
            type="url"
            name="image"
            className="input validator"
            placeholder="Photo-url"
            required
          />
          <span className="validator-hint hidden">Required</span>
        </label>

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
          Register
        </button>
      </form>
    </div>
  );
}
