import React, { Component } from "react";
import { modalType } from "../Interfaces/interfaces";

export default class Modal extends Component<modalType> {
  constructor(props: modalType) {
    super(props);
  }
  render() {
   if(this.props.isOpen){
    return (
        <div className="fixed top-1/3 left-1 w-full flex flex-col items-center ">
          <div className="shadow-2xl bg-white rounded-md border border-1 border-gray-30 w-1/2 px-5">
          <div className="my-5  w-full ">
              <i className="fa fa-close text-2xl cursor-pointer float-end" onClick={this.props.closeModal}></i>
          </div>
          <div className="my-5">
            <div className="text-2xl mb-5">
             update {this.props.title}
            </div>
            <input
              type="email"
              className="border-b border-black w-full p-2"
              placeholder={this.props.title}
              onChange={(e:any)=>this.setState({title:e.target.value})}
              value={this.state.title}
            />
            <span id="modalEmail"></span>
          </div>
          <div className="my-5 w-full overflow-hidden ">
            <div className="float-end">
              <button className="border border-black p-2" onClick={()=>this.props.saveItem? this.props.saveItem({[this.props.title]:this.state.title}):""}>SAVE</button>
            </div>
            </div>
          </div>
        </div>
      );
   }else{
    return <></>
   }
   
  }
  state:any = {
    title:""
  }
}
