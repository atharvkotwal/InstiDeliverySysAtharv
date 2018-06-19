import { FoodDetails, FoodType } from '../fooddetails';

const Starters: FoodDetails[] = [
	{ Fid: 1201, foodname: 'Donuts', price: 200 },
	{ Fid: 1202, foodname: 'Pastries', price: 50,type:3 },
	{ Fid: 2205, foodname: 'Pizza Non-veg', price: 340,type:2 },
]
const IceCreams: FoodDetails[] = [
	{ Fid: 1203, foodname: 'Donuts', price: 200 },
	{ Fid: 1204, foodname: 'Pastries', price: 50 }
]
export const MenuBB: FoodType[] = [
		{ Ftype: "Starters", Ftypedet: Starters },
		{ Ftype: "IceCreams", Ftypedet: IceCreams }
];