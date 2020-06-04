import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home-fed-detail',
  templateUrl: './home-fed-detail.component.html',
  styleUrls: ['./home-fed-detail.component.css']
})
export class HomeFedDetailComponent implements OnInit {
  public src = '//placehold.it/500x600';
  public heading: string;
  public image: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  this.route.params.subscribe(params => {
      this.heading = params['id'];
    });
    this.image = localStorage.getItem('image');
  }

}
