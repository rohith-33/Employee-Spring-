import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee-service.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {

  id: any;
  employee: any;

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => this.id = params.get('id')
    );

    this.employeeService.getEmployee(this.id).subscribe(data => {
      this.employee = data;
      console.log(this.employee);
    });
  }

  updateEmployee(data: any) {
    this.employeeService.updateEmployee(this.id, data).subscribe((result) => {
      console.log(result);
    });
    console.log(data);
    this.router.navigate(['/employee/list']);
  }

}
