import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyLocalMovieServiceService {
  Movie: any[] = []

  constructor() {
    this.Movie = [{ mid: 101, mname: 'Bahubali', ticket: 700 },
    { mid: 102, mname: 'Mass', ticket: 560 }, 
    { mid: 103, mname: 'Robot', ticket: 780 }]
  }
  getMovieData(){
    return this.Movie
  }
  
  addMovie(mov:any)
  {
    this.Movie.push({mid:mov.mid,mname:mov.mname,ticket:mov.ticket})
  }
  deleteMovie(id:any)
  {
    let i=0
      for( ;i<this.Movie.length;i++)
      {
          if(this.Movie[i].mid==id)
          {
            break;
          }
      }
      this.Movie.splice(i,1);
  }

  updateMovie(mov:any)
  {
  for(let i=0;i<this.Movie.length;i++)
  {
    if(this.Movie[i].mid==mov.mid)
    {
      this.Movie[i].mname=mov.mname
      this.Movie[i].ticket=mov.ticket
      break;
    }
  }
  }
}
