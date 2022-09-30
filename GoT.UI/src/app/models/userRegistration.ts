import { FormControl, FormGroup } from "@angular/forms";

export class UserRegistration {
    public constructor(init?: Partial<UserRegistration>) {
        Object.assign(this, init);
    }
        username ='';
        password ='';
        confirmPassword='';
        name= '';

   
}