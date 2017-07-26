import { StyleTestingPage } from './app.po';

describe('style-testing App', () => {
  let page: StyleTestingPage;

  beforeEach(() => {
    page = new StyleTestingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
