import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewForAssociateComponent } from './view-for-associate.component';

describe('ViewForAssociateComponent', () => {
  let component: ViewForAssociateComponent;
  let fixture: ComponentFixture<ViewForAssociateComponent>;
  let element = fixture.nativeElement;

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

  it('should have a valid number', () => {
    expect(component.associate.batch).toBeInstanceOf(Number);
  })

  it('should show all swots', () => {
    const el = element.querySelector("associate-content");
    expect(el.rows.length).toEqual(component.swotAnalyses.length + 1);
  });
});
