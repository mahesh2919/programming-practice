import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pushsplice',
  templateUrl: './pushsplice.component.html',
  styleUrls: ['./pushsplice.component.css']
})
export class PushspliceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  users=[];
  createuser(uname){
    this.users.push({
      name:uname.value
    })
  }
}
