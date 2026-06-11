import { authClient } from "@/lib/auth-client";
import { FaUserPen } from "react-icons/fa6";

export default function UpdateUserModal() {
  const handleUpdateForm = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;

    await authClient.updateUser({
      name,
      image,
    });

    document.getElementById("my_modal_2").close();
  };
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        <FaUserPen /> Update Profile
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box max-w-96 bg-base-200">
          <form onSubmit={handleUpdateForm}>
            <h1 className="text-xl font-bold mt-8 mb-4">
              Update User Information
            </h1>
            <label className="text-gray-500 font-semibold">Name</label>
            <br />
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input w-full mt-2 mb-4"
            />
            <br />
            <label className="text-gray-500 font-semibold">Image Url</label>
            <br />
            <input
              type="url"
              name="image"
              placeholder="Image Url"
              className="input w-full mt-2"
            />
            <br />
            <button
              className="btn bg-gray-700 text-white text-md w-full mt-4 mb-8"
              type="Submit"
            >
              Save
            </button>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}
