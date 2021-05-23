import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { ArtComponent } from './components/art/art.component';
import { BusinessComponent } from './components/business/business.component';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';
import { CountryComponent } from './components/country/country.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EducationComponent } from './components/education/education.component';
import { InternationalComponent } from './components/international/international.component';
import { LearningComponent } from './components/learning/learning.component';
import { NewsContentComponent } from './components/new-post/news-content/news-content.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SportsComponent } from './components/sports/sports.component';
import { AdminGuard } from './guard/admin.guard';



const routes: Routes = [


  {
    path: "news/:uniqueID",
    component: NewsContentComponent
  },
  {
    path: "",
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },

  {
    path: "dashboard",
    component: DashboardComponent
  },

  // {
  //   path: "state",
  //   component: ComingSoonComponent
  // },

  {
    path: "country",
    component: CountryComponent
  },
  {
    path: "international",
    component: InternationalComponent
  },
  {
    path: "business",
    component: BusinessComponent
  },
  {
    path: "sport",
    component: SportsComponent
  },
  {
    path: "art",
    component: ArtComponent
  },

  {
    path: "horoscope",
    component: ComingSoonComponent
  },
  {
    path: "education",
    component: EducationComponent
  },
  {
    path: "learning",
    component: LearningComponent
  },

  {
    path: "admin",
    component: AdminComponent,
    //canActivate: [AdminGuard]
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
