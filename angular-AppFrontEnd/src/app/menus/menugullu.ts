import { FoodDetails, FoodType } from '../fooddetails';

const VegStarters: FoodDetails[] = [
	{ Fid: 1401, foodname: 'MangoJuice', price: 50 },
	{ Fid: 1402, foodname: 'PavBhaji', price: 40 },
	{ Fid: 1403, foodname: 'IceCream', price: 20 },
	{ Fid: 1404, foodname: 'CholleBhatture', price: 40 }
]
const VegMainCourse: FoodDetails[] = [
	{ Fid: 1405, foodname: 'MangoJuice', price: 50 },
	{ Fid: 1406, foodname: 'PavBhaji', price: 40 },
	{ Fid: 1407, foodname: 'IceCream', price: 20 },
	{ Fid: 1408, foodname: 'CholleBhatture', price: 40 }
]
const VegIceCreams: FoodDetails[] = [
	{ Fid: 1409, foodname: 'Vanilla', price: 20 },
]
const NonVegStarters: FoodDetails[] = [
	{ Fid: 2410, foodname: 'ChickenTikka', price: 20 },
	{ Fid: 2411, foodname: 'FishTikka', price: 40 }
]
const NonVegMainCourse: FoodDetails[] = [
	{ Fid: 2412, foodname: 'Chicken Biryani', price: 40 },
	{ Fid: 2413, foodname: 'Fish', price: 40 }
]

export const MenuGullu: FoodType[][] = [
	[
		{ Ftype: "Starters", Ftypedet: VegStarters, Ftypeid: 1 },
		{ Ftype: "MainCourse", Ftypedet: VegMainCourse, Ftypeid: 2 },
		{ Ftype: "IceCreams", Ftypedet: VegIceCreams, Ftypeid: 3 }

	],
	[
		{ Ftype: "Starters", Ftypedet: NonVegStarters },
		{ Ftype: "MainCourse", Ftypedet: NonVegMainCourse }
	]

];