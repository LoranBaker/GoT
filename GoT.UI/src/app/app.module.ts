import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditFamiliesComponent } from './components/edit-families/edit-families.component';
import { FormsModule } from '@angular/forms';
import { FamiliesDashboardComponent } from './components/families-dashboard/families-dashboard.component';
import { AuthInterceptor } from './services/auth.interceptor';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgbActiveModal, NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegistrationComponent } from './components/registration/registration.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './shared/auth.guard';
import { AddFamiliesComponent } from './components/add-families/add-families.component';
import { DeleteFamiliesComponent } from './components/delete-families/delete-families.component';



@NgModule({
  declarations: [
    AppComponent,
    EditFamiliesComponent,
    FamiliesDashboardComponent,
    LoginComponent,
    DashboardComponent,
    RegistrationComponent,
    AddFamiliesComponent,
    DeleteFamiliesComponent,
    
  ],
  entryComponents: [EditFamiliesComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    MatDialogModule,
    BrowserAnimationsModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi:true,
  },
  NgbActiveModal,
  NgbModal
],
  bootstrap: [AppComponent]
})
export class AppModule { }
