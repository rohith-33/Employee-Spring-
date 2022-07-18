import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url = "http://localhost:8080/employee/";

  constructor(private http: HttpClient) { }


  addEmployee(data: any) {
    return this.http.post(this.url, data);
  }

  deleteEmployee(id: any) {
    console.log(this.url + id);
    this.http.delete(this.url + id).subscribe(
      (result) => console.log(result)
    );
  }

  updateEmployee(id: number, data: any) {
    return this.http.put(this.url + id, data);
  }

  getEmployee(id: number) {
    return this.http.get(this.url + id);
  }

  getAllEmployees() {
    return this.http.get(this.url);
  }

}
