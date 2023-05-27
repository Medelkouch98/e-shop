import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumerate',
})
export class EnumeratePipe implements PipeTransform {
  transform(value: number): number[] {
    return [...Array(value)].map((_, i) => i);
  }
}
