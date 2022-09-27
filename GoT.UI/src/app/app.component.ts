import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck{
  title = 'GoT.UI';
  displaymenu=false;
  constructor(private modalService: NgbModal,private cookie:CookieService,private route:Router){

  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }

  ngDoCheck(): void {
    if (this.route.url == 'login') {
      this.displaymenu = false;
    } else {
      this.displaymenu = true;
    }
  }
 
}
