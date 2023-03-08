import React, { useState } from "react";
import Modal from "./Modal";

const Cards = ({nft}) => {
  const [openModal, setOpenModal] = useState(false);

  let image = nft.maker_asset_bundle.assets[0]?.image_preview_url;
  let name = nft.maker_asset_bundle.assets[0].name;
  let description = nft.maker_asset_bundle.assets[0].asset_contract.description;
  return (
    <div className="cards shadow-black  flex md:flex-row flex-col">
      <div className="card  bg-white border-8 p-5 text-cyan-900 mt-5 rounded-2xl text-center" onClick={() => setOpenModal(true)}>
        <img src={image} alt="NFT" className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] object-cover" />
        <h2>{name}</h2>
        <p>{description}</p>
      </div>

      {openModal && <Modal setOpenModal={setOpenModal} nft = {nft} />}
    </div>
  );
};

export default Cards;
