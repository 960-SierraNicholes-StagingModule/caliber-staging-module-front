import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewForAssociateComponent } from './view-for-associate.component';

describe('ViewForAssociateComponent', () => {
  let component: ViewForAssociateComponent;
  let fixture: ComponentFixture<ViewForAssociateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewForAssociateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewForAssociateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
