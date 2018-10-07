"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var youtube_service_1 = require("./youtube.service");
var AppComponent = (function () {
    function AppComponent(_object) {
        this._object = _object;
        this.vList = [];
    }
    AppComponent.prototype.preFilter = function () {
        var _this = this;
        var searchElement = document.getElementById("search").value;
        console.log(searchElement);
        if (searchElement == "") {
            document.getElementById("error").innerHTML = "No Search Terms Found !";
        }
        else {
            document.getElementById("error").innerHTML = "";
            this._object.CallSearch(searchElement).subscribe(function (response) {
                // console.log((response));
                if (response.items.length === 0) {
                    document.getElementById("error").innerHTML = "No Results Found !";
                }
                _this.vList = response;
            }, function (error) {
                console.log(error);
            });
        }
    };
    AppComponent.prototype.SortByName = function () {
        var data = this.vList.items;
        if (data) {
            data.sort(function (a, b) { return a.snippet.title.localeCompare(b.snippet.title); });
        }
        // console.log(data);
    };
    AppComponent.prototype.SortByDate = function () {
        var data = this.vList.items;
        if (data) {
            data.sort(function (a, b) { return b.snippet.publishedAt.localeCompare(a.snippet.publishedAt); });
        }
        // console.log(data);
    };
    AppComponent.prototype.toggleDarkLight = function () {
        var body = document.getElementById("body");
        var currentClass = body.className;
        body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
    };
    AppComponent.prototype.ngOnInit = function () { };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css', './app.responsive.css']
    }),
    __metadata("design:paramtypes", [youtube_service_1.YoutubeService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map