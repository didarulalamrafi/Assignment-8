import ProductCard from "./ProductCard";

export default async function TopProducts() {
  const res = await fetch("https://summer-essentials-store-three.vercel.app/db.json");
  const data = await res.json();

  return (
    <div className="max-w-6xl mx-auto my-6 md:my-20">
      <h1 className="text-4xl font-bold mb-5 text-center md:text-left">
        Popular Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-10">
        {data.products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
