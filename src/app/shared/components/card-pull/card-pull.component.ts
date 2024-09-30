import { Component, Input } from '@angular/core';
import { SearchDetails } from 'src/app/interfaces/response/search.model';

@Component({
  selector: 'app-card-pull',
  templateUrl: './card-pull.component.html',
  styleUrls: ['./card-pull.component.css'],
})
export class CardPullComponent {
  @Input() cardData: SearchDetails;
}
