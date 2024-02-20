import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { AbstractControl, FormBuilder, FormControl, FormGroup,  Validators } from '@angular/forms';

@Component({
  selector: 'app-material-form',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,MatCardModule],
  templateUrl: './material-form.component.html',
  styleUrl: './material-form.component.css'
})
export class MaterialFormComponent  implements OnInit {

  form:FormGroup=new FormGroup(
    {
      fullname:new FormControl(''),
      username:new FormControl(''),
      email:new FormControl(''),
      password:new FormControl(''),
      acceptTerms:new FormControl(false)
    }
  )
  submitted=false
  constructor(public fb:FormBuilder){
    
  }

  get f():{[key:string]:AbstractControl}{
    return this.form.controls
  }
  ngOnInit(): void {
    
      this.form=this.fb.group(
        {
          fullname:['',Validators.required],
          username:['',[Validators.required,Validators.minLength(6),Validators.maxLength(20)],],
          email:['',[Validators.required,Validators.email],],
          password:['',[Validators.required,Validators.minLength(6)],],
          acceptTerms:[false,Validators.requiredTrue]
        }
      )

  }

  OnSubmit()
  {     this.submitted=true
       if(this.form.invalid)
       {
        return
       }
       console.log(this.form.value)

  }
  OnReset()
  {
    this.form.reset()
    this.submitted=false
  }

}