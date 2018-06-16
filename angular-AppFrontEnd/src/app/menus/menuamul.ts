import { FoodDetails, FoodType } from '../fooddetails';

const VegStarters: FoodDetails[] = [
	{ Fid: 1101, foodname: 'Milk', price: 40 },
	{ Fid: 1102, foodname: 'Curd', price: 30 }
]
const VegMainCourse: FoodDetails[] = [
	{ Fid: 1103, foodname: 'Milk', price: 40 },
	{ Fid: 1104, foodname: 'Curd', price: 30 }
]
const VegIceCreams: FoodDetails[] = [
	{ Fid: 1105, foodname: 'Srikhand', price: 50 },
	{ Fid: 1106, foodname: 'IceCream', price: 20 },
	{ Fid: 1107, foodname: 'Curd', price: 30 }
]
const NonVegStarters: FoodDetails[] = [
	{ Fid: 2108, foodname: 'IceCream', price: 20 },
	{ Fid: 2109, foodname: 'Curd', price: 30 }
]
const NonVegMainCourse: FoodDetails[] = [
	{ Fid: 2110, foodname: 'Srikhand', price: 50 },
	{ Fid: 2111, foodname: 'Milk', price: 40 },
]

export const MenuAmul: FoodType[][] = [
	[
		{ Ftype: "Starters", Ftypedet: VegStarters },
		{ Ftype: "MainCourse", Ftypedet: VegMainCourse },
		{ Ftype: "IceCreams", Ftypedet: VegIceCreams }

	],
	[
		{ Ftype: "Starters", Ftypedet: NonVegStarters },
		{ Ftype: "MainCourse", Ftypedet: NonVegMainCourse }
	]

];