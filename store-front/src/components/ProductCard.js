// src/components/ProductCard.js
import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow" style={{ color: "black" }}>
      <div className="relative w-full h-64">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-4"
          sizes="(min-width: 768px) 33vw, 100vw"
        />
      </div>
      <div className="p-4">
        <h3 className="text-md font-semibold">{product.name}</h3>
        <div className="mt-2">
          {product.oldPrice ? (
            <div className="space-x-2">
              <span className="line-through text-gray-400">{product.oldPrice}</span>
              <span className="text-lg font-bold ">{product.price}</span>
            </div>
          ) : (
            <span className="text-lg font-bold">{product.price}</span>
          )}
        </div>
      </div>
    </div>
  );
}
