/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('eggnog')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('FIREBASE_URL', 'https://eggnog.firebaseio.com/');

})();
