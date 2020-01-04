import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-str-interpolation',
  templateUrl: './str-interpolation.component.html',
  styleUrls: ['./str-interpolation.component.css']
})
export class StrInterpolationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  myname:string="Angular Interpolation";

  mymethod(){

    return "Interpolation Task " + this.myname;
  }
  appStatus:boolean=true;

  sta1="Online";
  sta2="Offline";
}
