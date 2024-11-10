// pages/index.js

import ProductCard from "./ProductCard";


export default function Products() {
  return (
    <div className="px-4 py-8 md:px-8 lg:px-16">
      {/* <h2 className="text-2xl font-bold mb-6">Our Products</h2> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Render multiple ProductCards */}
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}
