import { Component, Input } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { distinctUntilChanged } from 'rxjs';
import { QueryParams } from 'src/app/interfaces/query.model';
import { SearchResponse } from 'src/app/interfaces/response/search.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  private searchTerm: string;

  tableData: SearchResponse[] = [];
  itemsPerPage = 3;

  constructor(private searchService: SearchService) {}

  onSearch(searchTerm: string) {
    this.searchTerm = searchTerm;
    this.searchRepos(this.buildQueryParams(this.searchTerm, 1));
  }

  onChangePage(page: number) {
    this.searchRepos(this.buildQueryParams(this.searchTerm, page));
  }

  searchRepos(params: QueryParams) {
    this.searchService
      .searchRepos(params)
      .pipe(distinctUntilChanged())
      .subscribe({
        next: data => (this.tableData = data),
        error: error => console.error('Erro ao buscar repositórios:', error),
        complete: () => console.info('Busca de repositórios completa'),
      });
  }

  private buildQueryParams(language: string, page: number): QueryParams {
    return {
      q: `language:${language}`,
      per_page: this.itemsPerPage,
      page: page,
      direction: 'desc',
      sort: 'updated',
    };
  }
}
