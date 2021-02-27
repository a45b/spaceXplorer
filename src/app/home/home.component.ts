import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { SpacexService } from '../spacex.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  list$!: Observable<any>;
  subscription$!: Subscription;
  constructor(private spacexService: SpacexService) {}

  ngOnInit(): void {
    this.subscription$ = this.spacexService.filters$.subscribe(([year, launch, landing]) => {
      console.log(new Date().getTime());
      this.list$ = this.spacexService.fetchData(100, year, launch, landing);
    });
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

}
