"use client";
import React, { Component } from "react";
import { AddNewInterface, sizeType } from "../Interfaces/interfaces";
import Toast from "../components/Toast";
import { useRouter, useSearchParams } from "next/navigation";
import { saveSize } from "../api/database";

class Size extends Component<AddNewInterface> {
    constructor(props: any) {
        super(props);
        this.save = this.save.bind(this);
        this.toggleToast = this.toggleToast.bind(this);
    
    }
  componentDidMount(): void {
    let id = this.props.id || 0;
    this.setState({ loading: false, id });
  }
  render() {
    if (this.state.loading)
      return (
        <div>
          <div className="text-center">loading ...</div>
          <Toast
            message={this.state.message}
            setShow={this.toggleToast}
            show={this.state.show}
            status={this.state.status}
            title="size"
          />
        </div>
      );
    return (
      <div className="flex justify-center  h-screen">
        <div className="container p-5">
          <div className="text-3xl font-bold">add size</div>
          <div className="p-10">
            <div>Size</div>
            <input
              type="text"
              className="border-b-2 border-black"
              onChange={(e) => this.setState({ size: e.target.value })}
              value={this.state.size}
            />
          </div>
          <div>
            <button className="border border-black py-2 px-5 text-3xl bg-black text-white rounded-3xl float-end" onClick={this.save}>
              save
            </button>
          </div>
        </div>
      </div>
    );
  }

  async save(){
    this.setState({loading:true})
    let sizeSaved = await saveSize({size:this.state.size})
    if(sizeSaved){
      this.toggleToast("Size added successfully","success")
    }else {
        this.toggleToast("Size not added","error")
    }
  }

  state: sizeType = {
    id: 0,
    loading: true,
    message: "Size added successfully",
    show: false,
    size: "",
    status: "success",
  };

  toggleToast = (message?: string, status?: string) => {
    this.setState({ show: !this.state.show, message, status });

    setTimeout(() => {
      this.setState({ loading: false });
      this.props.router.back();
    }, 2000);
  };
}

export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  console.log(id);
  return (
    <div>
      <Size id={id} router={router} />
    </div>
  );
}
