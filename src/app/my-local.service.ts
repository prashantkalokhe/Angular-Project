import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyLocalService {
  employee:any[]=[]
  constructor() { 
    this.employee=[{eid:101,ename:'ROCY',salary:70000},
  {eid:102,ename:'Nikita',salary:56000},
{eid:103,ename:'Ramesh',salary:78000}]
  }

  getEmployee()
  {
    return this.employee
  }

  addEmployee(emp:any)
  {
    this.employee.push({eid:emp.eid,ename:emp.ename,salary:emp.salary})
  }
  deleteEmployee(id:any)
  {
    let i=0
      for( ;i<this.employee.length;i++)
      {
          if(this.employee[i].eid==id)
          {
            break;
          }
      }
      this.employee.splice(i,1);
  }

  updateEmployee(emp:any)
  {
  for(let i=0;i<this.employee.length;i++)
  {
    if(this.employee[i].eid==emp.eid)
    {
      this.employee[i].ename=emp.ename
      this.employee[i].salary=emp.salary
      break;
    }
  }
  }
}
