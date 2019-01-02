/// <reference types="cypress" />

import { getAppName } from '../support/app.po';

describe('User Admin', () => {
  beforeEach(() => cy.visit('/'));

  it('should display app name', () => {
    getAppName().contains('User Admin');
  });
});
