import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(value: any, ...args: any): any {
    if(!value) return null;

    if(!args || !args[0]) return value;

    const searchTerm = args[0].toLowerCase();
    return value.filter((item: string) => {
      return JSON.stringify(item).toLowerCase().includes(searchTerm);
    })
  }

}
