import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamiliesDashboardComponent } from './families-dashboard.component';

describe('FamiliesDashboardComponent', () => {
  let component: FamiliesDashboardComponent;
  let fixture: ComponentFixture<FamiliesDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamiliesDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamiliesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
