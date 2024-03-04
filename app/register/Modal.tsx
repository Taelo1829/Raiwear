import React, { Component } from "react";
import { modalType } from "../Interfaces/interfaces";

export default class Modal extends Component<modalType> {
  constructor(props: modalType) {
    super(props);
  }
  render() {
   if(this.props.isOpen){
    return (
        <div className="fixed top-1/3 left-1/4 shadow-2xl w-1/2 flex flex-col items-center bg-white rounded-md border border-1 border-gray-300">
          <div className="my-5 flex justify-between w-full px-10">
            <div className="text-2xl">reset password</div>
            <div>
              <i className="fa fa-close text-2xl cursor-pointer" onClick={this.props.closeModal}></i>
            </div>
          </div>
          <div className="my-5">
            <div className="text-2xl mb-5">
              enter your email to reset your password
            </div>
            <input
              type="email"
              className="border-b border-black w-full p-2"
              placeholder="email"
              onChange={(e:any)=> this.props.updateEmail(e.target.value)}
              value={this.props.email}
            />
            <span id="modalEmail"></span>
          </div>
          <div className="my-5 w-full px-10">
            <div className="float-end">
              <button className="border border-black p-2" onClick={this.props.sendPassword}>Send</button>
            </div>
          </div>
        </div>
      );
   }else{
    return <></>
   }
   
  }
}
