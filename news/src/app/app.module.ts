import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { ContentDetailComponent } from './components/new-post/content-detail/content-detail.component';
import { ContentImageComponent } from './components/new-post/content-image/content-image.component';
import { ContentShareComponent } from './components/new-post/content-share/content-share.component';
import { ContentTitleComponent } from './components/new-post/content-title/content-title.component';
import { ContentVideoComponent } from './components/new-post/content-video/content-video.component';
import { NewsContentComponent } from './components/new-post/news-content/news-content.component';
import { TopHeaderComponent } from './components/top-header/top-header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TopNewsComponent } from './components/dashboard/top-news/top-news.component';
import { WorldNewsComponent } from './components/dashboard/world-news/world-news.component';
import { PopularNewsComponent } from './components/dashboard/popular-news/popular-news.component';

import { MainHeadlineComponent } from './components/dashboard/main-headline/main-headline.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';
import { AdminComponent } from './components/admin/admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { TopHeadlinesComponent } from './components/dashboard/top-headlines/top-headlines.component';
import { AdminPasswordComponent } from './components/admin-password/admin-password.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { EditorChoiceComponent } from './components/dashboard/editor-choice/editor-choice.component';
import { SportsComponent } from './components/sports/sports.component';
import { CountryComponent } from './components/country/country.component';
import { InternationalComponent } from './components/international/international.component';
import { BusinessComponent } from './components/business/business.component';
import { ArtComponent } from './components/art/art.component';
import { EducationComponent } from './components/education/education.component';
import { LearningComponent } from './components/learning/learning.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { SubscribeUsComponent } from './components/subscribe-us/subscribe-us.component';
import { EmailUsComponent } from './components/email-us/email-us.component';
import { MoreNewsComponent } from './components/more-news/more-news.component';




@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    MenuBarComponent,
    NewsContentComponent,
    ContentTitleComponent,
    ContentImageComponent,
    ContentVideoComponent,
    ContentDetailComponent,
    FooterComponent,
    ContentShareComponent,
    DashboardComponent,
    TopNewsComponent,
     WorldNewsComponent,
     PopularNewsComponent,

    MainHeadlineComponent,
    PageNotFoundComponent,
    ComingSoonComponent,
    AdminComponent,
    TopHeadlinesComponent,
    AdminPasswordComponent,
    EditorChoiceComponent,
    SportsComponent,
    CountryComponent,
    InternationalComponent,
    BusinessComponent,
    ArtComponent,
    EducationComponent,
    LearningComponent,
    AboutUsComponent,
    SubscribeUsComponent,
    EmailUsComponent,
    MoreNewsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule, BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({

      timeOut: 30000,
      maxOpened: 1,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      toastClass: 'toast toast-bootstrap-compatibility-fix'
    })
  ],
  providers: [  {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
