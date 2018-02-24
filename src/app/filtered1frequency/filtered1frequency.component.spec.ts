import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Filtered1frequencyComponent } from './filtered1frequency.component';

describe('Filtered1frequencyComponent', () => {
  let component: Filtered1frequencyComponent;
  let fixture: ComponentFixture<Filtered1frequencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Filtered1frequencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Filtered1frequencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
