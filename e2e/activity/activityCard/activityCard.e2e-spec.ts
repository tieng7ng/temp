import {
  browser, by, element, promise,
  until, protractor,
  ElementFinder, ElementArrayFinder
} from 'protractor';

import { ActivitycardPage } from './activityCard.po';

describe('firebase-universal-sw App', () => {
  let page: ActivitycardPage = new ActivitycardPage();

  beforeEach(() => {
    
  });

  it('should provider connexion activityCard', () => {
    page.signinProvider('luc@sherpa.com', 'LucDev');
    page.navigateTo('/activity/F4DaVfAsKY6PBNBDmTX5/vtt-lectrique-enfant-1-60-m-');

    page.logout();
  });

  it('should client connexion activityCard', () => {
    page.signinClient('toto@titi.fr', 'qwertyui');
    page.navigateTo('/activity/F4DaVfAsKY6PBNBDmTX5/vtt-lectrique-enfant-1-60-m-');

    page.logout();
  });


});
