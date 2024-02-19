import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,catchError,throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MyHttpService {
  // url="https://reqres.in/api/users?page=2"
  // constructor(public myhttpclient:HttpClient){
  // }
  url="http://localhost:3000/data"
  constructor(public myhttpclient:HttpClient) { }

  getData()
  {
    return this.myhttpclient.get(this.url)
  }

  deleteData(id:any):Observable<any>{
    console.log("hii")
    return this.myhttpclient.delete<any>(this.url+"/"+id).pipe(
      catchError(this.errorHandler)
    )
  }

  saveData(emp:any):Observable<any>{
    let empdata={id:parseInt(emp.id),fname:emp.fname,salary:parseInt(emp.salary)}
    return this.myhttpclient.post<any>(this.url,empdata).pipe(
      catchError(this.errorHandler)
    )
  }

  public updateEmp(id:any,emp:any):Observable<any>{
    console.log(id+"/////////////")
    return this.myhttpclient.put<any>(`${this.url}/${id}`,emp).pipe(
      catchError(this.errorHandler)
    )
  }
  
 

  errorHandler(error:any)
  {
      let errorMessage=""
      if(error.error instanceof ErrorEvent)
      {
        errorMessage=error.error.message
      }
      else{
        errorMessage=`Error Code: ${error.status} \n Message:${error.message}`
      }
      console.log(errorMessage)
      return throwError(()=>new Error(errorMessage))
  }

 

  
}

