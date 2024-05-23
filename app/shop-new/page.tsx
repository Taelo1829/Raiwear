"use client";
import React, { Component } from "react";
import { getProducts } from "../api/database";
import { shopStateType } from "../Interfaces/interfaces";
import Link from "next/link";

export default class page extends Component {
  componentDidMount(): void {
    let { subcategory = "", category = "" } = this.props.searchParams;
    this.setState({ subcategory, category });
    this.loadData();
  }
  async loadData() {
    let products = await getProducts();
    let categories: string[] = [];
    let subcategories: any[] = [];
    for (let i = 0; i < products.length; i++) {
      if (products[i]) {
        let collection = products[i].collection.toLowerCase();
        if (collection && !categories.includes(collection)) {
          categories.push(collection);
        }
        let subcategory = products[i].category.toLowerCase();
        let index = subcategories.findIndex(
          (item: any) => item.category === subcategory
        );
        if (index === -1 && subcategory) {
          subcategories.push({
            category: subcategory,
            collections: [collection],
          });
        } else if (index !== -1) {
          if (!subcategories[index].collections.includes(collection)) {
            subcategories[index].collections.push(collection);
          }
        }
      }
    }
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    this.setState({
      products,
      filteredProducts: products,
      categories,
      cart,
      subcategories,
    });

    if (this.state.subcategory) {
      this.updateSubCategory(this.state.subcategory.toLowerCase());
    } else if (this.state.category) {
      this.updateCategory(this.state.category);
    }else {
      this.setState({ loading: false });
    }
  }
  updateCategory(category: string) {
    let filteredProducts = this.state.products.filter(
      (product: any) =>
        category === "" ||
        product.collection.toLowerCase() === category.toLowerCase()
    );
    this.setState({ category, filteredProducts, subcategory: "",loading:false });
  }

  updateSubCategory(subcategory: string) {
    let filteredProducts = this.state.products.filter(
      (product: any) =>
        subcategory === "" ||
        (product.category.toLowerCase() === subcategory.toLowerCase() &&
          (this.state.category === "" ||
            product.collection.toLowerCase() ===
              this.state.category.toLowerCase()))
    );
    this.setState({ subcategory, filteredProducts,loading:false });
  }
  renderCategories() {
    return this.state.categories.map((category, index) => {
      let subcategories = this.state.subcategories.filter(
        (item: any) =>
          item.collections.includes(category) &&
          this.state.category.toLowerCase() === category
      );
      return (
        <div key={index}>
          <div
            className="border-b-2 flex justify-between py-5 px-8 text-2xl cursor-pointer"
            onClick={() => this.updateCategory(category)}
          >
            <div>{category}</div>
            <div>
              <i className="fa fa-arrow-right"></i>
            </div>
          </div>
          {subcategories.map((subCat: any, subIndex) => (
            <div
              className="border-b-2 flex justify-between py-5 pl-16 cursor-pointer"
              key={subIndex + " - " + index}
              onClick={() => this.updateSubCategory(subCat.category)}
            >
              <div>{subCat.category}</div>
            </div>
          ))}
        </div>
      );
    });
  }

  renderSale(product: any) {
    if (
      product.sale &&
      new Date(product.saleStartDate) < new Date() &&
      new Date(product.saleEndDate) > new Date()
    ) {
      return (
        <div className=" my-2">
          <span className="text-2xl font-bold">{product.sale}</span> &nbsp;
          <span className="decoration-gray-600 text-gray-600 line-through font-thin">
            ({product.price})
          </span>
        </div>
      );
    } else {
      return <div className="text-2xl font-bold my-2">{product.price}</div>;
    }
  }
  renderProducts() {
    return this.state.filteredProducts.map((product, index) => (
      <div key={index} className="m-3 shadow-lg max-h-98 md:w-64 sm:w-48 pb-2">
        <Link
          href={{
            pathname: "/product",
            query: { id: product.id },
          }}
          className="flex bg-blue-100  md:w-64 sm:w-48 h-48 justify-center items-center bg-cover bg-center"
          style={
            product.images
              ? { backgroundImage: `url(${product.images[0]})` }
              : {}
          }
        ></Link>
        <div className="m-2">
          <div className="min-h-32">
            <div className="text-2xl my-2">{product.heading}</div>
            <div
              className="my-2 cursor-pointer text-blue-600 underline"
              onClick={() => this.updateCategory(product.collection)}
            >
              {product.collection}
            </div>
            <div
              className="my-2 cursor-pointer text-blue-600 underline"
              onClick={() => this.updateSubCategory(product.category)}
            >
              {product.category}
            </div>
            <div>{product.size}</div>
          </div>
          <div className="flex justify-between items-end">
            {this.renderSale(product)}
            <div>
              <i
                className="fa fa-plus-circle fa-2x cursor-pointer"
                onClick={() => this.updateCart(product.id)}
              ></i>
            </div>
          </div>
        </div>
      </div>
    ));
  }
  render() {
    if (this.state.loading)
      return <div className="text-center">Loading...</div>;
    return (
      <div className="flex h-screen overflow-hidden">
        <div className="sm:hidden md:block bg-black text-white p-3 border border-black h-full w-96 overflow-y-scroll">
          <div className="text-3xl font-bold border-b-2 py-5">categories</div>
          <div
            className="text-2xl border-b-2 py-5 px-4"
            onClick={() => this.updateCategory("")}
          >
            all
          </div>
          {this.renderCategories()}
        </div>
        <div className="w-full flex flex-wrap overflow-scroll h-full">
          {this.renderProducts()}
        </div>
      </div>
    );
  }

  state: shopStateType = {
    cart: [],
    category: "",
    categories: [],
    filteredProducts: [],
    loading: true,
    products: [],
    subcategories: [],
    subcategory: "",
  };

  updateCart(id: number) {
    let cart = this.state.cart;
    let index = this.state.cart.findIndex((item: any) => item.id === id);
    if (index === -1) {
      cart.push({ id, quantity: 1 });
    } else {
      cart[index].quantity += 1;
    }
    this.setState({ cart });
    localStorage.setItem("cart", JSON.stringify(cart));
  }
}
