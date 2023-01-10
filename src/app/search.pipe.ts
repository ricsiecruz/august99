import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

//   transform(posts: any[], searchItem: string = ''): any {
//     return posts.filter(x=> x.toLowerCase().indexOf(searchItem.toLowerCase()) > -1);
//   }

//   transform(posts: any[], searchItem: string) {
//     if (searchItem) {
//         searchItem = searchItem.toLowerCase();
//         return posts.filter(function (el) {   // <---- data type!
//             return el.toLowerCase().indexOf(searchItem) > -1;
//         });
//     }
//     return posts;
// }

transform(items: any, searchItem: string): any[] {
    if(!items) return [];
    if(!searchItem) return items;

    searchItem = searchItem.toLowerCase();

    return items.filter( (item: string) => {
      return item.toLowerCase().includes(searchItem);
    });
  }

}