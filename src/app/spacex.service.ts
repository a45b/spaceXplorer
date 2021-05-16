import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'

import { BehaviorSubject, combineLatest, Observable } from 'rxjs'
import { environment } from '../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpacexService {
  apiUrl = environment.apiUrl;
  selectedYear$ = new BehaviorSubject<number | string>('All');
  isSuccessfulLaunch$ = new BehaviorSubject<boolean | null>(null);
  isSuccessfulLanding$ = new BehaviorSubject<boolean | null>(null);
  data$!: Observable<any>;
  
  filters$ = combineLatest([
    this.selectedYear$, 
    this.isSuccessfulLaunch$, 
    this.isSuccessfulLanding$
  ]);

  constructor(private http: HttpClient) {}

  fetchData(year?: number | string, launch?: boolean | null): any {
    let params = new HttpParams();
    
    if (year !== null && year !== undefined) {
      params = params.append('launch_year', year.toString())
    }
    if (launch !== null && launch !== undefined) {
      params = params.append('launch_success', launch.toString())
    }

    if (!this.data$) {
      this.data$ = this.http.get(`${this.apiUrl}/launches`, { params });
      return this.data$;
    }

    return this.data$.pipe(
      map((list: any[]) => {
        return list.filter((r) => {
          if (year === 'All') {
            return r;
          } else if (year === new Date(r.date_utc).getFullYear()) {
            return r;
          }
        }).filter((r) => {
          if (!launch) {
            return r;
          } else if (launch === r.success){
            return r;
          }
        })
      })
    );
  }
  
  getLaunchById(id: string | null): any {
    return this.http.get(`${this.apiUrl}/launches/${id}`);
  }
  
}
