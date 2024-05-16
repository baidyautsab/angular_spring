import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee-service';
import { ActivatedRoute, Router } from '@angular/router';
import { error, log } from 'console';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit{
  employee: Employee = new Employee();
  id: number = 0;

  constructor(private employeeService: EmployeeService, private route: ActivatedRoute, private router: Router){}
  
  onSubmit(){
    this.employeeService.updateEmployee(this.id, this.employee).subscribe( data => {
      this.goToEmployeeList();
    }, error => console.log(error))
  }

  goToEmployeeList(){
    this.router.navigate(['/employees'])
  }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    }, (error: any) => {console.log(error)})
  }
}
