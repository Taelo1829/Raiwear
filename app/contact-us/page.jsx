"use client";
import React, { Component } from "react";
import Input from "./Input";
<<<<<<< HEAD
=======
import { sendMail } from "../../services/sendMail";
>>>>>>> 0533fd4043de714f1ab15c4521ba1ba50e7449a4

export default class page extends Component {
  state = {
    firstName: "",
    lastName: "",
    loading: false,
    email: "",
    mobile: "",
    subject: "",
    message: "",
  };

  constructor(props) {
    super(props);
    this.updateState = this.updateState.bind(this);
  }
<<<<<<< HEAD

  handleSend(){
    try{

    }catch(error){
      console.error(error)
    }
  }
=======
>>>>>>> 0533fd4043de714f1ab15c4521ba1ba50e7449a4
  updateState(data) {
    this.setState({ ...data });
  }

<<<<<<< HEAD
=======
   async handleSend (){
    let response = await sendMail('https://craftcode.design/');
    console.log(response);
}

  sendEmail = ({ to, from, subject, message }) => {
    // const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
    // sendSmtpEmail.sender = { name: from, email: from };
    // sendSmtpEmail.to = [{ email: to }];
    // sendSmtpEmail.subject = subject;
    // sendSmtpEmail.htmlContent = message;

    try {
    //   await sendinblueClient.sendTransacEmail(sendSmtpEmail);
      return "Email sent successfully!";
    } catch (error) {
      console.error("Error sending email:", error);
      throw error;
    }
  };
>>>>>>> 0533fd4043de714f1ab15c4521ba1ba50e7449a4
  render() {
    return (
      <div className="p-5 flex justify-center">
        <div className="absolute text-white text-center w-96 bg-green-400 p-5 top-1/2 hidden">
          <div>Message successfully sent</div>
        </div>
        {this.state.loading ? (
          <div className="text-center">Loading ...</div>
        ) : (
          <div className="w-full lg:w-3/6 ">
            <div className="text-2xl py-3">CONTACT US</div>
            <div className="bg-orange-custom flex justify-center ">
              <div className="container px-20 py-5">
                <div className="flex justify-between">
                  <Input
                    label={"First Name"}
                    onChange={this.updateState}
                    valueToUpdate="firstName"
                    value={this.state.firstName}
                  />
                  <Input
                    label={"Last Name"}
                    onChange={this.updateState}
                    valueToUpdate="lastName"
                    value={this.state.lastName}
                  />
                </div>
                <div className="flex justify-between">
                  <Input
                    label={"Email"}
                    onChange={this.updateState}
                    valueToUpdate="email"
                    value={this.state.email}
                  />
                  <Input
                    label={"Mobile Number"}
                    onChange={this.updateState}
                    valueToUpdate="mobile"
                    value={this.state.mobile}
                  />
                </div>
                <div className="flex justify-between p-3">
                  <div className="w-1/2">
                    <div>
                      <label>Contact Reason</label>
                    </div>
                    <select
                      className="w-ful p-2"
                      onChange={(e) =>
                        this.setState({ subject: e.target.value })
                      }
                    >
                      <option className="text-gray-300">Select Reason--</option>
                      <option>Custom Order</option>
                      <option>General Query</option>
                    </select>
                  </div>
                </div>
                <div className="flex justify-between m-3">
                  <div className="w-full">
                    <div>
                      <label>Message</label>
                    </div>
                    <div>
                      <textarea className="w-full min-h-20" />
                    </div>
                  </div>
                </div>
                <div className="float-end border border-black p-1 px-4 rounded-xl bg-orange-400 text-white cursor-pointer" onClick={this.handleSend
                }>
                  Send
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
