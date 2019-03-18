import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleCardComponent } from '../shared/components/article-card/article-card.component';
import { Article } from '../shared/models/article.model';
import { SharedModule } from '../shared/shared.module';
import { ArticleDetailsComponent } from './article-details/article-details.component';

@NgModule({
  declarations: [ArticleListComponent, ArticleDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports:[
    ArticleListComponent
  ]
})
export class ArticleModule { }
