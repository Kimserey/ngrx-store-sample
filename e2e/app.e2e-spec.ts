import { NgrxStoreSamplePage } from './app.po';

describe('ngrx-store-sample App', () => {
  let page: NgrxStoreSamplePage;

  beforeEach(() => {
    page = new NgrxStoreSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
