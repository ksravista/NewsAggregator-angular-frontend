import { Component, OnInit, OnDestroy } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Subscribable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-source',
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.scss']
})
export class SourceComponent implements OnInit, OnDestroy {

  sub;
  state: any;
  toDisplay:string = '';
  categories: Array<string> = ['world', 'us', 'politics','business','health'];

  constructor(private routes: ActivatedRoute) { }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    //this will get the respective data
    this.sub = this.routes.data.subscribe(data =>{
      this.state = data;
      this.toDisplay = this.state.toDisplay;
    });

    

    
  }

}
