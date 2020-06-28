import { AngularClarityStarterPage } from './app.po';

describe('angular-clarity-starter App', () => {
  let page: AngularClarityStarterPage;

  beforeEach(() => {
    page = new AngularClarityStarterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
