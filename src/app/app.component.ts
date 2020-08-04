import { Component , AfterViewInit} from '@angular/core';
import anime from 'animejs'
declare var anime: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit  {
  title = 'ornitorrincut';


ngAfterViewInit(): void {


  }

}
