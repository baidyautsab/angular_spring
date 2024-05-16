import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee-service';
import { Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit{
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService, private router: Router) {} // Inject the service

  ngOnInit(): void {
    this.fetchEmployees();
  }

  fetchEmployees(): void {
    this.employeeService.getEmployeeList().subscribe(
      (data: Employee[]) => {
        this.employees = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  updateEmployee(id: number){
    this.router.navigate(['update-employee', id]);
  }

  deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id).subscribe(
      data => {
        this.fetchEmployees();
      }, error => console.log(error)
    )
  }
}
