import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NewsContentComponent } from './components/new-post/news-content/news-content.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';



const routes: Routes = [

  {
    path: "",
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },

  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "news",
    component: NewsContentComponent
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
