import { Component, Input } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { distinctUntilChanged } from 'rxjs';
import { QueryParams } from 'src/app/interfaces/query.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  tableData: any[] = [{ teste: 'oi' }];
  constructor(private searchService: SearchService) {}

  onSearch(params: string) {
    const query: QueryParams = {
      q: `language:${params}`,
      per_page: 10,
      page: 1,
      direction: 'desc',
      sort: 'updated',
    };
    console.info(query);
    // this.searchRepos(query);
  }

  searchRepos(params: QueryParams) {
    this.searchService
      .searchRepos(params)
      .pipe(distinctUntilChanged())
      .subscribe({
        next: data => console.log(data),
        error: error => console.error(error),
        complete: () => console.info('Complete'),
      });
  }
}
