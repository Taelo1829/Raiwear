"use client";

import React, { useEffect, useState } from "react";
import Image from "../components/Image";
import Checkout from "../components/Checkout";
import { useRouter } from "next/navigation";
import { getTotal } from "../helper/helper";
import { getCart, getProducts, postCart } from "../api/database";

const Page = () => {
  const router = useRouter();
  const [items, setItems] = useState([]);
  const [store, setStore] = useState("");
  const [stores, _] = useState([
    {
      id: 1,
      name: "Paxi Store",
    },
    {
      id: 2,
      name: "Postnet",
    },
  ]);
  const [loading, setLoading] = useState(true);
  const [cartId, setCartId]:any = useState(0);
  const [storeName,setStoreName]:any = useState("");
  useEffect(() => {
    loadData();
  }, []);
  async function loadData() {
    try {
      let cart = JSON.parse(localStorage.getItem("cart") || "[]");
      const products = await getProducts();
      cart = cart.map((item: any) => {
        return products.find((prod: any) => prod.id === item.id);
      });
      setCartId(localStorage.getItem("cartId"));
      setItems(cart);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  async function updateAddress() {
    setLoading(true);
    let cart: any = await getCart(cartId);
    cart.store = store;
    cart.storeName = storeName;
    postCart(cart,cartId);
    router.push("/checkout")
  }

  if (loading) return <div className="text-center">loading....</div>;
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
                <option key={index} value={store.name}>
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
            placeholder="e.g SUNNINGHILL SQUARE Postnet" onChange={(e)=>setStoreName(e.target.value)}
          />
          <div className="border border-1 border-black px-2">
            <b className="mb-5">items</b>
            <div className="flex py-5">
              {items.map((item: any, index) => {
                return (
                  <div
                    key={index}
                    className="border border-1 border-black flex"
                  >
                    <Image alt="image" image={item.images[0]} width="w-72 h-80" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <Checkout onClick={updateAddress} total={getTotal(items)} />
      </div>
    </div>
  );
};

export default Page;
