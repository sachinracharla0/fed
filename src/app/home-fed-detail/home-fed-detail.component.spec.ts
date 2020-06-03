import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFedDetailComponent } from './home-fed-detail.component';

describe('HomeFedDetailComponent', () => {
  let component: HomeFedDetailComponent;
  let fixture: ComponentFixture<HomeFedDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeFedDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFedDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
