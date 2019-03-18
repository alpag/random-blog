import { Component, OnInit} from '@angular/core';
import { Article } from 'src/app/shared/models/article.model';
import { Router, ActivatedRoute} from '@angular/router'
import { ArticleService } from 'src/app/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss']
})
export class ArticleDetailsComponent implements OnInit {
  article : Observable<Article>;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articleService: ArticleService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    this.article = this.articleService.getArticle(id);
  }

}
