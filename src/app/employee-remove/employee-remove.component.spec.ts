import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeRemoveComponent } from './employee-remove.component';

describe('EmployeeRemoveComponent', () => {
  let component: EmployeeRemoveComponent;
  let fixture: ComponentFixture<EmployeeRemoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeRemoveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
