import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee-service.service'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  updateEmployee(id: any, data: any) {
    this.employeeService.updateEmployee(id, data);
  }

}
