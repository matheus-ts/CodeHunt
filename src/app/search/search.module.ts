import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './pages/search/search.component';
import { SharedModule } from '../shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchDetailsComponent } from './pages/search-details/search-details.component';

const COMPONENTS = [SearchComponent, SearchDetailsComponent];
const MODULES = [CommonModule, SharedModule, NgxPaginationModule];

@NgModule({
  declarations: [COMPONENTS],
  imports: [MODULES],
})
export class SearchModule {}
