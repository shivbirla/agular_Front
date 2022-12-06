import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { Employee } from './employee';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

const routes: Routes = [
    {path:'employees',component: EmployeeListComponent},
    {path:'create-employee',component: CreateEmployeeComponent},
    {path:'',redirectTo:'employees',pathMatch:'full'},
    {path:'update-employee/:id',component:CreateEmployeeComponent},
    {path:'employee-detail/:id',component:EmployeeDetailComponent},

    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
