import { OnSaleInterface } from "@/app/Interfaces/interfaces";
import { getProducts } from "@/app/api/database";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const OnSale: React.FC<OnSaleInterface> = ({ products = [] }) => {
  let cart = JSON.parse(localStorage.getItem("cart") || "[]");
  function updateCart(id: number) {
    let index = cart.findIndex((item: any) => item.id === id);
    if (index === -1) {
      cart.push({ id, quantity: 1 });
    } else {
      cart[index].quantity += 1;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  if (products.length) {
    return (
      <div className="flex bg-orange-custom p-3 flex-wrap h-2/5 justify-between overflow-y-scroll">
        <p className="text-3xl text-red-custom p-3 text-center w-full">
          ON SALE
        </p>
        {products.map((item: any, index) => {
          return (
            <Link href={{
                pathname: "/product",
                query: { id: item.id },
            }}  className=" w-80 h-80 text-center my-2 shadow-lg" key={index}>
              <div
                className="flex bg-blue-100 w-80 h-48 justify-center items-center bg-cover bg-center"
                style={
                  item.images
                    ? { backgroundImage: `url(${item.images[0]})` }
                    : {}
                }
              ></div>
              <div className="flex flex-col pb-2 justify-between w-80">
                <div className="py-1 text-left font-medium">{item.heading}</div>
                <div className="py-1 text-left font-extralight">
                  {item.size}
                </div>
                <div className="py-1 text-left font-extralight">
                  {item.description}
                </div>
                <div className="p-1 flex justify-between ">
                  <div className="bg-white rounded-xl w-20 h-8 flex justify-center items-center">
                    {item?.sale}
                  </div>
                  <div className="">
                    <i
                      className="fa fa-plus-circle fa-2x text-white cursor-pointer"
                      onClick={() => updateCart(item.id)}
                    ></i>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    );
  } else {
    return <></>;
  }
};

export default OnSale;
