"use client";

import Image from "next/image";
import water from "@/assets/water.jpg";
import creame from "@/assets/creame.jpg";
import cap from "@/assets/cap.jpg";
import { motion } from "framer-motion";

export default function SummerTips() {
  const tips = [
    {
      id: 1,
      image: water,
      title: "Stay Hydrated",
      description: "Drink 8+ glasses of water daily to beat the heat",
    },
    {
      id: 2,
      image: creame,
      title: "Use SPF Daily",
      description: "Apply SPF 30+ sunscreen every 2 hours outdoors",
    },
    {
      id: 3,
      image: cap,
      title: "Cover Up",
      description: "Wear wide hats & UV protective clothing outside",
    },
  ];

  return (
    <div className="container mx-auto bg-[#EFE3CA] my-5 md:my-20 py-10 md:px-10 xl:px-30 rounded-2xl relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#3B7597]/10 blur-3xl rounded-full"></div>

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-10 text-center md:text-left relative z-10"
      >
        Summer Care Tips
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 xl:gap-10 text-center relative z-10">
        {tips.map((tip, index) => (
          <motion.div
            key={tip.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, scale: 1.02 }}
            className="bg-base-200 shadow-xl rounded-2xl pb-5 md:p-5 xl:p-10 overflow-hidden border border-white/20"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden rounded-xl"
            >
              <Image
                className="rounded-xl w-full object-cover"
                src={tip.image}
                alt={tip.title}
                height={100}
                width={400}
              />
            </motion.div>

            <h2 className="text-xl font-bold mt-5">{tip.title}</h2>

            <p className="text-md text-gray-500 mt-2">{tip.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
