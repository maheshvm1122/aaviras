'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCartStore } from '@/store/cartStore';
import { useEffect, useState } from 'react';

const messages=['Complimentary shipping on orders above ₹2,999','Authentic pure silks · Handloom edits','Easy 7-day returns · Secure checkout'];
const links=[['Shop','/shop'],['New Arrivals','/shop?category=New%20Arrivals'],['Kanjivaram','/shop?category=Kanjivaram'],['Pattu','/shop?category=Pattu'],['Party Wear','/shop?category=Party%20Wear'],['Designer','/shop?category=Designer']];

export function SiteHeader(){
 const pathname=usePathname(); const [message,setMessage]=useState(0); const [open,setOpen]=useState(false);
 const count=useCartStore(s=>s.items.reduce((a,x)=>a+x.quantity,0));
 useEffect(()=>{const id=setInterval(()=>setMessage(v=>(v+1)%messages.length),3500);return()=>clearInterval(id)},[]);
 return <>
  <div className="announcement"><span key={message} className="announcement-message">{messages[message]}</span><span className="announcement-divider">|</span><span>India (INR ₹)</span><span className="announcement-divider">|</span><span>Track Order</span></div>
  <header className="site-header"><div className="site-nav">
   <Link href="/" className="brand"><span>AAVIRA</span><small>THE SAREE ATELIER</small></Link>
   <nav className="desktop-nav">{links.map(([label,href])=><Link key={href} href={href} className={pathname==='/shop'&&label==='Shop'?'active':''}>{label}</Link>)}<Link href="/#story">Our Story</Link></nav>
   <div className="header-actions"><Link href="/shop" className="header-search">⌕ <span>Search sarees, colours, occasions</span></Link><Link href="/shop" className="header-icon">♡</Link><Link href="/cart" className="header-icon">♙</Link><Link href="/cart" className="bag-icon">♧<b>{count}</b></Link></div>
   <button className="mobile-menu" onClick={()=>setOpen(v=>!v)} aria-label="Toggle menu">☰</button>
  </div>{open&&<nav className="mobile-nav">{links.map(([label,href])=><Link key={href} href={href} onClick={()=>setOpen(false)}>{label}</Link>)}<Link href="/#story" onClick={()=>setOpen(false)}>Our Story</Link><Link href="/cart" onClick={()=>setOpen(false)}>Bag ({count})</Link></nav>}</header>
 </>
}
