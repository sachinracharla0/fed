import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeFedComponent } from './home-fed/home-fed.component';
import { HomeFedDetailComponent } from './home-fed-detail/home-fed-detail.component';

const routes: Routes = [  
  {path:"fed",component:HomeFedComponent},  
  {path:"fedDetail/:id",component:HomeFedDetailComponent},  
  { path: '**', redirectTo: 'fed' }
 ];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
