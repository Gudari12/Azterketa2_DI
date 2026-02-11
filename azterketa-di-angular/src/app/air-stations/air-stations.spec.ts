import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirStations } from './air-stations';

describe('AirStations', () => {
  let component: AirStations;
  let fixture: ComponentFixture<AirStations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AirStations]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AirStations);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
