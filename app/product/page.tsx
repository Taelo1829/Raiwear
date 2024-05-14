"use client";
import React, { Component } from "react";
import { productType } from "../Interfaces/interfaces";
import { getProducts } from "../api/database";
import Image from "../components/Image";
import Link from "next/link";

export default class page extends Component {
  componentDidMount(): void {
    this.loadData();
  }
  constructor(props: any) {
    super(props);
    this.updateCart = this.updateCart.bind(this);
  }

  async loadData() {
    console.log("getting products");
    let products = await getProducts();
    let product = products.find(
      (product: productType) => product.id === this?.props?.searchParams?.id
    );
    this.setState({ ...product, loading: false, active: product.images[0] });
  }

  renderImages() {
    return (
      <div>
        {this.state.images.map((image: string, index: number) => (
          <div
            className={`${
              this.state.active === image
                ? "border border-1 border-orange-300"
                : ""
            } p-4`}
            onClick={() => this.setState({ active: image })}
          >
            <Image image={image} height="h-20" width="w-20" />
          </div>
        ))}
      </div>
    );
  }

  renderPrice() {
    if (
      this.state.sale &&
      new Date(this.state.saleStartDate) < new Date() &&
      new Date(this.state.saleEndDate) > new Date()
    ) {
      return (
        <div>
          <div>{this.state.sale}</div>
          <div className="line-through">R{this.state.price}</div>
        </div>
      );
    } else {
      return <div>{this.state.price}</div>;
    }
  }

  
  updateCart() {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    let index = cart.findIndex((item: any) => item.id === this.state.id);
    if (index === -1) {
      cart.push({ id:this.state.id, quantity: 1 });
    } else {
      cart[index].quantity += 1;
    }
    this.setState({ cart });
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  render() {
    if (this.state.loading)
      return <div className="text-center">Loading...</div>;
    return (
      <div className="flex justify-center relative">
        {this.state.viewFull?<div className="absolute shadow-2xl w-5/6 h-full bg-white p-5">
          <div> <i className="fa fa-close fa-2x float-end cursor-pointer" onClick={()=> this.setState({viewFull:false})}></i></div>
          <div className="flex">
        <div>{this.renderImages()}</div>
        <div className="w-full flex justify-center items-center">
          <Image image={this.state.active} width="w-104" height="h-full" />
        </div>
        </div>
        </div>:<></>}
        <div className="container flex justify-center">
          <div className="shadow-xl flex p-5">
            {this.renderImages()}
            <div
              className={`flex flex-col 
                hover:shadow-2xl p-5 h-96 w-96 hover:border-orange-300 hover:border hover:border-1 mx-10`}
                onClick={()=> this.setState({viewFull:true})}
            >
             
              <div>
                <Image image={this.state.active} height="h-80" width="w-80" />
              </div>
            </div>
            <div>
              <div className="text-3xl my-3">{this.state.heading}</div>
              <div>
              <Link
                className="text-blue-500 underline mb-2"
                href={{
                  pathname: "/shop-new",
                  query: { category: this.state.collection },
                }}
              >
                {this.state.collection}
              </Link>
              </div>
              <div>
              <Link
                className="text-blue-500 underline mb-2"
                href={{
                  pathname: "/shop-new",
                  query: { subcategory: this.state.category },
                }}
              >
                {this.state.category}
                </Link>
                </div>
              <div className="text-3xl mb-2">{this.state.description}</div>
              <div className="mb-2">
                Be the first to{" "}
                <Link
                  className="text-blue-500"
                  href={{
                    pathname: "/product/review",
                    query: { id: this.state.id },
                  }}
                >
                  write a review
                </Link>
              </div>
              <div className="mb-2">{this.state.size}</div>
              <div className="text-2xl mb-2"> {this.renderPrice()}</div>
              <button className="border border-black py-2 px-5  bg-black text-white" onClick={this.updateCart}>
                add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  state: productType = {
    active: "",
    category: "",
    collection: "",
    brand: "",
    description: "",
    heading: "",
    id: 0,
    loading: true,
    images: [],
    price: "",
    sale: "",
    saleEndDate: "",
    saleStartDate: "",
    size: "",
    viewFull: false,
  };
}
