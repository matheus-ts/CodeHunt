import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPullComponent } from './card-pull.component';
import { TagComponent } from '../tag/tag.component';
import { SearchDetails } from 'src/app/interfaces/response/search.model';

describe('CardPullComponent', () => {
  let component: CardPullComponent;
  let fixture: ComponentFixture<CardPullComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardPullComponent, TagComponent],
    });
    fixture = TestBed.createComponent(CardPullComponent);
    component = fixture.componentInstance;
    component.cardData = new SearchDetails();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
