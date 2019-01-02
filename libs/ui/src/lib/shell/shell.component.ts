import { Component, Input, OnInit } from '@angular/core';

import { Navigation } from '../ui.interface';

@Component({
  selector: 'ames-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  @Input() appName: string;
  @Input() navigation: Navigation[];

  year = new Date().getFullYear();

  constructor() {}

  ngOnInit() {}
}
