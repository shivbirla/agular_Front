import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  id: number;
 
  employee: Employee;
  name :String;
  imagePath: string;
  base64Data: any;

  constructor(private route: ActivatedRoute, private employeeService: EmployeeService,private router : Router) {
     
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employee = new Employee();
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data

    })
   
  }

    getEmployeeFile(file_id : number){
    this.employeeService.getEmployeeFileById(file_id).subscribe(data => {
      this.imagePath  = 'data:image/jpeg;base64,'+ data.str;

 })
   
  }

}
