import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-refrence',
  templateUrl: './template-refrence.component.html',
  styleUrls: ['./template-refrence.component.css']
})
export class TemplateRefrenceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  getuname(my){
    console.log(my.value);
  }
}
