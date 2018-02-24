import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtensioncomponentComponent } from './extensioncomponent.component';

describe('ExtensioncomponentComponent', () => {
  let component: ExtensioncomponentComponent;
  let fixture: ComponentFixture<ExtensioncomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtensioncomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtensioncomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
