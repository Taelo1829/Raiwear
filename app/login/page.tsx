"use client";
import Link from "next/link";
import React, { Component } from "react";
import { fieldValidation } from "../helper/helper";
import { loginUser, sendForgotPassword } from "../api/auth";
import Modal from "../register/Modal";
import { LoginInterface, loginType } from "../Interfaces/interfaces";
import { useRouter } from "next/navigation";
class Page extends Component<LoginInterface> {
  state: loginType = {
    email: "",
    password: "",
    loading: false,
    modalOpen: false,
  };

  constructor(props: any) {
    super(props);
    this.login = this.login.bind(this);
    this.updateState = this.updateState.bind(this);
    this.sendPassword = this.sendPassword.bind(this);
  }

  async login() {
    let value = fieldValidation("email", this.state.email);
    if (value) fieldValidation("password", this.state.password);
    if (value) {
      this.setState({ loading: true });
      let user: any = await loginUser(this.state.email, this.state.password);
      if (user.displayName) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        this.props.router.push("/");
      }

      this.setState({ loading: false });
    }
  }

  updateState(data: any) {
    this.setState(data);
  }

  async sendPassword() {
    if (fieldValidation("modalEmail", this.state.email)) {
      this.setState({ loading: true });
      await sendForgotPassword(this.state.email);
      this.setState({ loading: false, modalOpen: false });
      alert("password reset sent to your email");
    }
  }

  render() {
    return (
      <div className="flex justify-center relative">
        {this.state.loading ? (
          <>Loading...</>
        ) : (
          <div className="container bg-primary">
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
                <button
                  className="w-2/3"
                  onClick={() => this.updateState({ modalOpen: true })}
                >
                  have you forgotten your password?
                </button>
                <Modal
                  isOpen={this.state.modalOpen}
                  closeModal={() => this.updateState({ modalOpen: false })}
                  email={this.state.email}
                  sendPassword={this.sendPassword}
                  updateEmail={(e: string) => this.updateState({ email: e })}
                />
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
          </div>
        )}
      </div>
    );
  }
}

export default function login() {
  const router = useRouter();
  return <Page router={router} />;
}
