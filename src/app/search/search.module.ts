import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './pages/search/search.component';
import { SharedModule } from '../shared/shared.module';

const COMPONENTS = [SearchComponent];
const MODULES = [CommonModule, SharedModule];

@NgModule({
  declarations: [COMPONENTS],
  imports: [MODULES],
})
export class SearchModule {}
