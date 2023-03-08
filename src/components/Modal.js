import React from "react";

const Modal = ({ setOpenModal, nft }) => {

  const url = nft.maker_asset_bundle.assets[0]?.permalink;

  return (
    <div
      className="fixed w-[100%] h-[100%] top-0 left-0 z-10 overflow-auto bg-black bg-opacity-70 shadow-md flex flex-col items-center justify-center"
      onClick={() => setOpenModal(false)}
    >
      <div
        className="top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-cyan-900 text-[#F1FAEE] p-5 max-w-md w-full flex flex-col justify-center fixed max-h-md h-[60vh] rounded-3xl"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button type="button" className="" onClick={() => setOpenModal(false)}>
          x
        </button>

        <h3>NFT Name</h3>
        <div className="flex flex-col">
          <p>
            
          </p>
          <p>
           
          </p>
          <a href={url} target="_blank">
          <button>Purchase</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
