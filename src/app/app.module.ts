import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { Filtered1frequencyComponent } from './filtered1frequency/filtered1frequency.component';
import { Filtered2frequencyComponent } from './filtered2frequency/filtered2frequency.component';
import { Filtered3frequencyComponent } from './filtered3frequency/filtered3frequency.component';
import { AssociationresultComponent } from './associationresult/associationresult.component';
import {MatTabsModule} from '@angular/material/tabs';
import { ExtensioncomponentComponent } from './extensioncomponent/extensioncomponent.component';
import { ExtensioncomponenttwoComponent } from './extensioncomponenttwo/extensioncomponenttwo.component';
import { ExtensioncomponentthreeComponent } from './extensioncomponentthree/extensioncomponentthree.component';
import { ExtensioncomponentfourComponent } from './extensioncomponentfour/extensioncomponentfour.component';
import { ExtensioncomponentfiveComponent } from './extensioncomponentfive/extensioncomponentfive.component';

@NgModule({
  declarations: [
    AppComponent,
    Filtered1frequencyComponent,
    Filtered2frequencyComponent,
    Filtered3frequencyComponent,
    AssociationresultComponent,
    ExtensioncomponentComponent,
    ExtensioncomponenttwoComponent,
    ExtensioncomponentthreeComponent,
    ExtensioncomponentfourComponent,
    ExtensioncomponentfiveComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
