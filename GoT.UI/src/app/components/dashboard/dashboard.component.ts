import { Component, OnInit,  } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  imageSrc = './assets/img/got-log.jpg'; 
  imageAlt = 'GOTLogo';
  constructor(private nav:NavbarService) { }

  ngOnInit(): void {
    
    this.nav.show();
  }



}
