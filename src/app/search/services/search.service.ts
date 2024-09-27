import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ENDPOINTS } from 'src/environments/endpoint';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}

  searchRepos(params = {}) {
    return this.http.get(ENDPOINTS.searchByParams, { params });
  }
}
