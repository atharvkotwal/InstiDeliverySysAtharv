import { Pipe, PipeTransform } from '@angular/core';
import { FoodDetails, FoodType } from './fooddetails';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  term:string;
  transform(fdetails:FoodType[], term: string): any {
    const list:any[] = [];
    this.term = term;
    for(var i=0;i<fdetails.length;i++){
      for(var j=0;j<fdetails[i].Ftypedet.length;j++){
        var element = this.namefilter(fdetails[i].Ftypedet[j],fdetails[i]);
        if(element){                 
          var q = list.push(element);  
        }
      }
    }
     if(list.length==0){
      list.push({Msg:"No Food Available that contains'"+term+"'"})
    }
    return list;
  }
  namefilter(arg:FoodDetails,ftyp:FoodType){
    //return { Fid: 2413, foodname: 'Fish', price: 40,type:2 };
    var ar:any;
    if(arg.foodname.toLowerCase().includes(this.term.toLowerCase())){
      ar = arg;
      ar.typ = ftyp.Ftype;
      return ar;
    }
    else{
      return false;
    }
  }
}
