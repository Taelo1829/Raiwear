"use client";
import React, { Component } from "react";
import { registerStateType } from "../Interfaces/interfaces";
import { createUser, updateUser } from "../api/auth";
import { fieldValidation } from "../helper/helper";
export default class page extends Component {
  state: registerStateType = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    receiveEmails: false,
    readPolicy: false,
    loading: false,
  };

  constructor(props: any) {
    super(props);
    this.createAccount = this.createAccount.bind(this);
  }

  async createAccount() {
    let valid = fieldValidation("firstName", this.state.firstName);
    if (valid)  valid = fieldValidation("lastName", this.state.lastName);
    if (valid)  valid = fieldValidation("lastName", this.state.email);
    if (valid)  valid = fieldValidation("lastName", this.state.password);
    if (valid)  valid = fieldValidation("lastName", this.state.readPolicy);
     
    if (valid) {
      this.setState({ loading: true });
      let user: any = await createUser(this.state.email, this.state.password);
      user = {
        ...user,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
      };
      localStorage.setItem("currentUser", JSON.stringify(user));
      await updateUser(this.state);
      this.setState({ loading: false });
      window.location.href = "/";
    } else {
      //   alert("please enter email and password");
    }
  }

  render() {
    return (
      <div className="flex justify-center">
        {this.state.loading ? (
          <>Loading ...</>
        ) : (
          <div className="container">
            <div className="py-10">personal details</div>
            <input
              placeholder="first name"
              className="border-b border-black my-5  w-1/2"
              value={this.state.firstName}
              onChange={(e) => this.setState({ firstName: e.target.value })}
            />
            <span id="firstName"></span>
            <br />
            <input
              placeholder="last name"
              className="border-b border-black my-5  w-1/2"
              value={this.state.lastName}
              onChange={(e) => this.setState({ lastName: e.target.value })}
            />
            <span id="lastName"></span>
            <br />
            <input
              placeholder="email"
              className="border-b border-black my-5  w-1/2"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
            <span id="email"></span>
            <br />
            <input
              className="border-b border-black my-5  w-1/2"
              placeholder="password"
              type="password"
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
            />
            <span id="password"></span>
            <br />
            <input
              type="checkbox"
              checked={this.state.receiveEmails}
              onChange={(e) =>
                this.setState({ receiveEmails: e.target.checked })
              }
            />
            I want to receive personalised commercial communications from
            RAIWEAR by email.
            <div>
              <input
                type="checkbox"
                checked={this.state.readPolicy}
                onChange={(e) =>
                  this.setState({ readPolicy: e.target.checked })
                }
              />{" "}
              I have read and understand the privacy and cookies policy
            </div>
            <span id="policy"></span>
            <div>
              <button
                className="border border-black w-1/2 my-5 py-3"
                onClick={this.createAccount}
              >
                create account
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}
