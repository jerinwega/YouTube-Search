import {
    Component,
    OnInit
} from '@angular/core';
import {
    YoutubeService
} from './youtube.service';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css', './app.responsive.css']
})
export class AppComponent implements OnInit {

    vList: any = [];


    constructor(private _object: YoutubeService) {}


    preFilter() {
        var searchElement = ( < HTMLInputElement > document.getElementById("search")).value;
        console.log(searchElement);
        if (searchElement == "") {

            ( < HTMLInputElement > document.getElementById("error")).innerHTML = "No Search Terms Found !";
        } else {
            ( < HTMLInputElement > document.getElementById("error")).innerHTML = "";

            this._object.CallSearch(searchElement).subscribe(response => {
                    // console.log((response));
                    if (response.items.length === 0) {
                        ( < HTMLInputElement > document.getElementById("error")).innerHTML = "No Results Found !";
                    }
                    this.vList = response;
                },

                (error) => {
                    console.log(error)
                }
            );
        }
    }


    SortByName() {

        var data = this.vList.items;
        if (data) {
            data.sort((a: any, b: any) => a.snippet.title.localeCompare(b.snippet.title));
        }
        // console.log(data);
    }


    SortByDate() {
        var data = this.vList.items;
        if (data) {
            data.sort((a: any, b: any) => b.snippet.publishedAt.localeCompare(a.snippet.publishedAt));
        }
        // console.log(data);
    }
    toggleDarkLight() {
        var body = document.getElementById("body");
        var currentClass = body.className;
        body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
    }


    ngOnInit() {}
}