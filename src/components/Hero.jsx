import Image from "next/image";
import heroImage from "@/assets/summer.png";
import "animate.css";

export default function Hero() {
  return (
    <div>
      <div className="bg-base-200 py-5 md:py-25 px-5 md:px-7 lg:px-30">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="animate__animated animate__fadeInLeft">
            <div className="badge badge-warning bg-[#FFA02E] text-gray-900 text-md font-bold mb-4 animate__animated animate__bounceInDown">
              Summer Sale 2025
            </div>

            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold animate__animated animate__fadeInUp">
              Hot Deals 🔥
            </h1>

            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold mt-3 animate__animated animate__fadeInUp animate__delay-1s">
              Up to <span className="text-[#FFA02E]">50% OFF</span>
            </h1>

            <p className="py-6 text-[18px] font-semibold text-gray-600 animate__animated animate__fadeInUp animate__delay-2s">
              Explore the best summer essentials — sunglasses, beach gear,
              skincare & more. <br /> Limited time offers!
            </p>

            <div className="flex gap-1 justify-center md:justify-start animate__animated animate__zoomIn animate__delay-3s">
              <button className="btn bg-[#FFA02E] rounded-3xl hover:animate__pulse">
                Shop Now
              </button>
              <button className="btn btn-outline border-[#FFA02E] rounded-3xl hover:animate__pulse">
                View All Deals
              </button>
            </div>
          </div>

          <div className="animate__animated animate__fadeInRight animate__delay-1s">
            <Image
              className="md:w-72 lg:w-96 animate__animated animate__float"
              src={heroImage}
              alt="summer-essentials"
              height={300}
              width={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
