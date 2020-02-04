import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'leftPad',
  pure: true
})
export class LeftPadPipe implements PipeTransform {
  constructor() {}

  transform(value: string, maxLength: number, fillString : string ): string {
    return ('' + value).padStart(maxLength, fillString);
  }

}
