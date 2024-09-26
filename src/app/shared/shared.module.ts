import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { LogoComponent } from './components/logo/logo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const MODULES = [CommonModule, ReactiveFormsModule, FormsModule];
const COMPONENTS = [InputComponent, LogoComponent];

@NgModule({
  declarations: [COMPONENTS],
  imports: [MODULES],
  exports: [COMPONENTS],
})
export class SharedModule {}
