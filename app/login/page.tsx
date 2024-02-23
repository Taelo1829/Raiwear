"use client";
import Link from "next/link";
import React, { Component } from "react";
import { fieldValidation } from "../helper/helper";
import { loginUser } from "../api/auth";
export default class page extends Component {
  state: any = {
    email: "",
    password: "",
    loading: false,
  };

  constructor(props: any) {
    super(props);
    this.login = this.login.bind(this);
  }

  async login() {
    let value = fieldValidation("email", this.state.email);
    if (value) fieldValidation("password", this.state.password);
    if (value) {
        this.setState({loading: true})
      let user = await loginUser(this.state.email, this.state.password);
        localStorage.setItem("currentUser", JSON.stringify(user));
       location.href = "/"
        this.setState({loading: false})
    }
  }

  render() {
    return (
      <div className="flex justify-center">
       {this.state.loading?<>Loading...</> :<div className="container bg-primary">
          <div className="container flex justify-between">
            <div className="w-full px-5">
              <div className="py-10">log in to your account</div>
              <input
                placeholder="email"
                className="border-b border-black my-5  w-2/3"
                value={this.state.email}
                onChange={(e) => this.setState({ email: e.target.value })}
              />
              <span id="email"></span>
              <br />
              <input
                placeholder="password"
                className="border-b border-black my-5  w-2/3"
                value={this.state.password}
                onChange={(e) => this.setState({ password: e.target.value })}
                type="password"
              />
              <span id="password"></span>
              <br />
              <button
                className="border border-black w-2/3 my-5"
                onClick={this.login}
              >
                log in
              </button>
              <br />
              <button className="w-2/3">
                have you forgotten your password?
              </button>
              <br />
            </div>
            <div className="w-2/3 px-5">
              <div className="py-10 text-center">need an account?</div>
              <div className="border border-black w-full my-5 text-center">
                <Link href={"/register"} className="w-100 cursor-pointer">
                  register
                </Link>
              </div>
            </div>
          </div>
        </div>}
      </div>
    );
  }
}
