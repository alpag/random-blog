import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingSmallArticleComponent } from './landing-small-article.component';

describe('LandingSmallArticleComponent', () => {
  let component: LandingSmallArticleComponent;
  let fixture: ComponentFixture<LandingSmallArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingSmallArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingSmallArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
