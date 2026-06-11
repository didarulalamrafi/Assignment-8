"use client";

import Image from "next/image";
import Link from "next/link";
import { IoMdStar } from "react-icons/io";
import { motion } from "framer-motion";

export default function ProductCard({ product }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className="flex flex-col items-center"
    >
      <div className="card bg-base-100 w-96 lg:w-85 xl:w-96 shadow-2xl p-3 rounded-2xl border border-base-300 transition-all duration-500 hover:shadow-[#3B7597]/30">
        {/* Product Image */}
        <figure className="aspect-square overflow-hidden rounded-2xl">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="w-full h-full"
          >
            <Image
              src={product.image}
              alt={product.name}
              height={400}
              width={400}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </figure>

        {/* Content */}
        <div className="card-body bg-base-200 rounded-2xl mt-3">
          <p className="text-[#093C5D]">{product.category}</p>

          <h2 className="card-title text-xl font-bold">{product.name}</h2>

          <div className="flex justify-between items-center">
            <p className="text-2xl font-semibold flex items-center gap-1">
              {product.rating}
              <span className="text-[#FFA02E]">
                <IoMdStar />
              </span>
            </p>

            <p className="text-2xl font-semibold">${product.price}</p>
          </div>

          <div className="card-actions">
            <Link className="w-full" href={`/products/${product.id}`}>
              <motion.button
                whileTap={{ scale: 0.96 }}
                whileHover={{ scale: 1.02 }}
                className="btn bg-[#3B7597] hover:bg-[#2d5f7c] text-white w-full border-0 rounded-xl"
              >
                View Details
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
