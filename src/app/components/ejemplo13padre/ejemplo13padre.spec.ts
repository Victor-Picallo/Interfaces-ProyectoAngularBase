import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo13padre } from './ejemplo13padre';

describe('Ejemplo13padre', () => {
  let component: Ejemplo13padre;
  let fixture: ComponentFixture<Ejemplo13padre>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejemplo13padre]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejemplo13padre);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
