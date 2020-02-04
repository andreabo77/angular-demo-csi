import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
/**
 Esempio di pipe che accetta una stringa e un numero e fornisce in output una stringa troncata con puntini in fondo se supera la lunghezza data
*/
export class TruncatePipe implements PipeTransform {
  transform(value: string, args: number = 10): string {
    let result = value;


    if (value){
      if (value.length > args) {
        result = value.substring(0, args) + '...';
      } else {
        result = value;
      }
    }
    return result;
  }
}
