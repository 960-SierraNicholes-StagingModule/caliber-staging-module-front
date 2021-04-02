import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySwotComponent } from './my-swot.component';

describe('MySwotComponent', () => {
  let component: MySwotComponent;
  let fixture: ComponentFixture<MySwotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySwotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MySwotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
