// src/components/HeroBanner.js
export default function HeroBanner() {
    return (
      <section className="bg-white text-center py-24 px-4" style={{ color: "black" }}>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Ecommerce Starter Template</h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
          Powered by ShopEase and Next.js
        </p>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-black text-white dark:bg-white dark:text-black px-6 py-3 text-lg rounded-full hover:scale-105 transition-transform"
        >
          View on GitHub →
        </a>
      </section>
    );
  }