import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoPesoPage } from './nuevo-peso.page';

describe('NuevoPesoPage', () => {
  let component: NuevoPesoPage;
  let fixture: ComponentFixture<NuevoPesoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoPesoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoPesoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
