import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';

const routes: Routes = [
  {
    component: EmployeeListComponent,
    path: "employee/list"
  },
  {
    component: EmployeeAddComponent,
    path: "employee/add"
  },
  {
    component: EmployeeUpdateComponent,
    path: 'employee/update/:id'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
