import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule, MatButtonModule } from '@angular/material';

import { ShellComponent } from './shell/shell.component';

@NgModule({
  imports: [CommonModule, MatToolbarModule, MatButtonModule, RouterModule],
  declarations: [ShellComponent],
  exports: [ShellComponent]
})
export class UiModule {}
