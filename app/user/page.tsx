"use client";
import React, { Component } from "react";
import { profileStateType, userType } from "../Interfaces/interfaces";
import Link from "next/link";
import Image from "next/image";
import Modal from "./Modal";
import { setUserData} from "../api/database";
import { getUserDetails } from "../helper/helper";
let userData =  getUserDetails();
 
export default class ClassPage extends Component {
  constructor(props: any) {
    super(props);
  }

  renderBody(isActive: boolean,toggleModal:(title:string)=>void) {
    if (isActive) {
      return (
        <div>
          <div className="my-10">{userData.displayName}</div>
          <div className="border border-black w-1/2 px-4">
            <div className="my-4">
              address <i className="fa fa-chevron-right float-end fa-2x cursor-pointer" onClick={()=>toggleModal("address")}></i>
            </div>
            <div className="my-4">
              email <i className="fa fa-chevron-right float-end fa-2x cursor-pointer" onClick={()=>toggleModal("email")}></i>
            </div>
            <div className="my-4">
              phone <i className="fa fa-chevron-right float-end fa-2x cursor-pointer" onClick={()=>toggleModal("phone")}></i>
            </div>
            <div className="my-4">
              change password{" "}
              <i className="fa fa-chevron-right float-end fa-2x cursor-pointer" onClick={()=>toggleModal("password")}></i>
            </div>
          </div>
          <div className="my-4">
            <Link href={"/?signout"} className="underline" >
              sign out
            </Link>
          </div>
          <div className="my-4">
            <Link href="/" className="underline">
              {" "}
              delete account
            </Link>
          </div>
          <div>
            at RAIWE we take your privacy very seriously and are committed to
            the protection of your personal data. Learn more about how we care
            for and use your data in our{" "}
            <span className="underline">privacy policy and cookie policy</span>.
          </div>
        </div>
      );
    } else {
      if (this.state.purchases.length === 0) {
        return (
          <div className="my-10">
            <div className="text-3xl">you have no purchases</div>
          </div>
        );
      }
      return (
        <div className="my-10">
          {this.state.purchases.map((purchase, index) => {
            return (
              <div key={index}>
                <div className="font-bold">{purchase.status}</div>
                <div>{purchase.deliveryDate}</div>
                <div>Paxi: {purchase.address}</div>
                <div className="w-1/2">{purchase.note}</div>
                <div className="border border-black w-1/3 py-5 px-3">
                  <div className="flex font-bold justify-between">
                    <div>items</div>
                    <div>{purchase.price}</div>
                  </div>
                  <div className="flex">
                    {purchase.items.map((item, index) => {
                      return (
                        <div key={index} className="flex border border-black">
                          <div className="flex justify-center">
                            <Image
                              src={item}
                              alt={item.name}
                              width={200}
                              height={200}
                              unoptimized
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      );
    }
  }

  toggleModal = (value: string) => {
    this.setState({modal:!this.state.modal, updateValue:value})
  }

  render() {
    return (
      <div className="h-screen flex justify-center">
        <div className="container py-10">
          <div className="flex">
            <div
              className={
                "cursor-pointer border border-black py-2 w-36 text-center " +
                (this.state.isActive ? "font-bold" : "")
              }
              onClick={(e) => this.setState({ isActive: true })}
            >
              profile
            </div>
            <div
              className={
                "cursor-pointer border border-black py-2 w-36 text-center mx-2 " +
                (!this.state.isActive ? "font-bold" : "")
              }
              onClick={(e) => this.setState({ isActive: false })}
            >
              purchases
            </div>
          </div>
          {this.renderBody(this.state.isActive,this.toggleModal)}
        </div>
        <Modal 
        isOpen={this.state.modal} 
        title={this.state.updateValue}
         closeModal={()=>this.toggleModal("")}
         saveItem={this.saveItem}
         />
      </div>
    );
  }

  saveItem:any = () => {
    this.setState({modal:false})
    let postData = {
      uid:userData.uid,
    }
     setUserData(postData)
  }

  state: profileStateType = {
    isActive: true,
    email:userData?.email,
    updateValue:"",
    modal:false,
    purchases: [
      {
        status: "delivered",
        deliveryDate: new Date().toDateString(),
        address: "1234 street",
        note: "lorem ipsum dolor sit amet, officia deserunt mollit anim id est laborum",
        price: "R100",
        items: [
          "https://www.merchoid.com/media/catalog/product/cache/65c63282a2b3bd0da0ec5b004bcde549/o/n/onepiece_luffy_strawhat_1.jpeg",
          "data:image/jpeg;base64,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",
        ],
      },
    ]
  };

  updateState = (data:any) =>{
    this.setState({...data})
  }
}

