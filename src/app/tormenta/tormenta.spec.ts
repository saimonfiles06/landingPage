import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tormenta } from './tormenta';

describe('Tormenta', () => {
  let component: Tormenta;
  let fixture: ComponentFixture<Tormenta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tormenta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tormenta);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
