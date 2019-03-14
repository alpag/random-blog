import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home-header-navbar',
    template: `
    <nav class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
         <li class="nav-item">
            <a routerLink="/home" routerLinkActive="active" class="nav-link" href="#">Home</a>
         </li>
         <li class="nav-item">
            <a routerLink="/articles" routerLinkActive="active" class="nav-link">Articles</a>
         </li>
         <li class="nav-item">
            <a routerLink="/currencies" routerLinkActive="active" class="nav-link" href="#">Currencies</a>
         </li>
         <li class="nav-item">
            <a routerLink="/contact" routerLinkActive="active" class="nav-link" href="#">Contact</a>
         </li>
      </ul>
   </nav>
    `,
    exportAs: 'homeHeaderNavbar'
})
export class HomeHeaderNavbarComponent implements OnInit {
    constructor() { }

    ngOnInit(): void {
     }
}
