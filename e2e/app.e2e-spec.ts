import { LEONGPage } from './app.po';

describe('leong App', function() {
  let page: LEONGPage;

  beforeEach(() => {
    page = new LEONGPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
