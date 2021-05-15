import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-space-card',
  templateUrl: './space-card.component.html'
})
export class SpaceCardComponent {
  @Input() data: any;
}
