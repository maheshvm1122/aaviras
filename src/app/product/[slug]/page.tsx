import { notFound } from 'next/navigation';
import { products } from '@/data/products';
import ProductDetail from '@/components/product/ProductDetail';
export default async function ProductPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const p=products.find(x=>x.slug===slug);if(!p)notFound();return <ProductDetail product={p}/>}
