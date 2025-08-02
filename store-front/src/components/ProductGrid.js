// src/components/ProductGrid.js
import ProductCard from "@components/ProductCard";

export default function ProductGrid({ title, products }) {
  return (
    <div className="space-y-6 bg-white">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">{title}</h2>
        <a href="/category/all" className="text-sm text-blue-600 hover:underline" style={{ color: "black" }}>
          View all →
        </a>
      </div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
