import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SearchResponse } from 'src/app/interfaces/response/search.model';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private repository = new BehaviorSubject<SearchResponse>(
    new SearchResponse()
  );
  currentRepository: Observable<SearchResponse> =
    this.repository.asObservable();

  constructor() {}

  changeRepository(repository: SearchResponse) {
    this.repository.next(repository);
  }
}
