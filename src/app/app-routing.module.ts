import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SourceComponent } from './source/source.component';



const routes: Routes = [
  {path: '', component: SourceComponent, data:{toDisplay:'all'}},
  {path:'cnn', component:SourceComponent, data: {toDisplay:'cnn'}},
  {path:'yahoo', component:SourceComponent, data: {toDisplay:'yahoo'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
