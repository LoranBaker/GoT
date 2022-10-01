import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Inject, ViewChild } from '@angular/core';
import { Families } from 'src/app/models/families';
import { FamiliesService } from 'src/app/services/families.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-delete-families',
  templateUrl: './delete-families.component.html',
  styleUrls: ['./delete-families.component.css']
})
export class DeleteFamiliesComponent implements OnInit {
  @Input() families?: Families;
  @Output() familiesUpdated = new EventEmitter<Families[]>();

  constructor(public modal: NgbActiveModal,private familyServices: FamiliesService, private toastr:ToastrService) { }


  ngOnInit(): void {
    console.log(this.families);
  }


  deleteFamilies(families:Families){
    this.familyServices.deleteFamilies(families).subscribe((families: Families[])=> this.familiesUpdated.emit(families));
    this.toastr.success("You have successfully deleted family!");
    this.modal.close();
  }

}
