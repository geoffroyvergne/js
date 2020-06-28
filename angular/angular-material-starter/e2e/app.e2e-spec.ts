import { AngularMaterialStarterPage } from './app.po';

describe('angular-material-starter App', () => {
  let page: AngularMaterialStarterPage;

  beforeEach(() => {
    page = new AngularMaterialStarterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
