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
import { StateNewsComponent } from './components/dashboard/state-news/state-news.component';
import { SportsNewsComponent } from './components/dashboard/sports-news/sports-news.component';
import { InternationalNewsComponent } from './components/dashboard/international-news/international-news.component';
import { CountryNewsComponent } from './components/dashboard/country-news/country-news.component';
import { MainHeadlineComponent } from './components/dashboard/main-headline/main-headline.component';


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
    StateNewsComponent,
    SportsNewsComponent,
    InternationalNewsComponent,
    CountryNewsComponent,
    MainHeadlineComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
