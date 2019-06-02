import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cont1Page } from './cont1.page';

describe('Cont1Page', () => {
  let component: Cont1Page;
  let fixture: ComponentFixture<Cont1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cont1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cont1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
