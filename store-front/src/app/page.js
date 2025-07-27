// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
//       <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
//           <li className="mb-2 tracking-[-.01em]">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
//               src/app/page.js
//             </code>
//             .
//           </li>
//           <li className="tracking-[-.01em]">
//             Save and see your changes instantly.
//           </li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }

'use client'; // This directive is crucial for using useState and useEffect in App Router pages

import { useState, useEffect } from 'react';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);

  // Access the environment variable here
  const backendApiBaseUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;
  const productsApiUrl = `${backendApiBaseUrl}/api/products`;
  const ordersApiUrl = `${backendApiBaseUrl}/api/orders`;

  // --- Effect to fetch products when the component mounts ---
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       setLoading(true);
  //       const response = await fetch(productsApiUrl);
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }
  //       const data = await response.json();
  //       setProducts(data);
  //     } catch (err) {
  //       setError(err.message);
  //       console.error("Error fetching products:", err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchProducts();
  // }, [productsApiUrl]); // Re-run if backend URL changes (unlikely in practice, but good for dependency array)

  // --- Cart Management Functions ---
  const addToCart = (productId) => {
    const productToAdd = products.find(p => p.id === productId);
    if (productToAdd) {
      setCart((prevCart) => [...prevCart, productToAdd]);
      console.log(`${productToAdd.name} added to cart!`);
    }
  };

  const placeOrder = async () => {
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }

    try {
      const response = await fetch(ordersApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items: cart, total: cart.reduce((sum, item) => sum + item.price, 0) }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Order placed successfully:', result);
      alert(`Order placed! Order ID: ${result.orderId}`);
      setCart([]); // Clear cart after order
    } catch (error) {
      console.error('Error placing order:', error);
      alert('Failed to place order.');
    }
  };

  // --- Render Logic ---
  if (loading) return (
    <main style={{ padding: '20px', fontFamily: 'sans-serif', textAlign: 'center' }}>
      {/* <h1>Loading Products...</h1> */}
      {/* <p>Please ensure your Express backend is running on {backendApiBaseUrl}</p> */}
      <h1>hello</h1>
    </main>
  );
  if (error) return (
    <main style={{ padding: '20px', fontFamily: 'sans-serif', textAlign: 'center', color: 'red' }}>
      <h1>Error: {error}</h1>
      <p>Could not fetch products. Is your backend running and accessible at {backendApiBaseUrl}?</p>
    </main>
  );

  return (
    <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Our Products</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
        {products.map(product => (
          <div key={product.id} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '15px', textAlign: 'center', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
            <img src={product.image} alt={product.name} style={{ maxWidth: '100%', height: '150px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }} />
            <h3 style={{ margin: '10px 0', fontSize: '1.2em' }}>{product.name}</h3>
            <p style={{ color: '#555', fontSize: '0.9em', height: '45px', overflow: 'hidden' }}>{product.description}</p>
            <p style={{ fontWeight: 'bold', fontSize: '1.4em', color: '#007bff', marginTop: '15px' }}>${product.price.toFixed(2)}</p>
            <button
              onClick={() => addToCart(product.id)}
              style={{
                backgroundColor: '#28a745', color: 'white', border: 'none',
                padding: '10px 15px', borderRadius: '5px', cursor: 'pointer',
                marginTop: '15px', fontSize: '1em'
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <hr style={{ margin: '40px 0', borderColor: '#eee' }} />

      <h2>Your Cart ({cart.length} items)</h2>
      {cart.length === 0 ? (
        <p>Cart is empty. Start adding some products!</p>
      ) : (
        <>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {cart.map((item, index) => (
              <li key={item.id + '-' + index} style={{ borderBottom: '1px solid #eee', padding: '10px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <img src={item.image} alt={item.name} style={{ width: '40px', height: '40px', borderRadius: '4px', marginRight: '10px' }} />
                <span style={{ flexGrow: 1 }}>{item.name}</span>
                <span style={{ fontWeight: 'bold' }}>${item.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <p style={{ fontWeight: 'bold', fontSize: '1.3em', marginTop: '15px', textAlign: 'right', borderTop: '1px solid #eee', paddingTop: '10px' }}>
            Total: ${cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
          </p>
          <button
            onClick={placeOrder}
            style={{
              backgroundColor: '#007bff', color: 'white', border: 'none',
              padding: '12px 20px', borderRadius: '5px', cursor: 'pointer',
              marginTop: '15px', fontSize: '1.1em', width: '100%'
            }}
          >
            Place Order
          </button>
        </>
      )}
    </main>
  );
}
