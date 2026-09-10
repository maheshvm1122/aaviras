'use client';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '@/types/product';
type Item={product:Product; color:string; quantity:number};
type Cart={items:Item[]; addItem:(p:Product,color:string)=>void; removeItem:(id:string,color:string)=>void; setQuantity:(id:string,color:string,q:number)=>void; clear:()=>void};
export const useCartStore=create<Cart>()(persist((set)=>({items:[],addItem:(product,color)=>set(s=>{const i=s.items.find(x=>x.product.id===product.id&&x.color===color);return {items:i?s.items.map(x=>x===i?{...x,quantity:x.quantity+1}:x):[...s.items,{product,color,quantity:1}]}}),removeItem:(id,color)=>set(s=>({items:s.items.filter(x=>!(x.product.id===id&&x.color===color))})),setQuantity:(id,color,q)=>set(s=>({items:s.items.map(x=>x.product.id===id&&x.color===color?{...x,quantity:Math.max(1,q)}:x)})),clear:()=>set({items:[]})}),{name:'aavira-cart'}));
