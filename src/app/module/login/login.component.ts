import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [UserService]
  
})
export class LoginComponent implements OnInit {
  public passText: string;
  public emailTxt: string;

  constructor(
    private UserService : UserService
  ) {

  }

  ngOnInit(): void {
    
  }

  onSubmit() {
    Swal.fire('Login agin')
  }
}
