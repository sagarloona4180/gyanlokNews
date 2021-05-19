import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';
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
    path: "state",
    component: ComingSoonComponent
  },

  {
    path: "country",
    component: ComingSoonComponent
  },
  {
    path: "international",
    component: ComingSoonComponent
  },
  {
    path: "business",
    component: ComingSoonComponent
  },
  {
    path: "sports",
    component: ComingSoonComponent
  },
  {
    path: "art",
    component: ComingSoonComponent
  },

  {
    path: "horoscope",
    component: ComingSoonComponent
  },
  {
    path: "education",
    component: ComingSoonComponent
  },
  {
    path: "learning",
    component: ComingSoonComponent
  },

  {
    path: "admin",
    component: AdminComponent
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
