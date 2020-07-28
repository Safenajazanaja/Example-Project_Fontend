import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user.service';
import Swal from 'sweetalert2';
import {ToastrService} from 'ngx-toastr'
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [UserService]
  
})
export class LoginComponent implements OnInit {
  public passText: string;
  public emailTxt: string;

  constructor(
    private UserService : UserService,
    private toastr: ToastrService,
    private router: Router
    
  ) {

  }

  ngOnInit(): void {
    
  }

  onSubmit() {
    if (!this.emailTxt || !this.passText) {
      this.toastr.error("กรุณากรอกข้อมูลให้ครบทุกช่อง");
    } else {
      this.UserService.getUser(this.emailTxt, this.passText).subscribe(result => {
        if(result.serviceResult.status == "Success") {
          this.toastr.success("เข้าสู่ระบบสำเร็จ");
          localStorage.setItem("userData", JSON.stringify(result.serviceResult.value));
          this.router.navigate(['/']);
        } else {
          this.toastr.error("ล็อกอินล้มเหลว");
        }
      })
    }
  }
}
