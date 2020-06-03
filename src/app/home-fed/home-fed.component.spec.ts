import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFedComponent } from './home-fed.component';

describe('HomeFedComponent', () => {
  let component: HomeFedComponent;
  let fixture: ComponentFixture<HomeFedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeFedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
