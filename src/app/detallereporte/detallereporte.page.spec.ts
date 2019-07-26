import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallereportePage } from './detallereporte.page';

describe('DetallereportePage', () => {
  let component: DetallereportePage;
  let fixture: ComponentFixture<DetallereportePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallereportePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallereportePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
