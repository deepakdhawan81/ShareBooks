import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';


@Component({
  moduleId: module.id,
  selector: 'story-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnDestroy, OnInit {
  title: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnDestroy() {
  }

  ngOnInit() {
     
  }

 }

 