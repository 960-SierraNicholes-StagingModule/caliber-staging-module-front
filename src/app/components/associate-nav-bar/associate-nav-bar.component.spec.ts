import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociateNavBarComponent } from './associate-nav-bar.component';

describe('AssociateNavBarComponent', () => {
  let component: AssociateNavBarComponent;
  let fixture: ComponentFixture<AssociateNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssociateNavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociateNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
