import { Component, OnInit, ViewChild } from '@angular/core';
import { Families } from 'src/app/models/families';
import { FamiliesService } from 'src/app/services/families.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EditFamiliesComponent } from '../edit-families/edit-families.component';

@Component({
  selector: 'app-families-dashboard',
  templateUrl: './families-dashboard.component.html',
  styleUrls: ['./families-dashboard.component.css']
})

export class FamiliesDashboardComponent implements OnInit {
  title = 'GoT.UI';
  families: Families[] = [];
  familiesToEdit?: Families; 

  constructor(private familiesService: FamiliesService, private dialog: MatDialog){}
    
    ngOnInit() : void {
      this.familiesService
      .getFamilies()
      .subscribe((result: Families[]) => (this.families = result));
    
  }

  openDialogEdit(families: Families) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.familiesToEdit = families;

    this.dialog.open(EditFamiliesComponent, dialogConfig);
}

  updateFamiliesList(families: Families[]){
    this.families = families;
  }

  createNewFamily(){
    this.familiesToEdit = new Families();
  }

  editFamily(families: Families){
    this.familiesToEdit = families;
  }
}
