import { CommonModule } from '@angular/common';
import { Component ,OnInit} from '@angular/core';
import { FormBuilder,FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MyLocalMovieServiceService } from '../my-local-movie-service.service';
import { MyHttpService } from '../my-http.service';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  providers:[MyLocalMovieServiceService],

  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent implements OnInit{
  Movie:any
  isupdate=false
  constructor(public MyMovie:MyLocalMovieServiceService,public fb:FormBuilder){

  }
  getAllMovieData(){
    this.Movie=this.MyMovie.getMovieData()
  }
  ngOnInit(): void {
    this.getAllMovieData()
  }
  movform=this.fb.group({
    mid:[,Validators.required],
    mname:[,Validators.required],
    ticket:[,Validators.required]
  })

  clearForm(){
    this.movform.reset()
  }

  SaveData(){

    console.log(this.movform.value)
    let mov=this.movform.value
    if(this.isupdate==false)
    {
    this.MyMovie.addMovie(mov)
    }
    else{
        this.MyMovie.updateMovie(mov)
        this.isupdate=false
    }
    this.movform.reset()
    this.getAllMovieData()
  }

  deleteMov(id:any)
  {
    let result=confirm("Do you want to delete"+id+" ?")
    if(result==true)
    {
      this.MyMovie.deleteMovie(id)
      this.getAllMovieData();
    }
  }
  editMov(mov:any){
     this.isupdate=true
     this.movform.setValue({
       mid:mov.mid,
       mname:mov.mname,
       ticket:mov.ticket
     })
   }
}
