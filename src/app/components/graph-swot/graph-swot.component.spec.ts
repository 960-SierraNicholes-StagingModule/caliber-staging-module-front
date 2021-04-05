import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphSwotComponent } from './graph-swot.component';

describe('GraphSwotComponent', () => {
  let component: GraphSwotComponent;
  let fixture: ComponentFixture<GraphSwotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphSwotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphSwotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
