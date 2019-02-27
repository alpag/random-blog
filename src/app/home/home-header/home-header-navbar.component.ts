import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home-header-navbar',
    template: `
    <nav class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
         <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
         </li>
         <li class="nav-item">
            <a class="nav-link" href="#">Articles</a>
         </li>
         <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
         </li>
      </ul>
   </nav>
    `,
    exportAs: 'homeHeaderNavbar'
})
export class HomeHeaderNavbarComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}
