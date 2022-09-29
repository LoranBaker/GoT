import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/services/auth.service';
import { NavbarService } from './services/navbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'GoT.UI';
  displaymenu=false;
  constructor(private modalService: NgbModal, private route:Router,public _authService: AuthService, public nav: NavbarService){

  }

  ngOnInit(): void {
    this.nav.show();
  }

 
}
