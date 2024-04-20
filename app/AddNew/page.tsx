"use client"
import React, { Component } from 'react'
import { AddNewInterface, productType } from '../Interfaces/interfaces'
import { saveProduct } from '../api/database';
import Toast from '../components/Toast';
import { useRouter, useSearchParams } from 'next/navigation';

 class AddNew extends Component<AddNewInterface>{
  constructor(props:any){
    super(props)
    this.save = this.save.bind(this)
    this.toggleToast = this.toggleToast.bind(this)  
  }
  
   componentDidMount(){
    let id = this.props.id || 0
    this.setState({loading:false,id})
  }

  handleImageUpload = (e:any) => {
    const files = e.target.files;
    const images:any = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
      reader.onload = (e) => {
        if(e.target && e.target.result)
        images.push(e.target.result);
      };
      reader.readAsDataURL(file);
    }
    this.setState({ images });
  }

  render() {
    if(this.state.loading) return(<div>
      <Toast 
        message={this.state.message} 
        setShow={this.toggleToast}
        show={this.state.show}
        status={this.state.status}
        title="product"/>
     <div className='text-center'>Loading...</div>
    </div>)
    return (
        <div className='flex justify-center'>
            <div className='container p-5'>
        <div className="text-2xl font-bold flex justify-between mb-4">
         <div>Add New Product</div>
         </div>
         <div className="my-4 flex">
           <div className="w-full px-5">
           <div className="text-2xl my-3">heading</div>
           <input 
           className="w-full border-b border-black" 
           onChange={(e)=>this.setState({heading:e.target.value})} 
           type="text" 
           value={this.state.heading}/>
           </div>
           <div className="w-full px-5">
           <div className="text-2xl my-3">description</div>
           <input type="text" className="w-full border-b border-black"  onChange={(e)=>this.setState({description:e.target.value})}  value={this.state.description}/>
           </div>
           <div className="w-full px-5">
           <div className="text-2xl my-3">brand</div>
           <input type="text" className="w-full border-b border-black"  onChange={(e)=>this.setState({brand:e.target.value})}  value={this.state.brand}/>
           </div>
         
         </div>
         <div className="my-4 flex">
        
           <div className="w-full px-5">
           <div className="text-2xl my-3">price</div>
           <input type="text" className="w-full border-b border-black"  onChange={(e)=>this.setState({price:e.target.value})}  value={this.state.price}/>
           </div>
           <div className="w-full px-5">
           <div className="text-2xl my-3">quantity</div>
           <input type="number" className="w-full border-b border-black"  onChange={(e)=>this.setState({quantity:e.target.value})}  value={this.state.quantity}/>
           </div>
           <div className="w-full px-5">
           <div className="text-2xl my-3">sale</div>
           <input type="text" className="w-full border-b border-black"  onChange={(e)=>this.setState({sale:e.target.value})}  value={this.state.sale}/>
           </div>
         </div>
         <div className="flex my-3">
           <div className="w-full px-5">
           <div className="text-2xl my-3">sale start date</div>
           <input type="date" className="w-full border-b border-black"  onChange={(e)=>this.setState({saleStartDate:e.target.value})}  value={this.state.saleStartDate}/>
           </div>
           <div className="w-full px-5">
           <div className="text-2xl my-3">sale end date</div>
           <input type="date" className="w-full border-b border-black"  onChange={(e)=>this.setState({saleEndDate:e.target.value})}  value={this.state.saleEndDate}/>
           </div>
         </div>
         <div className="flex my-3">
         <div className="w-full px-5">
           <div className="text-2xl my-3">size</div>
           <select className="w-full text-center border border-black rounded-lg"  onChange={(e)=>this.setState({size:e.target.value})}  value={this.state.category}>
           <option> -- select -- </option>
            </select></div>
         <div className="w-full px-5">
           <div className="text-2xl my-3">Collection</div>
         <select className="w-full text-center border border-black rounded-lg"  onChange={(e)=>this.setState({collection:e.target.value})}  value={this.state.collection}>
           <option> -- select -- </option>
      
            </select>
           </div>
           <div className="w-full px-5">
           <div className="text-2xl my-3">Category</div>
         <select className="w-full text-center border border-black rounded-lg"  onChange={(e)=>this.setState({category:e.target.value})}  value={this.state.category}>
           <option> -- select -- </option>
            </select>
           </div>
         </div>
         <hr className='my-5'/>
         <div className='px-5'>
            <label className='bg-black text-white p-5 rounded' htmlFor='images'>add images &nbsp;<i className='fa fa-plus-circle text-white'></i></label>
            <input type="file" className='hidden' id="images"  onChange={this.handleImageUpload}/>
            <div className={this.state.images.length?'border border-1 my-5 border-black flex justify-content-between':""}>
            {this.renderCurrentImages()}
            </div>
         </div>
         <div className="h-20 flex justify-end items-end">
          <div className="border px-10 py-2 text-2xl rounded-3xl font-medium shadow-lg cursor-pointer bg-black text-white" onClick={this.save}>save</div>
         </div>
         </div>
   </div>
    )
  }

  renderCurrentImages = () => {
    return this.state.images.map((image:any, index:number) => {
      return (
        <div key={index} className="w-48 h-48 bg-cover bg-center border border-1 border-black" style={{backgroundImage:`url(${image})`}}></div>
      )
    })
  }

  async save(){
    this.setState({loading:true})
    let productSaved = await saveProduct( {
      brand:this.state.brand,
      description:this.state.description,
      heading:this.state.heading,
      id:this.state.id,
      loading:true,
      price:this.state.price,
      quantity:this.state.quantity,
      sale:this.state.sale,
      saleStartDate:this.state.saleStartDate,
      saleEndDate:this.state.saleEndDate,
      collection:this.state.collection,
      category:this.state.category,
      images:this.state.images,
      size:this.state.size,
    })
    if(productSaved){
      this.toggleToast("Product Successfully Saved","success")
    }else{
      this.toggleToast("Product Not Saved","error")
    }
  }

  state:productType = {
    brand:"",
    description:"",
    heading:"",
    id:0,
    loading:true,
    message:"Product Successfully Saved",
    price:"",
    quantity:0,
    sale:"",
    collection:"",
    category:"",
    images:[],
    saleEndDate:"",
    saleStartDate:"",
    show:false,
    size:"",
    status:"success",
  }

  toggleToast = (message?:string,status?:string) => {
    this.setState({show:!this.state.show,message,status})
    
    setTimeout(()=>{
      this.setState({loading:false})
      this.props.router.back()
    },2000)
  }
}


export default function Page(){
  const router = useRouter()
  const search = useSearchParams()
const id = search.get("id")
  return <AddNew id={id} router={router}/>
}