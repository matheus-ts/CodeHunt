import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { GithubResponse } from 'src/app/interfaces/response/api-github.model';
import { SearchResponse } from 'src/app/interfaces/response/search.model';
import { ENDPOINTS } from 'src/environments/endpoint';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}

  searchRepos(params = {}) {
    return this.http
      .get<SearchResponse[]>(ENDPOINTS.searchByParams, { params })
      .pipe(
        tap(console.log),
        map((response: GithubResponse) => {
          return response?.items.map(repo => ({
            user: {
              userId: repo?.owner?.id,
              userAvatar: repo?.owner?.avatar_url,
            },
            repository: {
              createdAt: repo?.created_at,
              updatedAt: repo?.updated_at,
              name: repo?.name,
              fullName: repo?.full_name,
              html_url: repo?.html_url,
              description: repo?.description,
              language: repo?.language,
              stars: repo?.stargazers_count,
              forks: repo?.forks_count,
              visibility: repo?.visibility,
              issues: repo?.open_issues,
              watchers: repo?.watchers,
              topics: repo?.topics,
            },
          }));
        })
      );
  }
}
