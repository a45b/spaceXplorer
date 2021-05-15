import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { SpacexService } from 'src/app/spacex.service';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.scss']
})
export class LaunchesComponent implements OnInit {
  list$!: Observable<any>;
  subscription$!: Subscription;
  years!: number[];
  constructor(private spacexService: SpacexService) {}
  
  ngOnInit(): void {
    this.subscription$ = this.spacexService.filters$.subscribe(([year, launch, landing]) => {
      this.list$ = this.spacexService.fetchData(100, year, launch, landing);
    });
    this.years = this.getYears(2001, new Date().getFullYear());
  }

  getYears(fromYear: number, toYear: number) {
    const years = []
    while(fromYear < toYear) {
      years.push(fromYear);
      fromYear = fromYear + 1;
    }
    return years.sort((a, b) => b - a);
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
