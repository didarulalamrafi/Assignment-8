"use client";

import { motion } from "framer-motion";

export default function TopBrand() {
  const brands = [
    {
      id: 1,
      name: "SunShade",
      category: "Eyewear",
    },
    {
      id: 2,
      name: "GlowUp",
      category: "Skincare",
    },
    {
      id: 3,
      name: "WaveCo",
      category: "Beachwear",
    },
    {
      id: 4,
      name: "CoolZone",
      category: "Accessories",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto my-6 md:my-20 px-5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#3B7597]/10 blur-3xl rounded-full"></div>

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-10 text-center md:text-left relative z-10"
      >
        Top Brands
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10">
        {brands.map((brand, index) => (
          <motion.div
            key={brand.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            className="
              rounded-3xl
              p-8
              text-center
              border border-white/10
              bg-gradient-to-br from-[#0F172A] via-[#12344d] to-[#1E293B]
              shadow-xl
              hover:shadow-[#3B7597]/30
              transition-all duration-500
              relative overflow-hidden
              group
            "
          >
            {/* Hover Glow */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#3B7597]/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

            <motion.h2
              whileHover={{ scale: 1.05 }}
              className="text-4xl font-black bg-gradient-to-r from-[#7DD3FC] to-[#3B82F6] bg-clip-text text-transparent relative z-10"
            >
              {brand.name}
            </motion.h2>

            <p className="text-gray-300 text-xl mt-3 relative z-10">
              {brand.category}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
