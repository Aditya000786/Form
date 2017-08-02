import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import {MenuModule,MenuItem,ContextMenuModule} from 'primeng/primeng';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

import 'hammerjs';
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';
import { MainComponent } from './main/main.component';
import {Form1Component} from './form1/form1.component';

import {HttpModule} from '@angular/http';
import {DataTableModule,DropdownModule,CalendarModule} from 'primeng/primeng';
import {CarService} from './form1/car.service';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HeaderComponent,
    AsideComponent,
    MainComponent,
    Form1Component
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MenuModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ContextMenuModule,
    FormsModule,
    DataTableModule,
    DropdownModule,
    CalendarModule,
    ReactiveFormsModule
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
