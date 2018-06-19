export class FoodDetails{
	Fid:number;
	foodname:string;
	price:number;
	type?:number; //1-VEG(default) 2-NON_VEG 3-EGG
	description?:string;
	qty?:number;
	img?:string;
}

export class FoodType{
	Ftypeid?:number;
	Ftype: string;
	Ftypedet: FoodDetails[];	
}