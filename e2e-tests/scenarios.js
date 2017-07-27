'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /menu when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/menu");
  });


  describe('menu', function() {

    beforeEach(function() {
      browser.get('index.html#!/menu');
    });


    it('should render menu when user navigates to /menu', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('favorites', function() {

    beforeEach(function() {
      browser.get('index.html#!/favorites');
    });


    it('should render favorites when user navigates to /favorites', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
