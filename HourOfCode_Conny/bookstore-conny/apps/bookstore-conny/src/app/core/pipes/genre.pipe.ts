import { Pipe, PipeTransform } from '@angular/core';
import { Genre } from '../../modules/book-store/models/genre';

@Pipe({
  name: 'genre'
})
export class GenrePipe implements PipeTransform {

  transform(value: Genre[], args?: any): string {
     return value
      .map((_value) => `${_value.name}`)
      .join(', ');
  }
}
