import { Pipe, PipeTransform } from '@angular/core';
import Smestaj from '../smestaj-component/smestaj.model';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(items: Smestaj[], searchText: string): Smestaj[] {
    if (!items) return [];
    if (!searchText) return items;

    return items.filter(item => item.cena <= Number(searchText));
  }

}
