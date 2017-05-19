import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  constructor() { }

model = new Hero(18, 'Dr IQ', 'Chuck Overstreet');
  ngOnInit() {
  }

onSubmit() {
  alert(this.model.alterEgo);
}

}


export class Hero {

  constructor(
    public id: number,
    public name: string,
    public alterEgo?: string
  ) {  }

}
