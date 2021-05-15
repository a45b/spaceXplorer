import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'

import { BehaviorSubject, combineLatest, Observable } from 'rxjs'
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SpacexService {
  apiUrl = environment.apiUrl;
  selectedYear$ = new BehaviorSubject<number | null>(null);
  isSuccessfulLaunch$ = new BehaviorSubject<boolean | null>(null);
  isSuccessfulLanding$ = new BehaviorSubject<boolean | null>(null);
  data$!: Observable<any>;
  filters$ = combineLatest([
    this.selectedYear$, 
    this.isSuccessfulLaunch$, 
    this.isSuccessfulLanding$
  ]);

  constructor(private http: HttpClient) {}

  fetchData(limit = 100, year?: number | null, launch?: boolean | null, land?: boolean | null): any {
    let params = new HttpParams()
    params = params.append('limit', limit.toString())

    if (year !== null && year !== undefined) {
      params = params.append('launch_year', year.toString())
    }
    if (launch !== null && launch !== undefined) {
      params = params.append('launch_success', launch.toString())
    }
    if (land !== null && land !== undefined) {
      params = params.append('land_success', land.toString())
    }

    if (!this.data$) {
      // this.data$ = this.http.get(`${this.apiUrl}/launches`, { params });
      this.data$ = this.getAllLaunches();
    }
    return this.data$;
  }

  /*** API ***/
  
  // getLaunch(id: string): any {
  //   return this.http.get('assets/launches.json').pipe(
  //     filter((launch: any) => launch.id === id)
  //   )
  // }

  getALLlandpads() {
    return this.http.get('assets/landpads.json');
  }

  getAllLaunches() {
    return this.http.get('assets/launches.json');
  }

  getAllLaunchpads() {
    return this.http.get('assets/launchpads.json');
  }

  getAllPayloads() {
    return this.http.get('assets/payloads.json');
  }
  
  getAllRockets() {
    return this.http.get('assets/rockets.json');
  }

  getAllShips() {
    return this.http.get('assets/ships.json');
  }
  
}
