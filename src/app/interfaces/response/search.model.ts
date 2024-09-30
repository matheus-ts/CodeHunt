interface User {
  userId: number;
  userAvatar: string;
  userName: string;
}

interface Repository {
  repositoryId: number;
  createdAt: Date;
  updatedAt: Date;
  language: string;
  stars: number;
  forks: number;
  html_url: string;
  name: string;
  fullName: string;
  description: string;
  visibility: string;
  issues: number;
  watchers: number;
  topics: string[];
}

export class SearchResponse {
  user: User;
  repository: Repository;
  //   paginable: string;
}

export class SearchDetails {
  totalItems: number;
  id: number;
  state: string;
  title: string;
  openedBy: string;
  pullUrl: string;
}
