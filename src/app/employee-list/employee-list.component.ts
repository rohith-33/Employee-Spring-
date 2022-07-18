import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employeeList: any;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getAllEmployees();
  }

  getAllEmployees() {
    this.employeeService.getAllEmployees().subscribe(
      (result) => this.employeeList = result
    );
  }

  deleteEmployee(id: any) {
    this.employeeService.deleteEmployee(id);
    this.getAllEmployees();
    console.log(this.employeeList);
  }

}
