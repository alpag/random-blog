import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../models/article.model'

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss']
})
export class ArticleCardComponent implements OnInit {
  @Input() article : Article;
  constructor() { }

  ngOnInit() {
  }

}

