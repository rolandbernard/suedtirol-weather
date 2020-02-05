import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasurementLineComponent } from './measurement-line.component';

describe('MeasurementLineComponent', () => {
  let component: MeasurementLineComponent;
  let fixture: ComponentFixture<MeasurementLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeasurementLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasurementLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
