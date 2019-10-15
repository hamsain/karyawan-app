import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import {
    MatFormFieldModule,
    MatSliderModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatAutocompleteModule,
    MatIconModule,
    MatSlideToggleModule,
    MatToolbarModule
} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './login/login.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmployeedetailComponent } from './employeedetail/employeedetail.component';
import { EmployeeaddComponent } from './employeeadd/employeeadd.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeelistComponent,
    EmployeedetailComponent,
    EmployeeaddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSliderModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    MatIconModule,
    MatNativeDateModule,
    FlexLayoutModule
  ],
  providers: [
    MatNativeDateModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
