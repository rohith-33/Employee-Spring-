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

  constructor(private employeeService: EmployeeService) { }

  

  getEmployee(id: number) {
    this.employeeService.getEmployee(id);
  }

  

}
