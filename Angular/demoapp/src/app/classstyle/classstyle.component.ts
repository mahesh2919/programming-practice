import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classstyle',
  templateUrl: './classstyle.component.html',
  styleUrls: ['./classstyle.component.css']
})
export class ClassstyleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  mypro:boolean=true;
  mystyle:string="15px";

  isActive:boolean=false;

  mltclass={
    class1:true,
    class2:true,
    class3:true
  }
}
