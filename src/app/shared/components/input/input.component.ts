import { Component, EventEmitter, Input, Output } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  @Input() placeholder: string;
  @Output() search = new EventEmitter<string>();
  private searchSubject = new Subject<string>();

  constructor() {
    this.searchSubject
      .pipe(debounceTime(2000), distinctUntilChanged())
      .subscribe((searchTerm: string) => {
        console.log(searchTerm);
        this.search.emit(searchTerm);
      });
  }

  onInputChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const inputValue = inputElement?.value;
    if (inputValue.length >= 3) {
      this.searchSubject.next(inputValue);
    }
  }
}
