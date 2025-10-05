import { Injectable } from '@angular/core';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
private employee:Employee[]=[
  {eid:1,ename:'sarvesh',desig:'designer'},
  {eid:2,ename:'Hari',desig:'manager'},
  {eid:3,ename:'Bhavathaarini',desig:'TeamLeader'},
]
//get all records
getEmployee():Employee[]
{
  return this.employee;
}
}