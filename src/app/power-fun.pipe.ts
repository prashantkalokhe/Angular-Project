import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'powerFun',
  standalone: true
})
export class PowerFunPipe implements PipeTransform {
  transform(Base: number, Expo: number): any {
    let pow=1
      for(let i=0; i<Expo; i++){
          pow=pow*Base
      }
      return pow
  }
  

}
