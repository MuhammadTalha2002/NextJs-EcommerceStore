export default function Footer() {
    return (
      <footer className="w-full p-4 text-center text-sm border-t bg-white" style={{ color: "black" }}>
        © {new Date().getFullYear()} ShopEase. All rights reserved.
      </footer>
    );
  }