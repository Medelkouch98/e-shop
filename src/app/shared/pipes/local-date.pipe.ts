import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toLocaleDateString',
})
export class LocalDateStringPipe implements PipeTransform {
  transform(date: string | Date): string {
    return new Date(date).toLocaleDateString('fr-FR');
  }
}
