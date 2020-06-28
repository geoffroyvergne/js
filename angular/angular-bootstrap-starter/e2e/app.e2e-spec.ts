import { AngularBootstrapStarterPage } from './app.po';

describe('angular-bootstrap-starter App', () => {
  let page: AngularBootstrapStarterPage;

  beforeEach(() => {
    page = new AngularBootstrapStarterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
