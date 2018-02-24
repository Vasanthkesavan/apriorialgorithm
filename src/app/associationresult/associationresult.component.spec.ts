import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociationresultComponent } from './associationresult.component';

describe('AssociationresultComponent', () => {
  let component: AssociationresultComponent;
  let fixture: ComponentFixture<AssociationresultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssociationresultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociationresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
