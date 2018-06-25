export class FoodDetails{
	id:number;
	foodname:string;
	price:number;
	availability:boolean;
	food_type?:string; //1-VEG(default) 2-NON_VEG 3-EGG
	description?:string;
	img?:string;
	qty?:number;
}
export class FoodType{
	Ftypeid?:number;
	Ftype: string;
	Ftypedet: FoodDetails[];	
}