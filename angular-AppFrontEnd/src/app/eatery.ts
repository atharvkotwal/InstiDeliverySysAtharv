import { FoodType,FoodDetails } from './fooddetails';

export class Eatery{
	Eid:number;
	name:string;
	about?:string;
	Menu: FoodType[];
}
 export class Alleateries{
	 eateries:Eatery[];
 }