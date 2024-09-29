import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnChanges {
  @Input() totalItems: number;
  @Input() itemsPerPage: number;
  @Output() pageChanged = new EventEmitter<number>();

  pageNumbers: number[] = [];

  constructor() {}

  ngOnChanges(): void {
    this.calculatePageNumbers();
  }

  private calculatePageNumbers(): void {
    const totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    this.pageNumbers = Array.from({ length: totalPages }, (_, index) => index);
  }

  selectPage(page: number): void {
    this.pageChanged.emit(page + 1);
  }
}
