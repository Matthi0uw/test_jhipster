(function() {
    'use strict';

    angular
        .module('testJhipsterApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('page', {
            url: '/page',
            views: {
                'content@': {
                    templateUrl: 'app/page/page.html',
                    controller: 'PageController',
                    controllerAs: 'vm'
                }
            },
            resolve: {
                translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate,$translatePartialLoader) {
                    $translatePartialLoader.addPart('page');
                    return $translate.refresh();
                }]
            }
        });
    }
})();
