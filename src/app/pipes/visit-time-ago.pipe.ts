import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'visitTimeAgo'
})
export class VisitTimeAgoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!value){
      return "Never visit";
    }else{ 
      return "Visit " + value; 
    }
  }

}
