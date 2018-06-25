export class Orderlist{
    Eid:number;
    name:string;
    Fid:number;
    foodname:string;
    qty:number;
    price:number;
    totprice:number;
}
export class finalorder{
    Fid:number;
    quantity:number;
}
export class finalorderlist{
    auth_token:string;
    order:finalorder[];
}