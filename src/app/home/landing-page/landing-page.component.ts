import { Component, OnInit } from '@angular/core';
import { SMALLARTICLES} from './small-articles';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  smallArticles = SMALLARTICLES;
  constructor() { }

  ngOnInit() {
  }

}
