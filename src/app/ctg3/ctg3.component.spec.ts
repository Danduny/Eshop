import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ctg3Component } from './ctg3.component';

describe('Ctg3Component', () => {
  let component: Ctg3Component;
  let fixture: ComponentFixture<Ctg3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ctg3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ctg3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
