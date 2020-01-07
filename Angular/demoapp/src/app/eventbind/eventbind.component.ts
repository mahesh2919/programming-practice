import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbind',
  templateUrl: './eventbind.component.html',
  styleUrls: ['./eventbind.component.css']
})
export class EventbindComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  msg:string="";
  addcart(){
    this.msg="Produt Add";
  }
  oninputclick(event){
console.log(event.target.value);
  }
  addpro(){
    this.msg=event.target.value + " Produt Add";
  }
}
