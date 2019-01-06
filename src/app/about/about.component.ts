import { Component, OnInit } from '@angular/core';
import { text } from '@angular/core/src/render3';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  message: String = 'Hi stranger';
  isRed: boolean = false;
  text: string = 'click here to change to RED';
  name: string = 'name';
  nameX: string = 'name';
  started: string = 'page loaded..';
  display: boolean = false;
  numbers: number[] = [1,2,3,4,5];

  constructor() { }

  msg() {
    alert(this.message);
  }

  changeColor() {
    if (this.isRed === true) {
      this.isRed = false;
      this.text = 'click here to change to RED';
      this.display = false;
      console.log(this.isRed);
    } else {
      this.isRed = true;
      this.text = 'click here to change to GREEN';
     this.display = true;
      console.log(this.isRed);
    }
  }

  //window.onload..
  ngOnInit() {
    console.log(this.started);
  }

}
