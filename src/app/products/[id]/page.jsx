import Image from "next/image";
import { IoMdStar } from "react-icons/io";

export default async function ProductDetails({ params }) {
  const { id } = await params;

  const res = await fetch(
    "https://summer-essentials-store-three.vercel.app/db.json",
  );
  const data = await res.json();

  const findProduct = data?.products?.find(
    (product) => product.id === Number(id),
  );

  return (
    <div className="max-w-4xl mx-auto rounded-xl shadow-xl p-10 my-20 bg-base-200 flex flex-col md:flex-row justify-center items-center gap-5 md:gap-10">
      <div>
        <figure className="aspect-square">
          <Image
            className="rounded-2xl"
            src={findProduct.image}
            alt={findProduct.name}
            height={200}
            width={400}
          />
        </figure>
      </div>
      <div className="space-y-2">
        <h2 className="card-title text-3xl font-bold mb-2">
          {findProduct.name}
        </h2>
        <p className="text-[#093C5D] text-lg font-semibold">
          {findProduct.category} | {findProduct.brand}
        </p>
        <p className="text-[#093C5D] text-lg font-semibold">
          {findProduct.description}
        </p>
        <p className="text-black text-lg font-semibold">
          Stock: {findProduct.stock}
        </p>
        <div className="flex justify-between items-center">
          <p className="text-2xl font-semibold flex justify-center items-center">
            {findProduct.rating}{" "}
            <span className="text-[#FFA02E]">
              <IoMdStar />
            </span>
          </p>
          <p className="text-2xl font-semibold">${findProduct.price}</p>
        </div>
        <button className="btn bg-[#3B7597] text-white w-full mt-2">
          Add To Cart
        </button>
      </div>
    </div>
  );
}
