import { TestBed } from '@angular/core/testing';

import { HttpAuthInterceptor } from './http.interceptor.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

describe('HttpAuthInterceptor', () => {
  let interceptor: HttpAuthInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        HttpAuthInterceptor,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: HttpAuthInterceptor,
          multi: true,
        },
      ],
    });

    interceptor = TestBed.inject(HttpAuthInterceptor);
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });
});
