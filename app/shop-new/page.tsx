"use client"
import React, { Component } from 'react'
import { getProducts } from '../api/database'
import { shopStateType } from '../Interfaces/interfaces';

export default class page extends Component {
	componentDidMount(): void {
		this.loadData()
	}
	async loadData() {
		let products = await getProducts();
		let categories:string[] = []
		for(let i = 0; i < products.length; i++){
			if(products[i]){
				let collection = products[i].collection.toLowerCase();
				if(collection && !categories.includes(collection)){
					categories.push(collection)
				}
			}

		}
	    let cart = JSON.parse(localStorage.getItem('cart') || '[]')
		this.setState({products, categories, loading:false,cart})
		}

renderCategories(){
	return this.state.categories.map((category, index) => (<div className='text-2xl  border-b-2 py-5 flex justify-between px-4'>
		<div>{category}</div>
		<div><i className='fa fa-arrow-right'></i></div>
	</div>))
}

renderSale(product:any){
	if(product.sale && new Date(product.saleStartDate) < new Date() && new Date(product.saleEndDate) > new Date()){
		return <div className=' my-2'><span className='text-2xl font-bold'>{product.sale}</span> &nbsp;<span className='decoration-gray-600 text-gray-600 line-through font-thin'>({product.price})</span></div>
	}else{
		return <div className='text-2xl font-bold my-2'>{product.price}</div>
	}
}
renderProducts(){
	return this.state.products.map((product, index) => (
	<div key={index} className='m-3 shadow-lg max-h-96 w-80 pb-2'>
		<div className='flex bg-blue-100 w-80 h-48 justify-center items-center bg-cover bg-center' style={product.images?{backgroundImage:`url(${product.images[0]})`}:{}}></div>
		<div className='m-2'>
		<div className='text-2xl my-2'>{product.heading}</div>
		<div className='my-2 cursor-pointer text-blue-600 underline'>{product.collection}</div>
		<div className='flex justify-between items-end '>
	    {this.renderSale(product)}
		<div className=''><i className='fa fa-plus-circle fa-2x cursor-pointer' onClick={()=>this.updateCart(product.id)}></i></div>
		</div>
		</div>
	</div>))
}
	render() {
		if(this.state.loading) return (<div className='text-center'>Loading...</div>)
		return (
			<div className='flex h-screen overflow-hidden'>
				<div className='bg-black text-white p-3 border border-black h-full w-96 overflow-y-scroll'>
					<div className='text-3xl font-bold border-b-2 py-5'>categories</div>
					{this.renderCategories()}
				</div>
				<div className='w-full flex flex-wrap overflow-scroll h-full'>
					{this.renderProducts()}
				</div>
			</div>
		)
	}

	state:shopStateType = {
		loading:true,
		products:[],
		categories:[],
		cart:[]
	}

		updateCart(id:number){
            let cart = this.state.cart
			let index = this.state.cart.findIndex((item:any) => item.id === id)
			if(index === -1){
				cart.push({id, quantity:1})
			} else {
				cart[index].quantity += 1
			}
            this.setState({cart})
			localStorage.setItem('cart', JSON.stringify(cart))
	}
}
