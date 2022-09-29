import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Inject, ViewChild } from '@angular/core';
import { Families } from 'src/app/models/families';
import { FamiliesService } from 'src/app/services/families.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-families',
  templateUrl: './add-families.component.html',
  styleUrls: ['./add-families.component.css']
})
export class AddFamiliesComponent implements OnInit {
  @Input() families?: Families;
  @Output() familiesUpdated = new EventEmitter<Families[]>();
  constructor(public modal: NgbActiveModal,private familyServices: FamiliesService) { }

  ngOnInit(): void {
  }

  createFamilies(families:Families){
    this.familyServices.createFamilies(families).subscribe((families: Families[])=> this.familiesUpdated.emit(families));
    this.modal.close();
  }
  

}