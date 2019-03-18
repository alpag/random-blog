import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../core';
import { Article } from '../../shared/models/article.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
  articles : Observable<Article[]>;
  viralArticle : Article;
  constructor(private articleService: ArticleService) { }
  
  ngOnInit() {
    this.articles = this.articleService.getArticles();
    this.viralArticle = this.articles[0];
    console.log(this.articles);
  }

}
