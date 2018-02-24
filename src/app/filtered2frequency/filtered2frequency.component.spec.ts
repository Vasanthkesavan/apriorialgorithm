import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Filtered2frequencyComponent } from './filtered2frequency.component';

describe('Filtered2frequencyComponent', () => {
  let component: Filtered2frequencyComponent;
  let fixture: ComponentFixture<Filtered2frequencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Filtered2frequencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Filtered2frequencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
