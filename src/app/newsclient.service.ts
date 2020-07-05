import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsclientService {

  // categories: Array<string> = ['world', 'us', 'politics','business','health'];
  categories: Array<string> = ['health', 'world'];
  sources: Array<string> = ['yahoo', 'cnn'];
  constructor(private http: HttpClient) { }

  getAll(): Observable<any[]>{

    let responses: Array<any> = [];

    for(let source of this.sources){
      for(let category of this.categories){
          let url:string = `http://localhost:4000/${source}/${category}`;
          responses.push(this.http.get(url));
      }
    }    

    return forkJoin(responses);
    //return this.http.get('http://localhost:4000/yahoo/us');
  }
}
