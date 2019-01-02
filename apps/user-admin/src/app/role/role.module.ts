import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleRoutingModule } from './role-routing.module';
import { RoleComponent } from './role/role.component';

@NgModule({
  imports: [CommonModule, RoleRoutingModule],
  declarations: [RoleComponent]
})
export class RoleModule {}
