interface User {
  userId: number;
  userAvatar: string;
}

interface Repository {
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

export interface SearchResponse {
  user: User;
  repository: Repository;
  //   paginable: string;
}
