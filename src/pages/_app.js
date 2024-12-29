import "../styles/tailwind.css";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function App({ Component, pageProps }) {
  const [selectedWatch, setSelectedWatch] = useState({
    size: "42mm",
    material: "Aluminum",
    band: "Sport Band",
    bandColor: "Black",
    watchFace: "Modular",
  });

  return (
    <div className="bg-gray-50">
      <Header />
      <Component {...pageProps} selectedWatch={selectedWatch} setSelectedWatch={setSelectedWatch} />
      <Footer />
    </div>
  );
}
