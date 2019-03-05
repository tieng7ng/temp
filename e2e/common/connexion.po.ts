import {
  browser, by, element, promise,
  until, protractor,
  ElementFinder, ElementArrayFinder
} from 'protractor';

export class ConnexionPage {
  navigateTo(url: string): promise.Promise<any> {
    return browser.get(url);
  }

  public getCssText(text: string) {
    let until = protractor.ExpectedConditions;
    console.log('>>> getCssText' + text);
    browser.wait(until.presenceOf(element(by.css(text))), 5000, 'Element taking too long to appear in the DOM');
    console.log('<<< getCssText' + text);
    return element(by.css(text));
  }


  public clickCssText(text: string) {
    let until = protractor.ExpectedConditions;
    let elmnt = element(by.css(text));
    console.log('>>> getCssText' + text);
    browser.wait(until.presenceOf(elmnt), 5000, 'Element taking too long to appear in the DOM');
    console.log('<<< getCssText' + text);
    element(elmnt.click());
  }

  getAllCssText(text: string) {
    let until = protractor.ExpectedConditions;
    browser.wait(until.presenceOf(element(by.css(text))), 5000, 'Element taking too long to appear in the DOM');
    return element.all(by.css(text));
  }


  // goId(idName: string) {
  //   element(by.id(idName)).click();
  // }

  clickId(idName: string) {
    let until = protractor.ExpectedConditions;
    let elmnt = element(by.id(idName));
    browser.wait(until.presenceOf(elmnt), 5000, 'Element "' + idName + '" taking too long to appear in the DOM');
    element(elmnt.click());
  }

  getId(idName: string) {
    let until = protractor.ExpectedConditions;
    let elmnt = element(by.id(idName));
    browser.wait(until.presenceOf(elmnt), 5000, 'Element "' + idName + '" taking too long to appear in the DOM');
    return elmnt;
  }


  setModelName(name: string, value: string) {
    let until = protractor.ExpectedConditions;
    let input = element(by.name(name));
    browser.wait(until.presenceOf(input), 5000, 'Element taking too long to appear in the DOM');
    input.sendKeys(value);
  }

  connexionSherpa(login: string, password: string) {
    let until = protractor.ExpectedConditions;

    this.navigateTo('/');
    expect(this.getCssText('.text-welcome').getText())
      .toContain('Bienvenue sur Sherpa');

    //=====
    // ok?
    let w8 = until.presenceOf(element(by.css('.home-wrapper')));
    browser.wait(w8, 5000, 'Element taking too long to appear in the DOM');
    // ok?
    //=====

    this.clickId('connexion');
    // tab : sigin
    this.clickId('singin1');
    // button : connexion
    this.clickId('singin2');

    this.setModelName('Email', login);
    this.setModelName('Password', password);

    this.clickId('buttonSignin');
    //    until.presenceOf(element(by.css('.home-wrapper')));

    //=====
    // FIX TIMEOUT
    browser.ignoreSynchronization = true;
    // FIX TIMEOUT
    //=====

  }

  signinProvider(login: string, password: string) {
    this.connexionSherpa(login, password);

    expect(this.getCssText('.payment-link').getText())
    .toContain('Envoyez un lien de paiement');
  }

  logout() {
    this.clickCssText('.ons-button.toolbar-button');
    this.clickId('logout');

  }

  signinClient(login: string, password: string) {
    this.connexionSherpa(login, password);

    expect(this.getId('home-notification').getText())
    .toContain('Notifications');


  }


}

