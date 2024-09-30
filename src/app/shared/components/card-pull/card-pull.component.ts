import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-pull',
  templateUrl: './card-pull.component.html',
  styleUrls: ['./card-pull.component.css'],
})
export class CardPullComponent {
  @Input() cardData: any;
}
