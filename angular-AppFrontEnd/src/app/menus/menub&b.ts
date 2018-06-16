import { FoodDetails, FoodType } from '../fooddetails';

const VegStarters: FoodDetails[] = [
	{ Fid: 1201, foodname: 'Donuts', price: 200 },
	{ Fid: 1202, foodname: 'Pastries', price: 50 }
]
const VegIceCreams: FoodDetails[] = [
	{ Fid: 1203, foodname: 'Donuts', price: 200 },
	{ Fid: 1204, foodname: 'Pastries', price: 50 }
]
const NonVegStarters: FoodDetails[] = [
	{ Fid: 2205, foodname: 'Pizza Non-Veg', price: 340 },
	{ Fid: 2206, foodname: 'Donuts', price: 200 },
	{ Fid: 2207, foodname: 'Pastries', price: 50 }
]
const NonVegMainCourse: FoodDetails[] = [
	{ Fid: 2208, foodname: 'Pizza Non-Veg', price: 340 },
	{ Fid: 2209, foodname: 'Pastries', price: 50 }
]

export const MenuBB: FoodType[][] = [
	[
		{ Ftype: "Starters", Ftypedet: VegStarters },
		{ Ftype: "IceCreams", Ftypedet: VegIceCreams }

	],
	[
		{ Ftype: "Starters", Ftypedet: NonVegStarters },
		{ Ftype: "MainCourse", Ftypedet: NonVegMainCourse }
	]

];