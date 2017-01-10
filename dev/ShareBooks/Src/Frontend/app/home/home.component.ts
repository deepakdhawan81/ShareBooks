import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  moduleId: module.id,
  selector: 'kickOn-home',
  templateUrl: 'home.component.html'
})
export class HomeComponent implements OnDestroy, OnInit {
 
  title: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }
 
  ngOnDestroy() {
   //todo
  }

  ngOnInit() {
    this.route.data.subscribe((data: { title: string }) => {
      this.title = data.title;
    });
  }
}
