"use client";

import React, { Component } from "react";
import { adminType } from "../Interfaces/interfaces";

export default class page extends Component {
    state:adminType = {
         orderHeaders:[],
    }
  render() {
    let style = "border border-1 border-black py-2 w-40 h-10 mx-2 text-center"
    return (
      <div className="h-screen flex justify-center">
        <div className="container">
          <div className="my-5">
            <button className={style}>orders</button>
           <select  className={style}>
            <option>products</option>
           </select>
           <select  className={style}>
            <option>pages</option>
           </select>
           <button className={style}>users</button>
          </div>
          <div className="my-10">
            <div>
                <button className={style +" bg-black text-white"}>export to excel</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
