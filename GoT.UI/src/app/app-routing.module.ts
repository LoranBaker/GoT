import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FamiliesDashboardComponent } from './components/families-dashboard/families-dashboard.component'
import { EditFamiliesComponent } from './components/edit-families/edit-families.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './shared/auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LogoutComponent } from './components/logout/logout.component';

const routes: Routes = [
  {path: "" ,component: DashboardComponent},
  {path: 'families-dashboard', component: FamiliesDashboardComponent},
  {path: 'edit-families', component: EditFamiliesComponent},
  {path: "login",component: LoginComponent},
  {path: "registration",component: RegistrationComponent},
  {path: "logout",component: LogoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
