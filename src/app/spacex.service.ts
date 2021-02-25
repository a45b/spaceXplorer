import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppState } from './types';

@Injectable({
  providedIn: 'root'
})
export class SpacexService {
  apiUrl = 'https://api.spaceXdata.com/v3/launches';
  appState$ = new BehaviorSubject<AppState | null>(null);

  constructor(private http: HttpClient) { }

  getData(limit = 100, launch?: boolean, land?: boolean, year?: number): any {
   let params = new HttpParams();
   params = params.append('limit', limit.toString());

   if (launch) {
      params = params.append('launch_success', launch.toString());
    }
   if (land) {
      params = params.append('launch_success', land.toString());
    }
   if (year) {
      params = params.append('launch_success', year.toString());
    }

   console.log(params.toString());

   return this.http.get(this.apiUrl, { params });
  }
}
