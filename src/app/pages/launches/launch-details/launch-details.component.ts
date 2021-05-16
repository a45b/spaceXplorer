import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { SpacexService } from 'src/app/spacex.service';

@Component({
  selector: 'app-launch-details',
  templateUrl: './launch-details.component.html',
  styleUrls: ['./launch-details.component.scss']
})
export class LaunchDetailsComponent implements OnInit {
  details$!: Observable<any>;
  constructor(
    private router: Router,
    private route: ActivatedRoute, 
    private spacexService: SpacexService) { }

  ngOnInit(): void {
    this.details$ = this.route.paramMap.pipe(
      take(1),
      switchMap((params: ParamMap) => this.spacexService.getLaunchById(params.get('id')))
    );
  }

  onBack(): void {
    this.router.navigate(['/']);
  }
  
}
