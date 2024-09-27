import { Component, Input } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  constructor(private searchService: SearchService) {}

  onSearch(params: string) {
    const query = {
      q: `language:${params}`,
      per_page: 10,
      page: 1,
      direction: 'desc',
      sort: 'updated',
    };
    this.searchRepos(query);
  }

  searchRepos(params: any) {
    this.searchService
      .searchRepos(params)
      .pipe(distinctUntilChanged(params.q))
      .subscribe({
        next: data => console.log(data),
        error: error => console.error(error),
        complete: () => console.info('Complete'),
      });
  }
}
