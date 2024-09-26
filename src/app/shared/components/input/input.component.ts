import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  @Input() placeholder: string;

  @Output() search = new EventEmitter<string>();

  onInputChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.search.emit(inputElement?.value);
  }
}
