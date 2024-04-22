"use client";
import React, { Component } from "react";
import { AddNewInterface, pcType } from "../Interfaces/interfaces";
import Toast from "../components/Toast";
import { useRouter, useSearchParams } from "next/navigation";
import { saveProductSubcategory } from "../api/database";

class ProductSubcategory extends Component<AddNewInterface> {
    constructor(props: any) {
        super(props);
        this.save = this.save.bind(this);
        this.toggleToast = this.toggleToast.bind(this);
    
    }
  componentDidMount(): void {
    let id = this.props.id || 0;
    this.setState({ loading: false, id ,title: this.props.value});
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
            title="product subcategory"
          />
        </div>
      );
    return (
      <div className="flex justify-center  h-screen">
        <div className="container p-5">
          <div className="text-3xl font-bold">add product subcategory</div>
          <div className="p-10">
            <div>product subcategory</div>
            <input
              type="text"
              className="border-b-2 border-black"
              onChange={(e) => this.setState({ title: e.target.value })}
              value={this.state.title}
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
    let pcSaved = await saveProductSubcategory({title:this.state.title,id:this.state.id})
    if(pcSaved){
      this.toggleToast("Product subcategory added successfully","success")
    }else {
        this.toggleToast("Product subcategory not added","error")
    }
  }

  state: pcType = {
    id: 0,
    loading: true,
    message: "Product subcategory added successfully",
    show: false,
    title: "",
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
  const value = searchParams.get("value");
  return (
    <div>
      <ProductSubcategory id={id} router={router} value={value}/>
    </div>
  );
}
