'use strict';

describe('welcome-page module', function() {

  beforeEach(module('welcome-page'));

  describe('welcome-page controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view1Ctrl = $controller('WelcomePageCtrl');
      expect(WelcomePageCtrl).toBeDefined();
    }));

  });
});