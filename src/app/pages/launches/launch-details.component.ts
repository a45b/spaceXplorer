import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, SubscriptionLike } from 'rxjs';
import { filter, map, single, tap } from 'rxjs/operators';
import { SpacexService } from 'src/app/spacex.service';

@Component({
  selector: 'app-launch-details',
  templateUrl: './launch-details.component.html',
  styleUrls: ['./launch-details.component.scss']
})
export class LaunchDetailsComponent implements OnInit {
  details$!: Observable<any>;
  constructor(private router: Router, private spacexService: SpacexService) { }

  ngOnInit(): void {
    const launches = this.spacexService.getAllLaunches().pipe(
      map((epics: any) => epics.find((epic: any, inx: number) => inx === 22))
    )
    this.details$ = launches;
  }

  onBack(): void {
    console.log('onBack');
    this.router.navigate(['/']);
  }
  
}
