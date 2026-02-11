import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Euskalmet } from './euskalmet';

describe('Euskalmet', () => {
  let component: Euskalmet;
  let fixture: ComponentFixture<Euskalmet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Euskalmet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Euskalmet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
