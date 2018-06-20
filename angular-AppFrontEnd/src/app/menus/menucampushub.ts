import { FoodDetails, FoodType } from '../fooddetails';

const VegStarters: FoodDetails[] = [
	{ Fid: 1301, foodname: 'MangoJuice', price: 50 },
	{ Fid: 1302, foodname: 'PavBhaji', price: 40,description:"Per Plate 2 Pav",img:"../../assets/Images/pavbhaji.jpg" },
	{ Fid: 1303, foodname: 'IceCream', price: 20 },
	{ Fid: 1304, foodname: 'CholleBhatture', price: 30 }
]
const VegMainCourse: FoodDetails[] = [
	{ Fid: 1305, foodname: 'MangoJuice', price: 50 },
	{ Fid: 1306, foodname: 'Paneer Subzi', price: 40 },
	{ Fid: 1307, foodname: 'IceCream', price: 20 },
	{ Fid: 1308, foodname: 'CholleBhatture', price: 30 }
]
const VegIceCreams: FoodDetails[] = [
	{ Fid: 1309, foodname: 'Vanilla', price: 20 },
]

export const MenuCampusHub: FoodType[] = [
	{ Ftype: "Starters", Ftypedet: VegStarters },
	{ Ftype: "MainCourse", Ftypedet: VegMainCourse },
	{ Ftype: "IceCreams", Ftypedet: VegIceCreams }
];