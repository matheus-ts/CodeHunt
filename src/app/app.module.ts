import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './routes/app-routing.module';
import { SharedModule } from './shared/shared.module';
import { SearchModule } from './search/search.module';
import { HttpAuthInterceptor } from './interceptors/http.interceptor.service';

const COMPONENTS = [AppComponent];

const MODULES = [
  SharedModule,
  SearchModule,
  BrowserModule,
  AppRoutingModule,
  HttpClientModule,
];
@NgModule({
  declarations: [COMPONENTS],
  imports: [MODULES],
  bootstrap: [COMPONENTS],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpAuthInterceptor,
      multi: true,
    },
  ],
})
export class AppModule {}
