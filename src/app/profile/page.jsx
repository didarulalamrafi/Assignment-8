// "use client";
// import UpdateUserModal from "@/components/UpdateUserModal";
// import { authClient } from "@/lib/auth-client";
// import Image from "next/image";

// export default function Profile() {
//   const userData = authClient.useSession();
//   const users = userData.data?.user;

//   return (
//     <div className="bg-base-200 p-20 my-20 max-w-md mx-auto shadow-xl rounded-2xl">
//       <div className="avatar flex flex-col justify-center items-center">
//         <div className="ring-primary ring-offset-base-100 w-25 rounded-full ring-2 ring-offset-2">
//           <Image
//             src={users?.image}
//             alt={users?.name}
//             height={200}
//             width={200}
//             referrerPolicy="no-referrer"
//           />
//         </div>
//         <h1 className="text-2xl font-bold mt-5">{users?.name}</h1>
//         <h2 className="text-gray-500">{users?.email}</h2>
//         <div className="mt-5">
//           <UpdateUserModal />
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import UpdateUserModal from "@/components/UpdateUserModal";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Profile() {
  const userData = authClient.useSession();
  const users = userData.data?.user;

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex items-center justify-center px-4
      bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-800"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="backdrop-blur-lg bg-white/20 border border-white/30 
        p-10 md:p-14 max-w-md w-full rounded-3xl shadow-2xl"
      >
        <div className="flex flex-col justify-center items-center">
          <motion.div
            whileHover={{ scale: 1.08 }}
            className="ring-white ring-offset-4 ring-offset-transparent 
            w-28 rounded-full ring-4 overflow-hidden"
          >
            <Image
              src={users?.image || "/default-user.png"}
              alt={users?.name || "User"}
              height={200}
              width={200}
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-3xl font-bold mt-6 text-white"
          >
            {users?.name}
          </motion.h1>

          <p className="text-gray-200 mt-2">{users?.email}</p>

          <motion.div whileHover={{ scale: 1.05 }} className="mt-8">
            <UpdateUserModal />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
