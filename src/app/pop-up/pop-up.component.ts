import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router'
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {

  matdialogRef:MatDialog;
  id:number;

  constructor(@Inject (MAT_DIALOG_DATA) public data,private router: Router,private employeeService: EmployeeService,public matDial:MatDialogRef<PopUpComponent>){
    this.matdialogRef= data.dialogRef;
    this.id=data.id;
  }

  ngOnInit(): void {
    
  }
  cancel(){
    this.matDial.close(false);
  }
  

  delete(id:number){
    console.log(id)
    this.employeeService.deleteEmployee(id).subscribe(data=>{
      console.log("delete employee called")
      window.location.reload();
      console.log(data);
      
  })

}
}
