import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtensioncomponenttwoComponent } from './extensioncomponenttwo.component';

describe('ExtensioncomponenttwoComponent', () => {
  let component: ExtensioncomponenttwoComponent;
  let fixture: ComponentFixture<ExtensioncomponenttwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtensioncomponenttwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtensioncomponenttwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
