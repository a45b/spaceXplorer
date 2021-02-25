import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SpacexService } from '../spacex.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  list$!: Observable<any>;
  constructor(private spacexService: SpacexService) {}

  ngOnInit(): void {
    this.spacexService.appState$.subscribe((res) => {
      console.log(res);
    })
    this.list$ = this.spacexService.getData(100);
  }
  
}
