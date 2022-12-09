import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { fileSend } from '../fileSend';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  fileSend: fileSend= new fileSend();
  reactiveForm: any;
  id: number;
  loading: boolean = false; // Flag variable
  fileName='';
  fileUpload:any;
  formData:FormData;
  


  constructor(private employeeService: EmployeeService, private router: Router, private route: ActivatedRoute) {

  }

  saveEmployee() {
    this.employeeService.createEmployee(this.employee).subscribe(data => {

      this.gotoEmployeeList();
    }),
      error => console.error(error);

  }

  gotoEmployeeList() {
    this.router.navigate(['/employees']);
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    if(this.id){
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      var arr = data.hobbies.split(',')
       let n =arr.length
       for(let i=0;i<n;i++){
       var h= arr[i];
       console.log(h);
       console.log(n);
       console.log('======================================');

         if(arr.map){
          this.saveHobbies[i].select=true
          console.log(h);
          
         
         }
    
      }
    
     console.log(data.hobbies)     
      this.employee = data;
     
    })}
  

    this.reactiveForm = new FormGroup({
      firstName: new FormControl(null, [Validators.required,Validators.pattern('[a-zA-Z]+$'),this.noSpaceAllowed]),
      lastName: new FormControl(null, [Validators.required,Validators.pattern('[a-zA-Z]+$'),this.noSpaceAllowed]),
      emailId: new FormControl(null, [Validators.required, Validators.email]),
      gender:new FormControl(null,Validators.required),
      hobbies:new FormControl(null),
      fileSend:new FormControl(null)
    });
  }
  
 
  saveHobbies = [
    {id:1,value:"Cricket",select:false},
    {id:2,value:"Football",select:false},
    {id:3,value:"Tenish",select:false}
   ];
  
  
  onSubmit() {

    this.employee.hobbies="";
    
     var str = "";
     for (let i = 0; i <this.saveHobbies.length; i++) {    
      if(this.saveHobbies[i].select){
       str = str+this.saveHobbies[i].value+",";    
      }  
    } 
    // this.employeeService.uploadFile(this.formData).subscribe(data=>{
    //      console.log("API called**************************"+data);
    //    this.fileSend.id=data;
    //    console.log(this.fileSend)
    //    this.employee.fileSend = this.fileSend;
    //     })
    
    this.employee.hobbies = str.substring(0, str.length-1);
    console.log(this.reactiveForm);
   
    this.saveEmployee();
    
  }

get emailId(){
  return this.reactiveForm.get('emailId');
}

get firstName(){
  return this.reactiveForm.get('firstName');
}
get lastName(){
  return this.reactiveForm.get('lastName');
}

get gender(){
  return this.reactiveForm.get('gender');
}

get hobbies(){
  return this.reactiveForm.get('hobbies.value');
}
get uploadFile(){
  return this.reactiveForm.get('uploadFile.value');
}

noSpaceAllowed(control:FormControl){
   if(control.value!=null && control.value.indexOf(' ')!=-1){
    return {noSpaceAllowed:true}
   }
   return null;
}

selectFile(event: any){
  console.log("www " +event)
  this.fileUpload = event.target.files[0];
}

  uploadfile(){

    this.formData = new FormData();
    
     this.formData.append("file", this.fileUpload);
     this.employeeService.uploadFile(this.formData).subscribe(data=>{
      console.log("API called");
     })
      console.log(this.formData); 
      //  this.employee.fileSend=this.formData;
      
     console.log("Form data is :: "+this.formData.get)
    }
}
        
