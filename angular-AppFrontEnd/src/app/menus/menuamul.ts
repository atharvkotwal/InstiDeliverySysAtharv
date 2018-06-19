import { FoodDetails, FoodType } from '../fooddetails';

const Starters: FoodDetails[] = [
	{ Fid: 1101, foodname: 'Milk', price: 40 },
	{ Fid: 1102, foodname: 'Curd', price: 30 }
]
const MainCourse: FoodDetails[] = [
	{ Fid: 1103, foodname: 'Milk', price: 40 },
	{ Fid: 1104, foodname: 'Curd', price: 30 }
]
const IceCreams: FoodDetails[] = [
	{ Fid: 1105, foodname: 'Srikhand', price: 50 },
	{ Fid: 1106, foodname: 'IceCream', price: 20 },
	{ Fid: 1107, foodname: 'Curd', price: 30 }
]
export const MenuAmul: FoodType[] = [	
		{ Ftype: "Starters", Ftypedet: Starters },
		{ Ftype: "MainCourse", Ftypedet: MainCourse },
		{ Ftype: "IceCreams", Ftypedet: IceCreams }
];