(function() {
    'use strict';

    angular
        .module('testJhipsterApp')
        .controller('PageController', PageController);

    function PageController () {
        var vm = this;

        vm.title= 'super titre';
    }
})();
