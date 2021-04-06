import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSwotAssociateComponent } from './view-swot-associate.component';

describe('ViewSwotAssociateComponent', () => {
  let component: ViewSwotAssociateComponent;
  let fixture: ComponentFixture<ViewSwotAssociateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSwotAssociateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSwotAssociateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
