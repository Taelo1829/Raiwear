"use client";

import React, { Component } from "react";
import { adminType } from "../Interfaces/interfaces";
import Image from "next/image";

export default class page extends Component {
  amountClick(type: string, item: any) {
    if (type === "amount") {
      this.setState({ selectedOrder: item, viewOrder: true });
    }
  }
  
  changeView(view: string) {
    this.setState({ currentView: view});
    setTimeout(()=>{
      this.setState({modal:""})
    },200)
  }

  getMenuOptions() {
    let options: string[] = [];
    switch (this.state.modal) {
      case "products":
        options = this.state.productsMenu;
        break;
      case "pages":
        options = this.state.pagesMenu;
        break;
    }
    return options;
  }

  getTableData() {
    let tableHeaders: string[] = [];
    let dataToUse: any[] = [];
    switch (this.state.currentView) {
      case "orders":
        tableHeaders = this.state.orderHeaders;
        dataToUse = this.state.orders;
        break;
      case "products":
        tableHeaders = this.state.productHeaders;
        dataToUse = this.state.products;
        break;
      case "products category":
        tableHeaders = this.state.productsCategoryMenu;
        dataToUse = this.state.productsCategories;
        break;
      case "contact us":
        tableHeaders = this.state.contactsMenu;
        dataToUse = this.state.contacts;
        break;
    }
    return {
      tableHeaders,
      dataToUse: dataToUse.sort((a, b) => a.date - b.date),
    };
  }

  render() {
    let style =
      "border border-1 border-black py-2 w-40 h-10 mx-2 text-center font-normal";
    let modalStyles =
      "m-5 p-5 text-white bg-black w-52 text-center flex items-center justify-center cursor-pointer border border-black";
    let { tableHeaders, dataToUse } = this.getTableData();
    return (
      <div className="h-screen flex justify-center">
        <div className="container">
          <div className="my-5">
            <div>
              <button
                className={
                  style +
                  (this.state.currentView == "orders" ? " bg-gray-200" : "")
                }
                onClick={(e)=>this.changeView("orders")}
              >
                orders
              </button>
              <button
                className={style + (this.state.productsMenu.includes(this.state.currentView) ? " bg-gray-200" : "")}
                onClick={() =>
                  this.setState({
                    modal: this.state.modal === "products" ? "" : "products",
                  })
                }
              >
                products{" "}
                <i
                  className={
                    "fa fa-chevron-" +
                    (this.state.modal === "products" ? "up" : "down")
                  }
                ></i>
              </button>
              <button
                className={style}
                onClick={() =>
                  this.setState({
                    modal: this.state.modal === "pages" ? "" : "pages",
                  })
                }
              >
                pages{" "}
                <i
                  className={
                    "fa fa-chevron-" +
                    (this.state.modal === "pages" ? "up" : "down")
                  }
                ></i>
              </button>
              <button className={style}>users</button>
            </div>
            <div className="bg-orange-custom my-4 flex ">
              {this.getMenuOptions().map((option: string, index: number) => {
                return (
                  <div key={index} className={modalStyles +(option === this.state.currentView ?" bg-white text-black":"")} onClick={()=> this.changeView(option)}>
                    {option}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="my-10 relative">
            <div>
        {this.state.currentView === "products" || this.state.currentView === "products category"? <>
            <button className={style + " bg-black text-white"}>
               add new
              </button>
            {this.state.currentView === "products" ?  <button className={style + " bg-black text-white"}>
             upload products
              </button>:""}
              </>:<></>}
             {this.state.currentView !== "products category" ?<button className={style + " bg-black text-white"}>
                export to excel
              </button>:<></>}
            </div>
            <div className="my-5">
              <table className="w-full border border-black">
                <thead className="h-14">
                {this.state.currentView === "orders"? <th className="border-r border-black">
                    <input
                      type="checkbox"
                      className="h-6 w-6 border border-1 border-black bg-transparent"
                    />
                  </th> : <></>}
                  {tableHeaders.map((item, index) => {
                    if (index == 0) {
                      return (
                        <th
                        key={item} className="max-w-24">
                          {item}
                        </th>
                      );
                    } else if(item === "actions"){
                      return (
                        <th
                          key={item}
                          className="border-l border-black max-w-24 text-end px-2 "
                        >
                          {item}
                        </th>
                      );
                    } else {
                      return (
                        <th
                          key={item}
                          className="border-l border-black max-w-24"
                        >
                          {item}
                        </th>
                      );
                    }
                  })}
                </thead>
                <tbody>
                  {dataToUse.map((item, index) => {
                    return (
                      <tr className="border-t border-black h-14" key={index}>
                          {this.state.currentView === "orders"?<td className="flex justify-center items-center h-14">
                          <input
                            type="checkbox"
                            className="h-6 w-6 border border-1 border-black bg-transparent"
                          />
                        </td>:""}
                        {tableHeaders.filter(header => header !== "actions").map((header, headerIndex) => {
                          return (
                            <td
                          
                              key={headerIndex}
                              className={
                                "border-l border-black text-center " +
                                (header === "amount" ? "cursor-pointer" : "")
                              }
                              onClick={() => this.amountClick(header, item)}
                            >
                              {item[header]}
                            </td>
                          );
                        })}
                        {item.actions ?<td className="px-5 border-l border-black w-10">
                          <div className="flex justify-end">
                            <div><i className="fa fa-edit fa-2x mx-5"></i></div>
                            <div><i className="fa fa-trash fa-2x"></i></div>
                          </div>
                        </td>:<></>}
                      </tr>
                    );
                  })}
                  {!dataToUse.length ? (
                    <tr className="border-t border-black h-6">
                      <td
                        colSpan={tableHeaders.length + 1}
                        className="text-center"
                      >
                        no data
                      </td>
                    </tr>
                  ) : null}
                </tbody>
              </table>
            </div>
            {this.state.viewOrder ? (
              <div className="absolute -top-16 w-full">
                <div className="float-end w-1/2  border-black border-4 bg-white p-5">
                  <div className="flex justify-between mb-5">
                    <div>
                      {" "}
                      <b className="text-2xl">order details</b>{" "}
                    </div>
                    <div>
                      <i
                        className="fa fa-close fa-2x cursor-pointer"
                        onClick={() =>
                          this.setState({ viewOrder: false, selectedOrder: {} })
                        }
                      ></i>
                    </div>
                  </div>
                  <div>
                    <div>
                      <b>{this.state.selectedOrder.status}</b>
                    </div>
                    <div>
                      {new Date(this.state.selectedOrder.date).toDateString()}
                    </div>
                    <div className="flex">
                      <div className="w-full">orderID</div>
                      <div className="w-full">
                        {this.state.selectedOrder.orderID}
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-full">customer name</div>
                      <div className="w-full">
                        {this.state.selectedOrder.customer}
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-full">email</div>
                      <div className="w-full">
                        {this.state.selectedOrder.email}
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-full">phone</div>
                      <div className="w-full">
                        {this.state.selectedOrder.phone}
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-full">address</div>
                      <div className="w-full">
                        {this.state.selectedOrder.address}
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-full">note</div>
                      <div className="w-full">
                        {this.state.selectedOrder.note}
                      </div>
                    </div>
                  </div>
                  <div className="border-4 border-black p-5">
                    <div className="flex justify-between">
                      <div>
                        <b>items</b>
                      </div>
                      <div>
                        <b>{this.state.selectedOrder.amount}</b>
                      </div>
                    </div>
                    <div className="flex h-48">
                      {this.state.selectedOrder.images.map(
                        (image: string, index: number) => {
                          return (
                            <div
                              key={index}
                              className="border border-1 border-black flex w-full"
                            >
                              <Image
                                src={image}
                                alt={image}
                                width={100}
                                height={100}
                              />
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    );
  }

  state: adminType = {
    contacts:[{
      "contact reason":"product enquiry",
      "email address":"example@gmail.com",
      "cc":"admin@gmail.com",
      "actions":true
    }],
    contactsMenu: ["contact reason", "email address","cc","actions"],
    currentView: "products category",
    modal: "",
    orderHeaders: ["orderID", "customer", "date", "status", "amount"],
    orders: [
      {
        orderID: 1,
        customer: "John",
        date: "2021-12-12",
        status: "pending",
        amount: "R200",
        email: "john@gmail.com",
        phone: "0712345678",
        address: "1234, 5th Avenue, New York, USA",
        note: "SUNNINGHILL SQUARE \nPostnet",
        images: ["/img/4.png", "/img/5.png", "/img/6.png"],
      },
      {
        orderID: 2,
        customer: "Jane",
        date: "2021-12-11",
        status: "pending",
        amount: "R200",
        email: "jane@gmail.com",
        phone: "0712345678",
        address: "1234, 5th Avenue, New York, USA",
        note: "JOHANNESBURG \n pexi store",
        images: ["/img/4.png", "/img/5.png"],
      },
    ],
    pagesMenu: ["about", "banner", "contact us"],
    productHeaders: ["heading","collection","subcategory","size","description","brand","price","quantity","sale","sale start date","sale end date","images","actions"],
    products:[{
      heading:"Budweiser bucket hat",
      collection:"Accessories",
      subcategory:"unisex",
      size:"one size fit all",
      description:"",
      brand:"RAIWEAR  Original",
      price:"R100",
      quantity:1,
      sale:"",
      "sale start date":"",
      "sale end date":"",
      "images":"",
      "actions":true
    }],
    productsCategories:[{
      title:"Accessories",
      actions:true
    }],
    productsCategoryMenu:["title","actions"],
    productsMenu: [
      "products",
      "products category",
      "products subcategory",
      "product brand",
    ],
    selectedOrder: {
      orderID: 0,
      customer: "",
      date: new Date().toISOString().split("T")[0],
      status: "",
      amount: "",
      images: [],
    },
    viewOrder: false,
  };
};
