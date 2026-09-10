import mongoose, { Schema } from 'mongoose';
const VariantSchema=new Schema({color:String,colorCode:String,texture:String,stock:Number,price:Number},{_id:false});
const ProductSchema=new Schema({id:{type:String,unique:true},name:String,slug:{type:String,unique:true},description:String,price:Number,compareAtPrice:Number,category:String,collection:String,image:String,images:[String],featured:Boolean,newArrival:Boolean,rating:Number,reviewCount:Number,fabric:String,occasion:String,blouse:String,highlights:[String],variants:[VariantSchema],model3D:{url:String,scale:Number}},{timestamps:true});
export const ProductModel=mongoose.models.Product||mongoose.model('Product',ProductSchema);
