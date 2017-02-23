/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SpikeComponent } from './spike.component';

describe('SpikeComponent', () => {
  let component: SpikeComponent;
  let fixture: ComponentFixture<SpikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
