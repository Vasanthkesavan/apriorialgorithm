import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtensioncomponentfourComponent } from './extensioncomponentfour.component';

describe('ExtensioncomponentfourComponent', () => {
  let component: ExtensioncomponentfourComponent;
  let fixture: ComponentFixture<ExtensioncomponentfourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtensioncomponentfourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtensioncomponentfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
