import { Component, OnInit } from '@angular/core';
import { Article, ARTICLES } from 'src/app/shared/models/article.model';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
  articles = ARTICLES;
  constructor() { }
  
  ngOnInit() {
    console.log(this.articles);
  }

}
