import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from '../search/pages/search/search.component';
import { SearchDetailsComponent } from '../search/pages/search-details/search-details.component';

const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'details', component: SearchDetailsComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
