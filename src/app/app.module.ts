import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './routes/app-routing.module';
import { SharedModule } from './shared/shared.module';
import { SearchModule } from './search/search.module';

const COMPONENTS = [AppComponent];

const MODULES = [SharedModule, SearchModule, BrowserModule, AppRoutingModule];
@NgModule({
  declarations: [COMPONENTS],
  imports: [MODULES],
  bootstrap: [COMPONENTS],
  providers: [],
})
export class AppModule {}
