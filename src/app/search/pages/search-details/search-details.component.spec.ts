/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDetailsComponent } from './search-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SearchService } from '../../services/search.service';
import { LogoComponent } from 'src/app/shared/components/logo/logo.component';
import { CardPullComponent } from 'src/app/shared/components/card-pull/card-pull.component';
import { CardComponent } from 'src/app/shared/components/card/card.component';
import { TagComponent } from 'src/app/shared/components/tag/tag.component';
import {
  SearchDetails,
  SearchResponse,
} from 'src/app/interfaces/response/search.model';
import { of } from 'rxjs';
import { SharedService } from 'src/app/shared/service/shared.service';
import { Router } from '@angular/router';

describe('SearchDetailsComponent', () => {
  let component: SearchDetailsComponent;
  let fixture: ComponentFixture<SearchDetailsComponent>;

  const sharedServiceMock = {
    currentRepository: of({
      user: { userName: 'testUser' },
      repository: { name: 'testRepo' },
    }),
  };
  beforeEach(() => {
    let sharedService: SharedService;
    let router: Router;
    TestBed.configureTestingModule({
      declarations: [
        SearchDetailsComponent,
        LogoComponent,
        CardPullComponent,
        CardComponent,
        TagComponent,
      ],
      imports: [HttpClientTestingModule],
      providers: [
        { provide: SharedService, useValue: sharedServiceMock },
        {
          provide: Router,
          useValue: jasmine.createSpyObj('Router', ['navigate']),
        },
        SearchService,
      ],
    });
    fixture = TestBed.createComponent(SearchDetailsComponent);
    component = fixture.componentInstance;
    component.cardData = new SearchResponse();
    sharedService = TestBed.inject(SharedService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
