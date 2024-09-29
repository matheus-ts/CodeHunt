import { Component } from '@angular/core';
import { LogoSize } from 'src/app/utils/enum/logo-size.enum';

@Component({
  selector: 'app-search-details',
  templateUrl: './search-details.component.html',
  styleUrls: ['./search-details.component.css'],
})
export class SearchDetailsComponent {
  logoSize: LogoSize = LogoSize.small;
}
