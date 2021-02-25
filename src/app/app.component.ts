import { Component } from '@angular/core';
import { SpacexService } from './spacex.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'spaceXplorer';
  selectedYear: number | null = null;
  isSuccessfulLaunch: boolean | null = null;
  isSuccessfulLanding: boolean | null = null;
  boolOptions = [{ key: 'True', value: true}, {key: 'False', value: false }];
  years = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021];
 
  constructor(private spacexService: SpacexService) { }

  selectYear(year: number): void {
    this.selectedYear = this.selectedYear === year ? null : year;
  }

  setSuccessfulLaunch(option: boolean): void {
    this.isSuccessfulLaunch = this.isSuccessfulLaunch === option ? null : option;
  }

  setSuccessfulLanding(option: boolean): void {
    this.isSuccessfulLanding = this.isSuccessfulLanding === option ? null : option;
  }
  
}
