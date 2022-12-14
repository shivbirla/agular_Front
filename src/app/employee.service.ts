import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = "http://localhost:8080/api/v1/employees";

  constructor(private httpClient: HttpClient) { }

  
  getEmployeesList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseUrl}`);
  }

  createEmployee(employee : Employee):Observable<object>{
    console.log("create Employee called");
    console.warn(employee)
    return this.httpClient.post(`${this.baseUrl}`,employee);
  }

  uploadFile(formdata:FormData):Observable<any>{
    console.warn("file Upload called from service")
      // return this.httpClient.post(`${this.baseUrl}/file`,formdata);
     return this.httpClient.post(`${this.baseUrl}/formdata`,formdata);
  }
  getEmployeeById(id:number):Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseUrl}/${id}`);
  } 

  updateEmployee(id:number,employee: Employee):Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/${id}`,employee);
  }

  deleteEmployee(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`)
  }

  getEmployeeFileById(file_id:any):Observable<any>{
    return this.httpClient.get<any>(`${this.baseUrl}/file/${file_id}`);
  } 
}
