import { Pipe, PipeTransform } from '@angular/core';
import { FoodDetails, FoodType } from './fooddetails';
import { Eatery } from './eatery';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  term: string;
  transform(etrys: Eatery[], term: string): any {
    const list: any[] = [];
    this.term = term;
    for (var k = 0; k < etrys.length; k++) {
      for (var i = 0; i < etrys[k].Menu.length; i++) {
        for (var j = 0; j < etrys[k].Menu[i].Ftypedet.length; j++) {
          var element = this.namefilter(etrys[k].Menu[i].Ftypedet[j], etrys[k].Menu[i],etrys[k].name );
          if (element) {
            var q = list.push(element);
          }
        }
      }
    }
    if (list.length == 0) {
      list.push({ Msg: "No Food Available that contains'" + term + "'" })
    }
    return list;
  }
  namefilter(arg: FoodDetails, ftyp: FoodType,ename:string) {
    var ar: any;
    if (arg.foodname.toLowerCase().includes(this.term.toLowerCase())) {
      ar = arg;
      ar.typ = ftyp.Ftype;
      ar.etry = ename;
      return ar;
    }
    else {
      return false;
    }
  }
}
