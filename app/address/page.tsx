"use client";

import React, { useState } from "react";
import Image from "next/image";
import Checkout from "../components/Checkout";
import { useRouter } from "next/navigation";
import { getTotal } from "../helper/helper";

const Page = () => {
  const router = useRouter();

  const [items, setItems] = useState([
    {
      id: 1,
      name: "One piece - Luffy Straw Hat",
      description: "one size fits all",
      condition: "excellent condition",
      image: "/img/4.png",
      price: "R200",
    },
  ]);
  const [store, setStore] = useState("");
  const [stores, setStores] = useState([
    {
      id: 1,
      name: "Paxi Store",
    },
    {
      id: 2,
      name: "Postnet",
    },
  ]);
  return (
    <div className="h-screen flex justify-center">
      <div className="container">
        <div className="py-5">where do you want to receive your order?</div>
        <div className="my-5">
          <div className="mb-2">address</div>
          <select
            value={store}
            onChange={(e) => setStore(e.target.value)}
            className="border border-1 border-black p-2"
          >
            <option value={0} className="text-gray-500">
              -- select store --
            </option>
            {stores.map((store, index) => {
              return (
                <option key={index} value={store.id}>
                  {store.name}
                </option>
              );
            })}
          </select>
          <div className="my-2">
            specify name and location of pick up store*
          </div>
          <input
            className="border border-black border-1 p-2 min-w-80 my-2"
            placeholder="e.g SUNNINGHILL SQUARE Postnet"
          />
          <div className="border border-1 border-black px-2">
            <b className="mb-5">items</b>
            <div className="h-96 flex py-5">
              {items.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="border border-1 border-black flex"
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={300}
                      height={800}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <Checkout
          onClick={() => router.push("/checkout")}
          total={getTotal(items)}
        />
      </div>
    </div>
  );
};

export default Page;
