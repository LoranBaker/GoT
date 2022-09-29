import { Component, OnInit, ViewChild } from '@angular/core';
import { Families } from 'src/app/models/families';
import { FamiliesService } from 'src/app/services/families.service';
import { EditFamiliesComponent } from '../edit-families/edit-families.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddFamiliesComponent } from '../add-families/add-families.component';
import { DeleteFamiliesComponent } from '../delete-families/delete-families.component';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-families-dashboard',
  templateUrl: './families-dashboard.component.html',
  styleUrls: ['./families-dashboard.component.css']
})

export class FamiliesDashboardComponent implements OnInit {
  title = 'GoT.UI';
  families: Families[] = [];
  familiesToEdit?: Families; 

  constructor(private familiesService: FamiliesService, private modalService: NgbModal,private nav:NavbarService){}
    
    ngOnInit() : void {
      this.nav.show();
      this.familiesService
      .getFamilies()
      .subscribe((result: Families[]) => (this.families = result));
  }


  updateFamiliesList(families: Families[]){
    this.families = families;
  }

  createNewFamily(){
    const ref = this.modalService.open(AddFamiliesComponent);
    ref.componentInstance.families = new Families();
    ref.result.then((ok)=>{
      this.familiesService
      .getFamilies()
      .subscribe((result: Families[]) => (this.families = result));
    },
    (cancel)=>{
      console.log("cancel");
    });
    
  }

  editFamily(families: Families){

    const ref = this.modalService.open(EditFamiliesComponent);
    ref.componentInstance.families = families;

    ref.result.then((ok)=>{
      this.familiesService
      .getFamilies()
      .subscribe((result: Families[]) => (this.families = result));
    },
    (cancel)=>{
      console.log("cancel");
    });
  }

  deleteFamily(families: Families){

    const ref = this.modalService.open(DeleteFamiliesComponent);
    ref.componentInstance.families = families;

    ref.result.then((ok)=>{
      this.familiesService
      .getFamilies()
      .subscribe((result: Families[]) => (this.families = result));
    },
    (cancel)=>{
      console.log("cancel");
    });
  }
}
