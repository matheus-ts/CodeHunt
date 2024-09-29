import { Component, Input } from '@angular/core';
import { LogoSize } from 'src/app/utils/enum/logo-size.enum';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css'],
})
export class LogoComponent {
  @Input() size: string = LogoSize.medium;
}
