import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
  
})
export class LoginComponent implements OnInit {
  public pass;
  public emailTxt;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {

  }
}
