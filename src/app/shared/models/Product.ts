export class Product {
    id!:number;
    name!:string;
    price!:number;
    specifications!:string;
    image!:string;
    tags?:string[];
    stars:number = 0;
}