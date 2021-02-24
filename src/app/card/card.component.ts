import { Component, Input, OnInit } from '@angular/core';
import { SpacexService } from '../spacex.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  constructor() { }
  @Input() data: any;
  
  ngOnInit(): void {
  }

}
