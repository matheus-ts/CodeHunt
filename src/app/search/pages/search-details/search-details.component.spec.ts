import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDetailsComponent } from './search-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SearchService } from '../../services/search.service';
import { LogoComponent } from 'src/app/shared/components/logo/logo.component';
import { CardPullComponent } from 'src/app/shared/components/card-pull/card-pull.component';
import { CardComponent } from 'src/app/shared/components/card/card.component';
import { TagComponent } from 'src/app/shared/components/tag/tag.component';

describe('SearchDetailsComponent', () => {
  let component: SearchDetailsComponent;
  let fixture: ComponentFixture<SearchDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        SearchDetailsComponent,
        LogoComponent,
        CardPullComponent,
        CardComponent,
        TagComponent,
      ],
      imports: [HttpClientTestingModule],
      providers: [SearchService],
    });
    fixture = TestBed.createComponent(SearchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
