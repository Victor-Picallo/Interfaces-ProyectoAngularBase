import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo20 } from './ejemplo20';

describe('Ejemplo20', () => {
  let component: Ejemplo20;
  let fixture: ComponentFixture<Ejemplo20>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejemplo20]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejemplo20);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
