import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { TagComponent } from '../tag/tag.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardComponent, TagComponent],
    });
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;

    component.cardData = {
      user: {
        userId: 1,
        userAvatar: 'repo?',
      },
      repository: {
        createdAt: new Date(),
        updatedAt: new Date(),
        name: 'repo?',
        fullName: 'repo?',
        html_url: 'repo?',
        description: 'repo?',
        language: 'repo?',
        stars: 2,
        forks: 3,
        visibility: 'repo?',
        issues: 1,
        watchers: 1,
        topics: [],
      },
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
