import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchResponse } from 'src/app/interfaces/response/search.model';
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

  tableData: any[];
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
        this.cardData = data;
        this.searchRepos();
      },
      error: error => console.error('Erro ao buscar repositório:', error),
      complete: () => this.searchRepos(),
    });
  }

  searchRepos() {
    const query = {
      page: 1,
      per_page: 4,
      sort: 'created',
    };
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
          this.paginationControls.totalItems = data[0].totalItems;
        },
        error: error =>
          console.error('Erro ao buscar pulls do repositório:', error),
        complete: () => console.info('Busca de pulls repositório completa'),
      });
  }

  goToSearchPage() {
    this.router.navigate(['/']);
  }
}
