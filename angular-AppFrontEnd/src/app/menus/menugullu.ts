import { FoodDetails, FoodType } from '../fooddetails';

const Starters: FoodDetails[] = [
	{ Fid: 1401, foodname: 'MangoJuice', price: 50 },
	{ Fid: 1402, foodname: 'PavBhaji', price: 40 },
	{ Fid: 1403, foodname: 'IceCream', price: 20 },
	{ Fid: 1404, foodname: 'CholleBhatture', price: 40 },
	{ Fid: 2410, foodname: 'ChickenTikka', price: 20,type:2 },
	{ Fid: 2411, foodname: 'FishTikka', price: 40,type:2 }
]
const MainCourse: FoodDetails[] = [
	{ Fid: 1405, foodname: 'Paneer Makhani', price: 50,description:"Served per plate",img:"../../assets/Images/pannermakhani.jpg" },
	{ Fid: 1406, foodname: 'Rice', price: 40,description:"Per Plate",img:"../../assets/Images/rice.bmp" },
	{ Fid: 1407, foodname: 'Roti Nan', price: 20,description:"per piece",img:"../../assets/Images/Naan.jpg" },
	{ Fid: 1408, foodname: 'CholleBhatture', price: 40,description:"In one plate 2 pieces",img:"../../assets/Images/cholleBhatture.jpg" },
	{ Fid: 2412, foodname: 'Chicken Biryani', price: 40,type:2 },
	{ Fid: 2413, foodname: 'Fish', price: 40,type:2 }
]
const IceCreams: FoodDetails[] = [
	{ Fid: 1409, foodname: 'Vanilla', price: 20 },
]

export const MenuGullu: FoodType[] = [
	{ Ftype: "Starters", Ftypedet: Starters, Ftypeid: 1 },
	{ Ftype: "MainCourse", Ftypedet: MainCourse, Ftypeid: 2 },
	{ Ftype: "IceCreams", Ftypedet: IceCreams, Ftypeid: 3 }
];