import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { NewsContentComponent } from './news-content/news-content.component';
import { ContentTitleComponent } from './content-title/content-title.component';
import { ContentImageComponent } from './content-image/content-image.component';
import { ContentVideoComponent } from './content-video/content-video.component';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { FooterComponent } from './footer/footer.component';
import { ContentShareComponent } from './content-share/content-share.component';

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
    ContentShareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
