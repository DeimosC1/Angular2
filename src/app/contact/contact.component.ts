import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  username = '';
  password = '';
  email = '';

  constructor() { }

  ngOnInit(): void {
  }


  vypisHodnot() {
    console.log("Username" + this.username);
    console.log("Email" + this.email);
    console.log("Password" + this.password);
  }

}
