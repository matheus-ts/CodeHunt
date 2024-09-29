import { Component, Input } from '@angular/core';
import { SearchResponse } from 'src/app/interfaces/response/search.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() cardData: SearchResponse;
}
