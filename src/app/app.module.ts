import { NgModule }      from '@angular/core';
import { AppComponent }  from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";
import { YoutubeService } from './youtube.service';



@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [YoutubeService]
  
})
export class AppModule { }
