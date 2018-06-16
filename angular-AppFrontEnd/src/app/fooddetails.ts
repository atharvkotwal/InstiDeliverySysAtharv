export class FoodDetails{
	Fid:number;
	foodname:string;
	price:number;
	qty?:number;
}

export class FoodType{
	Ftypeid?:number;
	Ftype: string;
	Ftypedet: FoodDetails[];	
}