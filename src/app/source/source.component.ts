import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsclientService } from '../newsclient.service';


@Component({
  selector: 'app-source',
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.scss']
})
export class SourceComponent implements OnInit, OnDestroy {

  sub;
  state: any;
  toDisplay:string = '';
  articles: any = [];

  constructor(private routes: ActivatedRoute, private _http: NewsclientService) { }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    //this will get the respective data
    this.sub = this.routes.data.subscribe(data =>{
      this.state = data;
      this.toDisplay = this.state.toDisplay;
    });

    let responses = this._http.get(this.toDisplay);
    for(let response of responses){
      response.subscribe(res =>{
        this.articles.push(res);
        // console.log(this.articles);
      });

    }


    
  }

}
