import {Pipe, PipeTransform} from "@angular/core";

@Pipe({ name: 'listFilter' })
export class ListFilterPipe implements PipeTransform {
  transform(items: any[], filter: string, params: string[]) {
    if (!items || !filter || !params) {
      return [];
    }
    const filters: string[] = filter.toLowerCase().split(' ').filter((filter) => filter.length > 0);
    return items.filter((item: any) =>
      filters.reduce((prevFilter: boolean, filter: string) => {
        const f: string = filter.toLowerCase();
        return prevFilter || params.reduce((prevParam: boolean, param: string) =>
          prevParam || (item[param] as string).toLowerCase().includes(f),
          false);
      }, false)
    );
  }
}
