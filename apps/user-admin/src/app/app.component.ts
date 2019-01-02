import { Component } from '@angular/core';

import { environment } from '../environments/environment';

@Component({
  selector: 'ames-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  env = environment;

  navigation = [
    { label: 'Users', link: 'user' },
    { label: 'Roles', link: 'role' },
    { label: 'Capabilities', link: 'capability' }
  ];
}
