import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
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
  selectedYear = new FormControl('All');
  onlySuccess = new FormControl(false);
  constructor(private spacexService: SpacexService) {}
  
  ngOnInit(): void {
    this.years = this.getYears(2006, new Date().getFullYear());

    this.subscription$ = this.spacexService.filters$.subscribe(([year, launch]) => {
      this.list$ = this.spacexService.fetchData(year, launch);
    });

    this.selectedYear.valueChanges.subscribe((year) => {
      this.spacexService.selectedYear$.next(year)
    });

    this.onlySuccess.valueChanges.subscribe((onlySuccess) => {
      this.spacexService.isSuccessfulLaunch$.next(onlySuccess);
    });
  }

  getYears(fromYear: number, toYear: number) {
    const years = []
    while(fromYear < toYear) {
      years.push(fromYear);
      fromYear = fromYear + 1;
    }
    return years.sort((a, b) => a -b);
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
