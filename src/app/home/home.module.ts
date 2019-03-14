import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeHeaderNavbarComponent } from './home-header/home-header-navbar.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { LandingSmallArticleComponent } from './landing-page/reusable/landing-small-article/landing-small-article.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [LandingPageComponent, NotFoundComponent, HomeHeaderComponent, HomeHeaderNavbarComponent, HomeFooterComponent, LandingSmallArticleComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LandingPageComponent,
    NotFoundComponent,
    HomeHeaderComponent,
    HomeHeaderNavbarComponent,
    HomeFooterComponent,
    LandingSmallArticleComponent
  ]
})
export class HomeModule { }
