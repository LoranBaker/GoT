import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFamiliesComponent } from './delete-families.component';

describe('DeleteFamiliesComponent', () => {
  let component: DeleteFamiliesComponent;
  let fixture: ComponentFixture<DeleteFamiliesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteFamiliesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteFamiliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
