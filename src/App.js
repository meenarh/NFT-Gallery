import "./App.css";
import Cards from "./components/Cards";
import hero from "./assets/images/image1.png";
import Footer from "./components/Footer";
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    const getNfts = async () => {
      const res = await axios
        .get(
          "https://testnets-api.opensea.io/v2/orders/goerli/seaport/listings?limit=6"
        )
        .then((res) => {
          console.log(res.data.orders);
          setNfts(res.data.orders);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getNfts();
  }, []);

  return (
    <div className="bg-white p-5 max-w-[1000px] m-auto items-center h-[100vh]">
      <header>
        <nav className="flex flex-row justify-between">
          <h4 className="logo md:text-2xl text-xl text-[#1D3557]">
            Non-Fungible Finds
          </h4>

          <ul className="flex flex-row justify-between text-[#1D3557]">
            <li className="pl-2">Home</li>
            <li className="pl-2">Gallery</li>
            <li className="pl-2">About</li>
          </ul>
        </nav>
      </header>

      <div className="flex flex-col md:grid grid-cols-3 justify-center">
        {nfts.map((nft) => {
          return <Cards nft={nft} key={nft.relay_id} />;
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
