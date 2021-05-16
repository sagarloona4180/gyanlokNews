import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NewsContentComponent } from './components/new-post/news-content/news-content.component';



const routes: Routes = [

  {
    path:"",
    pathMatch:'full',
    redirectTo :'dashboard'
  },

  {
    path: "dashboard",
    component:DashboardComponent
  },
  {
    path: "news",
    component: NewsContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
