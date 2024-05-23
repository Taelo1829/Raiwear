"use client";
import React, { Component } from "react";
import { MessageStateType } from "../Interfaces/interfaces";
import { getMessages, sendMessage } from "../api/database";

export default class page extends Component {
  constructor(props: any) {
    super(props);
  }
  componentDidMount(): void {
    this.loadData();
  }
  loadData = async () => {
    let id = this.props.searchParams.id;
    let message = await getMessages(id);
    if (message.length) {
      this.setState({
        date: message[0],
        email: message[1],
        firstName: message[2],
        id: message[3],
        lastName: message[4],
        message: message[5],
        mobile: message[6],
        subject: message[8],
        loading: false,
      });
      this.setOpen(id,{
        dateAdded: message[0],
        email: message[1],
        firstName: message[2],
        id: message[3],
        lastName: message[4],
        message: message[5],
        mobile: message[6],
        read:true,
        subject: message[8],
      })
    }
  };

  setOpen = async(id:string,postData:any)=>{
    await sendMessage(postData,id)
  }
  
  state: Readonly<MessageStateType> = {
    date: "",
    subject: "",
    email: "",
    message: "",
    firstName: "",
    lastName: "",
    loading: true,
  };

  render() {
    if (this.state.loading) {
      return <div className="text-center">Loading...</div>;
    } else {
      return (
        <div className="flex justify-center h-screen">
          <div className="container h-1/2">
            <div>
              <div className="text-2xl my-3">{this.state.subject}</div>
              <div className="my-3 font-light flex justify-between">
                <div>{this.state.email}</div>
                <div>
                  <i>{this.state.date}</i>
                </div>
              </div>
              <div className="my-3">{this.state.message}</div>
              <div className="font-bold my-3">
                {this.state.firstName} {this.state.lastName}
              </div>
              <div className="my-3 flex justify-end">
                <a
                  className="bg-black text-white p-5"
                  href={`mailto:tseholoba2@gmail.com`}
                >
                  <i className="fa fa-arrow-left"></i> Respond
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
