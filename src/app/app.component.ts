import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'spaceXplorer';
  selectedYear!: number;
  isSuccessfulLaunch!: boolean;
  isSuccessfulLanding!: boolean;
  boolOptions = [{ key: 'True', value: true}, {key: 'False', value: false }];
  years = [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021];
 
  selectYear(year: number) {
    this.selectedYear = year;
  }

  setSuccessfulLaunch(option: boolean) {
    this.isSuccessfulLaunch = option;
  }

  setSuccessfulLanding(option: boolean) {
    this.isSuccessfulLanding = option;
  }
  
}
