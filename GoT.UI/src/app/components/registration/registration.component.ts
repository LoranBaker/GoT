import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserRegistration } from 'src/app/models/userRegistration';
import { AuthService } from 'src/app/services/auth.service';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  title = 'GoT';
  formRegistration: FormGroup;
  newRegistration:UserRegistration = new UserRegistration();

  error_messages = {
    'confirm_password': [
      { type: 'required', message: 'Confirm password is required' },
      { type: 'areEqual', message: 'Password mismatch' }
    ],
    'password': [
      { type: 'required', message: 'Password is required' },
      { type: 'minlength', message: 'Password must be at least 5 characters long' },
      { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number' }
    ],
  }




  constructor(private authService: AuthService, private route:Router, private nav:NavbarService, private fb:FormBuilder){
    this.formRegistration = this.fb.group({
      username: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(30)
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ])),
      confirmpassword: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      name: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(30)
      ])),
      
  },{validators:this.mustMatch('password', 'confirmpassword')});
  
    localStorage.clear();
  }

  ngOnInit(): void {
    this.nav.hide();
  }
  register(newRegistration = new UserRegistration(this.formRegistration.value)){
    this.authService.register(newRegistration).subscribe();
    this.route.navigate(['login'])
  }

  get f(){
    return this.formRegistration.controls;
  }

  mustMatch(password:any,confirmpassword:any){
    return(formGroup:FormGroup)=>{
      const passwordControl = formGroup.controls[password];
      const conpasswordControl = formGroup.controls[confirmpassword];

      if(conpasswordControl.errors && !conpasswordControl.errors['mustMatch']){
        return;
      }
      if(passwordControl.value!==conpasswordControl.value){
        conpasswordControl.setErrors({ mustMatch:true});
      }else{
        conpasswordControl.setErrors(null);
      }
    }
  }


}
