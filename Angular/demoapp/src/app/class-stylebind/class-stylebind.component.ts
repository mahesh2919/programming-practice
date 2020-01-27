import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-stylebind',
  templateUrl: './class-stylebind.component.html',
  styleUrls: ['./class-stylebind.component.css']
})
export class ClassStylebindComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  mypro:boolean=true;
  mystyle:string ="15px";
  mystyle1:string ="20px";
  isActive:boolean=true;

  mltclass={

    class1:true,
    class2:true,
    class3:true
  }
  mltstyle={

    'background':'green',
    'border':'2px solid red'
  }
}
