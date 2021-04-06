import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSwotProgressComponent } from './add-swot-progress.component';

describe('AddSwotProgressComponent', () => {
  let component: AddSwotProgressComponent;
  let fixture: ComponentFixture<AddSwotProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSwotProgressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSwotProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
