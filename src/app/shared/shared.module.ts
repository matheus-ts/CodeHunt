import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { LogoComponent } from './components/logo/logo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { TagComponent } from './components/tag/tag.component';
import { NgxPaginationModule } from 'ngx-pagination';

const MODULES = [
  CommonModule,
  ReactiveFormsModule,
  FormsModule,
  NgxPaginationModule,
];
const COMPONENTS = [InputComponent, LogoComponent, CardComponent, TagComponent];

@NgModule({
  declarations: [COMPONENTS],
  imports: [MODULES],
  exports: [COMPONENTS],
})
export class SharedModule {}
