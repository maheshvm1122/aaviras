import { NextResponse } from 'next/server';
export async function POST(req:Request){
 try{
  const body=await req.json();
  if(!Array.isArray(body.items)||!body.items.length)return NextResponse.json({ok:false,message:'Your bag is empty.'},{status:400});
  if(typeof body.total!=='number'||body.total<1)return NextResponse.json({ok:false,message:'Invalid order total.'},{status:400});
  const orderId=`AAV-${Date.now().toString().slice(-8)}`;
  return NextResponse.json({ok:true,mode:'mock',orderId,message:'Mock checkout completed'});
 }catch{return NextResponse.json({ok:false,message:'Unable to process checkout.'},{status:400})}
}
