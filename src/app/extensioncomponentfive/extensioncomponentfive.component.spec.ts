import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtensioncomponentfiveComponent } from './extensioncomponentfive.component';

describe('ExtensioncomponentfiveComponent', () => {
  let component: ExtensioncomponentfiveComponent;
  let fixture: ComponentFixture<ExtensioncomponentfiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtensioncomponentfiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtensioncomponentfiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
