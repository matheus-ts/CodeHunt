import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDetailsComponent } from './search-details.component';

describe('SearchDetailsComponent', () => {
  let component: SearchDetailsComponent;
  let fixture: ComponentFixture<SearchDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchDetailsComponent]
    });
    fixture = TestBed.createComponent(SearchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
