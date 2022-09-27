import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRegistration } from 'src/app/models/userRegistration';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  title = 'GoT';
  userRegistration = new UserRegistration();
  constructor(private authService: AuthService, private route:Router){
    localStorage.clear();
  }

  ngOnInit(): void {
  }
  register(userRegistration: UserRegistration){
    this.authService.register(userRegistration).subscribe();
    this.route.navigate(['login'])
  }

}
