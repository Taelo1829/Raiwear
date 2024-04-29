"use client";
import React, { Component } from "react";
import { productType } from "../Interfaces/interfaces";
import { getProducts } from "../api/database";
import Image from "../components/Image";

export default class page extends Component {
  componentDidMount(): void {
    this.loadData();
  }
  constructor(props: any) {
    super(props);
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
            className={`${this.state.active === image ? "border border-1 border-orange-300" : "" } p-4`}
            onClick={() => this.setState({ active: image })}
          >
            <Image image={image} height="h-20" width="w-20" />
          </div>
        ))}
      </div>
    );
  }
  render() {
    if (this.state.loading)
      return <div className="text-center">Loading...</div>;
    return (
      <div className="flex justify-center h-screen">
        <div className="container min-h-2/3">
          <div className="shadow-lg h-full flex px-5">
            {this.renderImages()}
            <div className="shadow-lg px-5">
                <Image image={this.state.active} height="h-96" width="w-96" />
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
  };
}
