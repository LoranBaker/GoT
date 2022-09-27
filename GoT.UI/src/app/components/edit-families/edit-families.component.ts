import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Families } from 'src/app/models/families';
import { FamiliesService } from 'src/app/services/families.service';

@Component({
  selector: 'app-edit-families',
  templateUrl: './edit-families.component.html',
  styleUrls: ['./edit-families.component.css']
})
export class EditFamiliesComponent implements OnInit {
  @Input() families?: Families;
  @Output() familiesUpdated = new EventEmitter<Families[]>();


  constructor(private familyServices: FamiliesService) { }


  ngOnInit(): void {
  }

  updateFamilies(families:Families){
    this.familyServices.updateFamilies(families).subscribe((families: Families[])=> this.familiesUpdated.emit(families));
  }

  deleteFamilies(families:Families){
    this.familyServices.deleteFamilies(families).subscribe((families: Families[])=> this.familiesUpdated.emit(families));
  }

  createFamilies(families:Families){
    this.familyServices.createFamilies(families).subscribe((families: Families[])=> this.familiesUpdated.emit(families));
  }

}
