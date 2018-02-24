import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Filtered3frequencyComponent } from './filtered3frequency.component';

describe('Filtered3frequencyComponent', () => {
  let component: Filtered3frequencyComponent;
  let fixture: ComponentFixture<Filtered3frequencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Filtered3frequencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Filtered3frequencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
