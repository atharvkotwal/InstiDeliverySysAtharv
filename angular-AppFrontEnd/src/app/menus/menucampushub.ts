import { FoodDetails, FoodType } from '../fooddetails';

const VegStarters: FoodDetails[] = [
	{ Fid: 1301, foodname: 'MangoJuice', price: 50 },
	{ Fid: 1302, foodname: 'PavBhaji', price: 40 },
	{ Fid: 1303, foodname: 'IceCream', price: 20 },
	{ Fid: 1304, foodname: 'CholleBhatture', price: 30 }
]
const VegMainCourse: FoodDetails[] = [
	{ Fid: 1305, foodname: 'MangoJuice', price: 50 },
	{ Fid: 1306, foodname: 'PavBhaji', price: 40 },
	{ Fid: 1307, foodname: 'IceCream', price: 20 },
	{ Fid: 1308, foodname: 'CholleBhatture', price: 30 }
]
const VegIceCreams: FoodDetails[] = [
	{ Fid: 1309, foodname: 'Vanilla', price: 20 },
]
const NonVegStarters: FoodDetails[] = [
	{ Fid: 2310, foodname: 'ChickenTikka', price: 20 },
	{ Fid: 2311, foodname: 'FishTikka', price: 30 }
]
const NonVegMainCourse: FoodDetails[] = [
	{ Fid: 2312, foodname: 'Chicken Biryani', price: 40 },
	{ Fid: 2313, foodname: 'Fish', price: 30 }
]

export const MenuCampusHub: FoodType[][] = [
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