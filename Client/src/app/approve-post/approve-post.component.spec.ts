import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AprovePostComponent } from './approve-post.component';

describe('AprovePostComponent', () => {
  let component: AprovePostComponent;
  let fixture: ComponentFixture<AprovePostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AprovePostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AprovePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
