import { Injectable, OnInit } from '@angular/core';
import { Article } from 'src/app/shared/models/article.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService{
  private ARTICLES :Article[] = [];

  getArticles() : Observable<Article[]>{
    return of(this.ARTICLES);
  }

  getArticle(id: string) : Observable<Article>{
    return of(this.ARTICLES[+id]);
  }

  constructor() { 
    var a = new Article("Lorem ipsum", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, omnis suscipit? Harum, cumque architecto. Mollitia facere, libero temporibus magnam ullam modi qui voluptatum atque sequi doloribus quae excepturi sint id.", "https://thenypost.files.wordpress.com/2018/10/102318-dogs-color-determine-disesases-life.jpg")
    this.ARTICLES.push(a);
    var a = new Article("Art title", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, omnis suscipit? Harum, cumque architecto. Mollitia facere, libero temporibus magnam ullam modi qui voluptatum atque sequi doloribus quae excepturi sint id.", "https://teologiapolityczna.pl/assets/cms/ContentImage/2018/_resampled/ScaleWidthWyI4MDAiXQ/jp2-2.jpg")
    this.ARTICLES.push(a);
    var a = new Article("It's weird", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, omnis suscipit? Harum, cumque architecto. Mollitia facere, libero temporibus magnam ullam modi qui voluptatum atque sequi doloribus quae excepturi sint id.", "http://bi.gazeta.pl/im/2e/14/c8/z13112366V,Bialystok.jpg")
    this.ARTICLES.push(a);
    var a = new Article("It's weird2", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, omnis suscipit? Harum, cumque architecto. Mollitia facere, libero temporibus magnam ullam modi qui voluptatum atque sequi doloribus quae excepturi sint id.", "http://bi.gazeta.pl/im/2e/14/c8/z13112366V,Bialystok.jpg")
    this.ARTICLES.push(a);
    var a = new Article("It's weird3", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, omnis suscipit? Harum, cumque architecto. Mollitia facere, libero temporibus magnam ullam modi qui voluptatum atque sequi doloribus quae excepturi sint id.", "http://bi.gazeta.pl/im/2e/14/c8/z13112366V,Bialystok.jpg")
    this.ARTICLES.push(a);
  }
}

