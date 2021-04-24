import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'

import { BehaviorSubject, combineLatest } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class SpacexService {
  apiUrl = 'assets/launches.json';
  selectedYear$ = new BehaviorSubject<number | null>(null);
  isSuccessfulLaunch$ = new BehaviorSubject<boolean | null>(null);
  isSuccessfulLanding$ = new BehaviorSubject<boolean | null>(null);
  
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

    return this.http.get(this.apiUrl, { params })
  }
}
