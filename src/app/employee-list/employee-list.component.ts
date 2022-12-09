import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
hobbies: any;


  constructor(private employeeService: EmployeeService,private router : Router,private dialogRef:MatDialog ) { }
  employees:Employee[];
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
  openDialog(id : number){
    
    this.dialogRef.open(PopUpComponent, {
      disableClose:true,
      data : {
        id : id,
        MatDialog:this.dialogRef
        
      }
    });
  }
    
  updateEmployee(id : Number) {
        this.router.navigate(['update-employee',id]);
  }

  deleteEmployee(id:number){
    this.openDialog(id)
     
     }
    //  deleteFromPop(id :number){
    //    this.employeeService.deleteEmployee(id).subscribe(data=>{
    //    console.log("delete employee called")
    //    console.log(data);
    //   this.getEmployees();
    //  })}

  employeeDetail(id : number){
    this.router.navigate(['employee-detail',id])
  }
 
}



