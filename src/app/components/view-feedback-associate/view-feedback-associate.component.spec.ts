import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFeedbackAssociateComponent } from './view-feedback-associate.component';

describe('ViewFeedbackAssociateComponent', () => {
  let component: ViewFeedbackAssociateComponent;
  let fixture: ComponentFixture<ViewFeedbackAssociateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFeedbackAssociateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFeedbackAssociateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
