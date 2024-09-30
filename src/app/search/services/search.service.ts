import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { GithubPulls } from 'src/app/interfaces/response/api-github-pull.model';
import { GithubResponse } from 'src/app/interfaces/response/api-github.model';
import {
  SearchDetails,
  SearchResponse,
} from 'src/app/interfaces/response/search.model';
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
            totalItems: response.total_count,
            user: {
              userId: repo?.owner?.id,
              userAvatar: repo?.owner?.avatar_url,
              userName: repo?.owner?.login,
            },
            repository: {
              repositoryId: repo?.id,
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

  searchPulls(query: any, params: any) {
    return this.http
      .get<SearchDetails[]>(
        `${ENDPOINTS.searchPulls}/${query.owner}/${query.repo}/pulls`,
        {
          params,
        }
      )
      .pipe(
        tap(console.log),
        map((response: GithubPulls[]) => {
          return response.map(details => ({
            id: details.id,
            state: details.state,
            title: details.title,
            openedBy: details.user?.login,
            pullUrl: details.url,
            totalItems: response.length,
          }));
        })
      );
  }
}
