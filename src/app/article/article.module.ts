import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './article-list/article-list.component';
import { SharedModule } from '../shared/shared.module';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { ArticleRoutingModule } from './article-routing.module';

@NgModule({
  declarations: [ArticleListComponent, ArticleDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ArticleRoutingModule
  ],
  exports:[
    ArticleListComponent
  ]
})
export class ArticleModule { }
