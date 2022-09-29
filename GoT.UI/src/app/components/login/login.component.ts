import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/models/userLogin';
import { UserRegistration } from 'src/app/models/userRegistration';
import { AuthService } from 'src/app/services/auth.service';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  title = 'GoT';
  userLogin = new UserLogin();
  userRegistration = new UserRegistration();

  responsedata:any;

  constructor(private authService: AuthService, private route:Router,public nav: NavbarService ){
    localStorage.clear();
  }

  ngOnInit(): void {
    this.nav.hide();
  };

  register(userRegistration: UserRegistration){
    this.authService.register(userRegistration).subscribe();
  }

  login(userLogin: UserLogin){
    this.authService.login(userLogin).subscribe((token: string)=>{
      localStorage.setItem('authToken', token);
      this.route.navigate([''])
    });
  }

  getme(){
    this.authService.getMe().subscribe((name:string)=>{
      console.log(name);
    });
  }

}
