export type ProductCategory = 'Kanjivaram' | 'Pattu' | 'Silk' | 'Cotton' | 'Banarasi' | 'Fancy' | 'Designer' | 'Party Wear';
export type ProductVariant = { color: string; colorCode: string; texture: string; stock: number; price?: number };
export type Product = {
  id:string; name:string; slug:string; description:string; price:number; compareAtPrice?:number;
  category:ProductCategory; collection:string; image:string; images?:string[]; featured?:boolean; newArrival?:boolean;
  rating?:number; reviewCount?:number; fabric?:string; occasion?:string; blouse?:string; highlights?:string[];
  variants:ProductVariant[]; model3D?:{url?:string;scale?:number};
};
