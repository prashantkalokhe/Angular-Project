import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent implements OnInit {

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
