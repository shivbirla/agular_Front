import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PopUpComponent } from './pop-up/pop-up.component';

const routes: Routes = [
    {path:'employees',component: EmployeeListComponent},
    {path:'create-employee',component: CreateEmployeeComponent},
    {path:'',redirectTo:'employees',pathMatch:'full'},
    {path:'update-employee/:id',component:CreateEmployeeComponent},
    {path:'employee-detail/:id',component:EmployeeDetailComponent},
    {path:'ChildComponent',component:ChildComponent},
    {path:'PopUpComponent',component:PopUpComponent},
    {path:'employee-file/:file_id',component:EmployeeDetailComponent},

    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
