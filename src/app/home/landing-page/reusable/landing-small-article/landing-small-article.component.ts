import { Component,  Input } from '@angular/core';
import { SmallArticle } from '../../small-articles';

@Component({
  selector: 'app-landing-small-article',
  templateUrl: './landing-small-article.component.html',
  styleUrls: ['./landing-small-article.component.scss']
})
export class LandingSmallArticleComponent {
  @Input() smallArticle : SmallArticle;
}
