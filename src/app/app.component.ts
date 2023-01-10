import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'august99-local';

  dataList: any;
  searchItem!: string;
  searchText: any;

  constructor(private httpClient: HttpClient) {

  }

  ngOnInit() {
    this.httpClient.get('https://api.spacexdata.com/v4/launches/').subscribe((res: any) => {
      this.dataList = res;
      console.log(this.dataList);
    })
  }

//   ngAfterViewInit(): void {
//     $("#myInput").on("keyup", function() {
//       var value = $(this)?.val()!.toString().toLowerCase();
//       $('#myDIV *').each(function() {
//         $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
//       });
//     });

// }
}
