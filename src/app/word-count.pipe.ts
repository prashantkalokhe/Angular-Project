import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordCount',
  standalone: true
})
export class WordCountPipe implements PipeTransform {
  transform(value: string, ...args: number[]): number {
    return value.split(' ').length;
  }

}
