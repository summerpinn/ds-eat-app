import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shopClassUnique'
})
export class ShopClassUniquePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value!== undefined && value!== null){
      return Array.from(new Set(value.map((item: any) => item.class)));
    }
  }

}
