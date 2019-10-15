import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmployeedetailComponent } from './employeedetail/employeedetail.component';
import { EmployeeaddComponent } from './employeeadd/employeeadd.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'employees', component: EmployeelistComponent},
  { path: 'addemployee', component: EmployeeaddComponent},
  { path: 'employee/:username', component: EmployeedetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
