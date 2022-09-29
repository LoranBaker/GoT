import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Inject, ViewChild } from '@angular/core';
import { Families } from 'src/app/models/families';
import { FamiliesService } from 'src/app/services/families.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-families',
  templateUrl: './edit-families.component.html',
  styleUrls: ['./edit-families.component.css']
})
export class EditFamiliesComponent implements OnInit {
  @Input() families?: Families;
  @Output() familiesUpdated = new EventEmitter<Families[]>();


  constructor(public modal: NgbActiveModal,private familyServices: FamiliesService) { }


  ngOnInit(): void {
    console.log(this.families);
  }

  updateFamilies(families:Families){
    this.familyServices.updateFamilies(families).subscribe((families: Families[])=> this.familiesUpdated.emit(families));
    this.modal.close();
  }

  deleteFamilies(families:Families){
    this.familyServices.deleteFamilies(families).subscribe((families: Families[])=> this.familiesUpdated.emit(families));
  }



}
