import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FamiliesDashboardComponent } from './components/families-dashboard/families-dashboard.component'
import { EditFamiliesComponent } from './components/edit-families/edit-families.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './shared/auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AddFamiliesComponent } from './components/add-families/add-families.component';
import { DeleteFamiliesComponent } from './components/delete-families/delete-families.component';

const routes: Routes = [
  {path: "" ,component: DashboardComponent,canActivate:[AuthGuard]},
  {path: 'families-dashboard', component: FamiliesDashboardComponent, canActivate:[AuthGuard]},
  {path: 'edit-families', component: EditFamiliesComponent, canActivate:[AuthGuard]},
  {path: "login",component: LoginComponent},
  {path: "registration",component: RegistrationComponent},
  {path: "add-families",component: AddFamiliesComponent},
  {path: "delete-families",component: DeleteFamiliesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
