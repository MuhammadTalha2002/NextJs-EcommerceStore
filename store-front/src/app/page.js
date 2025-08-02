// src/app/page.js
import HeroBanner from "@components/HeroBanner";
import ProductGrid from "@components/ProductGrid";

// SSR-friendly metadata per-page
export async function generateMetadata() {
  return {
    title: "ShopEase | Home",
    description: "Discover the latest arrivals & best deals only at ShopEase.",
    openGraph: {
      title: "ShopEase | Home",
      description: "Discover the latest arrivals & best deals only at ShopEase.",
      url: "https://yourdomain.com",
      siteName: "ShopEase",
      images: [
        {
          url: "/images/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "ShopEase Home",
        },
      ],
      locale: "en_US",
      type: "website",
    },
  };
}

// Simulated SSR product data
const getProducts = async () => {
  return {
    latest: [
      { id: 1, name: "Headphones", price: "$249.99", image: "/images/products/headphones.png" },
      { id: 2, name: "Backpack", price: "$149.99", image: "/images/products/backpack.png" },
      { id: 3, name: "Turntable", price: "$499.99", image: "/images/products/turntable.png" },
    ],
    weekly: [
      { id: 4, name: "Hoodie", price: "$79.99", image: "/images/products/hoodie.png" },
      { id: 5, name: "Watch", price: "$199.99", image: "/images/products/watch.png" },
      { id: 6, name: "Desk Lamp", price: "$89.99", image: "/images/products/lamp.png" },
    ],
    sale: [
      { id: 7, name: "Blender", price: "$99.99", oldPrice: "$149.99", image: "/images/products/blender.png" },
      { id: 8, name: "Chair", price: "$159.99", oldPrice: "$199.99", image: "/images/products/chair.png" },
      { id: 9, name: "Speaker", price: "$39.99", oldPrice: "$59.99", image: "/images/products/speaker.png" },
    ]
  };
};

export default async function HomePage() {
  const products = await getProducts();

  return (
    <>
      <HeroBanner />
      <section className="px-4 md:px-12 py-12 space-y-12 bg-white" style={{ color: "black" }}>
        <ProductGrid title="Latest Drops" products={products.latest} />
        <ProductGrid title="Weekly Picks" products={products.weekly} />
        <ProductGrid title="Sale" products={products.sale} />
      </section>
    </>
  );
}
