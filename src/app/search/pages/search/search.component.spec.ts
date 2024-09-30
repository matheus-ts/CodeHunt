import { TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { SearchService } from '../../services/search.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LogoComponent } from 'src/app/shared/components/logo/logo.component';
import { InputComponent } from 'src/app/shared/components/input/input.component';

describe('SearchComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchComponent, LogoComponent, InputComponent],
      imports: [HttpClientTestingModule],
      providers: [SearchService],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(SearchComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
