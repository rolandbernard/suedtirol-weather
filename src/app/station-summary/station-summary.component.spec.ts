import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationSummaryComponent } from './station-summary.component';

describe('StationSummaryComponent', () => {
  let component: StationSummaryComponent;
  let fixture: ComponentFixture<StationSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
