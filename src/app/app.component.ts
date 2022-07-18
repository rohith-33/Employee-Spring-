import { Component } from '@angular/core';
import { EmployeeService } from './services/employee-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'employeeAPI-frontend';

  employeeList: any;

  constructor(private employeeService: EmployeeService) {}


  // addEmployee(data: any) {
  //   this.employeeService.addEmployee(data);
  // }

  deleteEmployee(id: any) {
    this.employeeService.deleteEmployee(id);
    this.getAllEmployees();
  }

  // updateEmployee(id: any, data: any) {
  //   this.employeeService.updateEmployee(id, data);
  // }

  getEmployee(id: number) {
    this.employeeService.getEmployee(id);
  }

  getAllEmployees() {
    this.employeeService.getAllEmployees().subscribe(
      (result) => this.employeeList = result);
  }

}
