import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { TechComponent } from './tech/tech.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path:'movies',
    component:MoviesComponent
  },
  {
    path:'tech',
    component:TechComponent 
  },
  {
    path:'user/:id',
    component:UserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
