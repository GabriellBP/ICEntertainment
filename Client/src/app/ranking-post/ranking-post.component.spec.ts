import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingPostComponent } from './ranking-post.component';

describe('RankingPostComponent', () => {
  let component: RankingPostComponent;
  let fixture: ComponentFixture<RankingPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankingPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
