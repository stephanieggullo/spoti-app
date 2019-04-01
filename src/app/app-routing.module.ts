import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './comoponents/home/home.component';
import { SearchComponent } from './comoponents/search/search.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  {path: 'search', component: SearchComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
