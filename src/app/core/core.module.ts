import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Optional, SkipSelf } from '@angular/core';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { ArticleService } from './services/article.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ArticleService
  ]
})
export class CoreModule { 
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
  throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
