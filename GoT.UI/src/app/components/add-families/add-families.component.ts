import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Inject, ViewChild } from '@angular/core';
import { Families } from 'src/app/models/families';
import { FamiliesService } from 'src/app/services/families.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-families',
  templateUrl: './add-families.component.html',
  styleUrls: ['./add-families.component.css']
})
export class AddFamiliesComponent implements OnInit {
  @Input() families?: Families;
  @Output() familiesUpdated = new EventEmitter<Families[]>();
  

  addFamilies: FormGroup;
  addFamily:Families = new Families();
  constructor(public modal: NgbActiveModal,private familyServices: FamiliesService, private toastr:ToastrService,private fb:FormBuilder) {
    this.addFamilies = this.fb.group({
      naziv: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30)
      ])),
      predstavnik: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30)
      ])),
      grb: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30)
      ])),
      
    })

}

  ngOnInit(): void {
  }

  createFamilies(addFamily = new Families(this.addFamilies.value)){
    
    this.familyServices.createFamilies(addFamily).subscribe((families: Families[])=>this.familiesUpdated.emit(families));
    this.toastr.success("You have successfully added new family!");
    this.modal.close();
    
    }

    get f(){
      return this.addFamilies.controls;
    }

}