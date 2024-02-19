import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login1',
  standalone: true,
  imports: [CommonModule,FormsModule,NgFor,ReactiveFormsModule],
  templateUrl: './login1.component.html',
  styleUrl: './login1.component.css'
})
export class Login1Component implements OnInit{

  MyContact!:any
  
 //Mycontact!:contact

  ngOnInit(): void {
    this.MyContact = {
      firstName:"",
      lastName:"",
      email:"",
      gender:""

    }
  }

  OnSubmit(){
    console.log(this.MyContact)
  }


}
// export class contact
// {
//   firstName!:string
//   lastName!:string
//   email!:string
//   gender!:string|null|undefined
// }