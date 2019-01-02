import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CapabilityRoutingModule } from './capability-routing.module';
import { CapabilityComponent } from './capability/capability.component';

@NgModule({
  imports: [CommonModule, CapabilityRoutingModule],
  declarations: [CapabilityComponent]
})
export class CapabilityModule {}
