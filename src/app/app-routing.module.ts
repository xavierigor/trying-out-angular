import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthorsComponent} from './authors/authors.component';
import {CreateAuthorComponent} from './authors/create-author/create-author.component';


const routes: Routes = [
  {path: 'authors', component: AuthorsComponent},
  {path: 'authors/create', component: CreateAuthorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
