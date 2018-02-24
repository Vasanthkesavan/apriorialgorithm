import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtensioncomponentthreeComponent } from './extensioncomponentthree.component';

describe('ExtensioncomponentthreeComponent', () => {
  let component: ExtensioncomponentthreeComponent;
  let fixture: ComponentFixture<ExtensioncomponentthreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtensioncomponentthreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtensioncomponentthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
