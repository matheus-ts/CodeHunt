import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  SearchDetails,
  SearchResponse,
} from 'src/app/interfaces/response/search.model';
import { SharedService } from 'src/app/shared/service/shared.service';
import { LogoSize } from 'src/app/utils/enum/logo-size.enum';
import { SearchService } from '../../services/search.service';
import { QueryParams } from 'src/app/interfaces/query.model';
import { distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-search-details',
  templateUrl: './search-details.component.html',
  styleUrls: ['./search-details.component.css'],
})
export class SearchDetailsComponent implements OnInit {
  logoSize: LogoSize = LogoSize.small;
  cardData: SearchResponse;

  tableData: SearchDetails[] = [];
  paginationControls = {
    itemsPerPage: 3,
    currentPage: 1,
    totalItems: 0,
  };

  constructor(
    private sharedService: SharedService,
    private router: Router,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.sharedService.currentRepository.subscribe({
      next: data => {
        if (data.user.userName == undefined) this.router.navigate(['/']);

        this.cardData = data;
        this.searchRepos(this.buildQueryParams(1));
      },
      error: error => console.error('Erro ao buscar repositório:', error),
      // complete: () => this.searchRepos(this.buildQueryParams(1)),
    });
  }

  searchRepos(query: any) {
    const pathParameters = {
      owner: this.cardData.user.userName,
      repo: this.cardData.repository.name,
    };

    this.searchService
      .searchPulls(pathParameters, query)
      .pipe(distinctUntilChanged())
      .subscribe({
        next: data => {
          this.tableData = data;
        },
        error: error =>
          console.error('Erro ao buscar pulls do repositório:', error),
        complete: () => console.info('Busca de pulls repositório completa'),
      });
  }

  onChangePage(page: number) {
    this.searchRepos(this.buildQueryParams(page));
  }

  private buildQueryParams(page: any) {
    this.paginationControls.currentPage = page;
    return {
      per_page: this.tableData?.length,
      page: page,
      direction: 'desc',
      sort: 'updated',
    };
  }

  goToSearchPage() {
    this.router.navigate(['/']);
  }
}
