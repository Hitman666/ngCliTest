export class NgCliTestPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng-cli-test-app h1')).getText();
  }
}
