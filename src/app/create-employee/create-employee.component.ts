import { Component, OnInit, input } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee-service';
import { error } from 'console';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employee: Employee = new Employee();
  
  constructor(private employeeService: EmployeeService, private router: Router){}

  onSubmit(){
    this.saveEmployee();
  }

  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe( data => {
      console.log(data); 
      this.goToEmployeeList();
    },
    error => console.log(error))
  }

  goToEmployeeList(){
    this.router.navigate(['/employees'])
  }

  ngOnInit(): void {
    
  }
}
