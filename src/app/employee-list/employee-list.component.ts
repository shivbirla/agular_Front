import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
hobbies: any;


  constructor(private employeeService: EmployeeService,private router : Router) { }

  employees: Employee[];

  id: number;


  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees() {
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
      console.log("get employee called")
    });

  }
  updateEmployee(id : Number) {
        this.router.navigate(['update-employee',id]);
  }

  deleteEmployee(id:number){
     this.employeeService.deleteEmployee(id).subscribe(data=>{
      console.log("delete employee called")
      console.log(data);
      this.getEmployees();
     })
  }

  employeeDetail(id : number){
    this.router.navigate(['employee-detail',id])
  }


}
